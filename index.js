const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const makeRoutes = require('./routes');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Adiciona esta linha

// Rotas
app.use('/', makeRoutes());

// Iniciar servidor
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
