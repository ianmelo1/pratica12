document.addEventListener('DOMContentLoaded', () => {
  renderizarTabela();
});

function renderizarTabela() {
  const tbody = document.getElementById('tabela-body');
  const posts = carregarPosts();

  if (posts.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="4" style="text-align:center; color:#888; padding:30px;">
          Nenhum dado cadastrado ainda.
          <a href="cadastro.html" style="color:#A29BFE;">Criar primeiro post</a>
        </td>
      </tr>`;
    return;
  }

  tbody.innerHTML = posts.map((post, index) => `
    <tr id="linha-${post.id}">
      <td>${index + 1}</td>
      <td id="autor-${post.id}">${escaparHTML(post.autor)}</td>
      <td id="conteudo-${post.id}">${escaparHTML(post.conteudo)}</td>
      <td>
        <button class="btn-editar" onclick="iniciarEdicao(${post.id})">Editar</button>
        <button class="btn-excluir" onclick="confirmarExclusao(${post.id})">Excluir</button>
      </td>
    </tr>
  `).join('');
}

function confirmarExclusao(id) {
  if (!confirm('Tem certeza que deseja excluir este post?')) return;

  removerPost(id);

  const linha = document.getElementById(`linha-${id}`);
  if (linha) {
    linha.style.transition = 'opacity 0.3s';
    linha.style.opacity = '0';
    setTimeout(() => {
      linha.remove();
      const tbody = document.getElementById('tabela-body');
      if (tbody.children.length === 0) renderizarTabela();
    }, 300);
  }
}

function iniciarEdicao(id) {
  const autorEl    = document.getElementById(`autor-${id}`);
  const conteudoEl = document.getElementById(`conteudo-${id}`);
  const linha      = document.getElementById(`linha-${id}`);

  const autorOriginal    = autorEl.textContent;
  const conteudoOriginal = conteudoEl.textContent;

  autorEl.innerHTML    = `<input class="input-edicao" value="${escaparHTML(autorOriginal)}" style="width:100%; padding:6px; border:1px solid #A29BFE; border-radius:6px;">`;
  conteudoEl.innerHTML = `<input class="input-edicao" value="${escaparHTML(conteudoOriginal)}" style="width:100%; padding:6px; border:1px solid #A29BFE; border-radius:6px;">`;

  const tdAcoes = linha.querySelector('td:last-child');
  tdAcoes.innerHTML = `
    <button class="btn-editar" onclick="salvarEdicao(${id})">Salvar</button>
    <button class="btn-excluir" onclick="cancelarEdicao(${id}, '${escaparHTML(autorOriginal)}', '${escaparHTML(conteudoOriginal)}')">Cancelar</button>
  `;
}

function salvarEdicao(id) {
  const linha        = document.getElementById(`linha-${id}`);
  const inputs       = linha.querySelectorAll('.input-edicao');
  const novoAutor    = inputs[0].value.trim();
  const novoConteudo = inputs[1].value.trim();

  if (!novoAutor || !novoConteudo) {
    alert('Os campos não podem ficar em branco.');
    return;
  }

  editarPost(id, novoAutor, novoConteudo);
  renderizarTabela();
}

function cancelarEdicao(id, autorOriginal, conteudoOriginal) {
  const autorEl    = document.getElementById(`autor-${id}`);
  const conteudoEl = document.getElementById(`conteudo-${id}`);
  const linha      = document.getElementById(`linha-${id}`);

  autorEl.textContent    = autorOriginal;
  conteudoEl.textContent = conteudoOriginal;

  linha.querySelector('td:last-child').innerHTML = `
    <button class="btn-editar" onclick="iniciarEdicao(${id})">Editar</button>
    <button class="btn-excluir" onclick="confirmarExclusao(${id})">Excluir</button>
  `;
}

function escaparHTML(texto) {
  const div = document.createElement('div');
  div.textContent = String(texto);
  return div.innerHTML;
}