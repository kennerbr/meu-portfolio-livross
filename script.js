document.addEventListener('DOMContentLoaded', () => {
  const ano = document.getElementById('ano');
  if(ano) ano.textContent = new Date().getFullYear();

  // Exemplo: captura envio do formulário (página de contato)
  const form = document.querySelector('form');
  if(form){
    form.addEventListener('submit', e => {
      e.preventDefault();
      alert("Mensagem enviada com sucesso! 📩");
      form.reset();
    });
  }
});
