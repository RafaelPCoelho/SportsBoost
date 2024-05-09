document.getElementById('createWallet').addEventListener('click', function() {
    fetch('/create-wallet', {
        method: 'POST'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Falha na resposta da rede: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        alert('Carteira criada com sucesso!');
        localStorage.setItem('jwtToken', data.token); // Armazenar o token JWT recebido
        document.getElementById('createWallet').style.display = 'none'; // Esconde o botão após a criação
        document.getElementById('tokenQuantity').style.display = 'block';
        document.getElementById('createTokens').style.display = 'block';
    })
    .catch(error => {
        alert('Erro ao criar carteira: ' + error.message);
    });
});

document.getElementById('createTokens').addEventListener('click', function() {
    const quantity = document.getElementById('tokenQuantity').value;
    const token = localStorage.getItem('jwtToken');

    const options = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            quantity: quantity
        })
    };

    fetch('/create-tokens', options)
    .then(response => response.json())
    .then(response => {
        console.log(response);
        alert('Tokens criados com sucesso!');
    })
    .catch(err => {
        console.error(err);
        alert('Erro ao criar tokens: ' + err.message);
    });
});

document.getElementById('buyTokens').addEventListener('click', function() {
    alert('Comprar tokens ainda não implementado.');
});

document.getElementById('chooseSport').addEventListener('click', function() {
    alert('Escolher esporte ainda não implementado.');
});
