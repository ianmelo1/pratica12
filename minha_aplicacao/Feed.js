document.addEventListener('DOMContentLoaded', () => {
  renderizarFeed();
});

function renderizarFeed() {
  const feedLista = document.getElementById('feed-lista');
  const posts = carregarPosts();

  if (posts.length === 0) {
    feedLista.innerHTML = `
      <div style="text-align:center; padding:40px; color:#888;">
        <p style="font-size:1.5rem; margin-bottom:8px;">✨</p>
        <p>Nenhum post ainda. <a href="cadastro.html" style="color:#A29BFE;">Seja o primeiro a publicar!</a></p>
      </div>`;
    return;
  }

  feedLista.innerHTML = posts.map(post => criarCardPost(post)).join('');
}

function criarCardPost(post) {
  const iniciais = post.autor
    .split(' ')
    .slice(0, 2)
    .map(p => p[0].toUpperCase())
    .join('');

  return `
    <div class="card-post" data-id="${post.id}">
      <div class="card-header">
        <div class="avatar">${iniciais}</div>
        <div class="card-info">
          <strong class="card-autor">${escaparHTML(post.autor)}</strong>
          <span class="card-data">${post.data}</span>
        </div>
      </div>
      <p class="card-conteudo">${escaparHTML(post.conteudo)}</p>
    </div>`;
}

function escaparHTML(texto) {
  const div = document.createElement('div');
  div.textContent = texto;
  return div.innerHTML;
}