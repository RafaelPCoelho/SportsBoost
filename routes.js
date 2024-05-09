const express = require('express');
const axios = require('axios');
const jwt = require('jsonwebtoken'); // Importando jsonwebtoken
const dotenv = require('dotenv');
dotenv.config(); // Carregando variáveis de ambiente

const URL_DA_API_LUMX_WALLETS = "https://protocol-sandbox.lumx.io/v2/wallets";

const makeRoutes = () => {
    const routes = express.Router();

    // Middleware de autenticação
    function authenticate(req, res, next) {
        const token = req.headers.authorization?.split(' ')[1]; // Bearer Token
        if (!token) {
            return res.status(401).json({ message: "Acesso negado. Nenhum token fornecido." });
        }
    
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET); // Usar variável de ambiente para o segredo
            req.walletId = decoded.walletId;
            next();
        } catch (ex) {
            res.status(400).send("Token inválido.");
        }
    }

    routes.get('/', (req, res) => {
        res.status(200).send('Página inicial da API');
    });

    routes.get('/example', (req, res) => {
        res.status(200).json({ message: "Isso é um exemplo" });
    });

    routes.post('/create-wallet', async (req, res) => {
        const options = {
            headers: {
                Authorization: `Bearer ${process.env.API_KEY}`
            }
        };
        try {
            const response = await axios.post(URL_DA_API_LUMX_WALLETS, {}, options);
            const walletId = response.data.id; // Supondo que o ID esteja no campo 'id' do JSON retornado
    
            // Criar um token JWT e enviá-lo ao cliente
            const token = jwt.sign({ walletId }, process.env.JWT_SECRET, { expiresIn: '1h' });
    
            res.status(200).json({ token }); // Enviar o token ao cliente
        } catch (error) {
            console.error(error.response ? error.response.data : error.message);
            if (error.response) {
                res.status(error.response.status).send(error.response.data);
            } else {
                res.status(500).json({ error: error.message });
            }
        }
    });

    routes.post('/create-tokens', authenticate, async (req, res) => {
    const { quantity } = req.body;
    const walletId = req.walletId; // Obtido do token JWT pelo middleware 'authenticate'
    const options2 = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${process.env.API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: `{"contractId":"3c90c3cc-0d44-4b50-8888-8dd25736052a","walletId":${walletId},"quantity":${quantity},"uriNumber":0}`
    };

    try {
        const response = await axios.post('https://protocol-sandbox.lumx.io/v2/transactions/mints', options2);
        const tokenId = response.data.tokenId; // Assumindo que o ID do token está disponível aqui
        res.status(200).json({ tokenId: tokenId, message: "Token criado com sucesso!" });
    } catch (error) {
        console.error(error.response ? error.response.data : error.message);
        res.status(error.response ? error.response.status : 500).json({ error: error.message });
    }
});

    return routes;
}

module.exports = makeRoutes;
