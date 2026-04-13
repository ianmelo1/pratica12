document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form-cadastro');
  const inputNome = document.getElementById('nome');
  const inputPost = document.getElementById('post');

  const erroNome = criarMensagemErro('erro-nome');
  const erroPost = criarMensagemErro('erro-post');

  inputNome.insertAdjacentElement('afterend', erroNome);
  inputPost.insertAdjacentElement('afterend', erroPost);

  inputNome.addEventListener('input', () => limparErro(inputNome, erroNome));
  inputPost.addEventListener('input', () => limparErro(inputPost, erroPost));

  form.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const nomeValor     = inputNome.value;
    const conteudoValor = inputPost.value;

    const nomeValido     = validarCampo(inputNome, erroNome, 'O campo "Seu nome" é obrigatório.');
    const conteudoValido = validarCampo(inputPost, erroPost, 'O campo "O que está pensando?" é obrigatório.');

    if (!nomeValido || !conteudoValido) return;

    if (conteudoValor.trim().length < 3) {
      mostrarErro(inputPost, erroPost, 'O post precisa ter pelo menos 3 caracteres.');
      return;
    }

    adicionarPost(nomeValor, conteudoValor);
    exibirSucesso(form);
    form.reset();
  });
});

function criarMensagemErro(id) {
  const span = document.createElement('span');
  span.id = id;
  span.style.cssText = 'color:#ff7675; font-size:0.85rem; margin-top:-8px; display:none;';
  return span;
}

function validarCampo(input, erroEl, mensagem) {
  if (!input.value.trim()) {
    mostrarErro(input, erroEl, mensagem);
    return false;
  }
  return true;
}

function mostrarErro(input, erroEl, mensagem) {
  erroEl.textContent = mensagem;
  erroEl.style.display = 'block';
  input.style.borderColor = '#ff7675';
}

function limparErro(input, erroEl) {
  erroEl.style.display = 'none';
  input.style.borderColor = '';
}

function exibirSucesso(form) {
  const anterior = document.getElementById('msg-sucesso');
  if (anterior) anterior.remove();

  const msg = document.createElement('p');
  msg.id = 'msg-sucesso';
  msg.textContent = '✅ Post publicado com sucesso!';
  msg.style.cssText = 'color:#00b894; font-weight:bold; text-align:center; margin-top:10px;';
  form.appendChild(msg);

  setTimeout(() => msg.remove(), 3000);
}