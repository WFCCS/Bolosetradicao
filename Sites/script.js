// Captura o formulário pelo ID
const form = document.getElementById('contactForm');

// Adiciona um evento de submissão ao formulário
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio real para demonstrar a mensagem
    alert('Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.'); // Exibe o aviso
    form.reset(); // Limpa os campos do formulário
});
