// === Contador de pedido (acessível com aria-live) ===
const botoes = document.querySelectorAll('.btn-add');
const contador = document.getElementById('contador-pedido');
let total = 0;
botoes.forEach((btn) => {
  btn.addEventListener('click', () => {
    total++;
    contador.textContent = String(total);
  });
});

// === Ano dinâmico no rodapé ===
document.getElementById('ano').textContent = new Date().getFullYear();

// === Validação acessível do formulário ===
const form = document.querySelector('.form');
const feedback = document.getElementById('form-feedback');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nome = form.nome.value.trim();
  const email = form.email.value.trim();
  const mensagem = form.mensagem.value.trim();
  feedback.classList.remove('success', 'error');
  if (!nome || !email || !mensagem) {
    feedback.textContent = 'Por favor, preencha todos os campos.';
    feedback.classList.add('error');
    return;
  }
  if (!email.includes('@')) {
    feedback.textContent = 'Informe um e-mail válido.';
    feedback.classList.add('error');
    return;
  }

  feedback.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada.`;
  feedback.classList.add('success');
  form.reset();
});

function toggleMenu() {
  const nav = document.getElementById('nav-list');
  const button = document.getElementById('mobile-menu');

  if (!nav) return;

  const isOpen = nav.classList.toggle('active');
  if (button) button.setAttribute('aria-expanded', String(isOpen));
}

// Mobile: abrir/fechar
(function initMenu() {
  const button = document.getElementById('mobile-menu');
  if (!button) return;

  button.addEventListener('click', () => {
    toggleMenu();
  });

  // Fecha o menu ao clicar em um link (mobile)
  const nav = document.getElementById('nav-list');
  if (!nav) return;

  nav.addEventListener('click', (e) => {
    const target = e.target;
    if (target && target.tagName === 'A') {
      nav.classList.remove('active');
      button.setAttribute('aria-expanded', 'false');
    }
  });
})();


function agendarWhatsApp() {

  let data = document.getElementById("data")?.value;
  let horario = document.getElementById("horario")?.value;
  let pagamento = document.getElementById("pagamento")?.value;

  let mensagem = `Olá! Gostaria de agendar um horário.

📅 Data: ${data}
⏰ Horário: ${horario}
💳 Pagamento: ${pagamento}`;

  let numero = "5511999999999";
  let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");

}

function abrirFormulario() {

  document.getElementById(
    "formularioVIP"
  ).style.display = "block";

}

function gerarCartao() {

  let nome =
    document.getElementById(
      "nome-vip"
    ).value;

  let telefone =
    document.getElementById(
      "telefone-vip"
    ).value;

  let foto =
    document.getElementById(
      "foto-vip"
    ).files[0];

  document.getElementById(
    "nomePreview"
  ).innerText = nome;

  document.getElementById(
    "telefonePreview"
  ).innerText = telefone;

  let leitor = new FileReader();

  leitor.onload = function(e) {

    document.getElementById(
      "fotoPreview"
    ).src = e.target.result;

  }

  leitor.readAsDataURL(foto);

  document.getElementById(
    "cartaoVIP"
  ).style.display = "block";

}
