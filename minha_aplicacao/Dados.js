function carregarPosts() {
  const dados = localStorage.getItem('nebula_posts');
  return dados ? JSON.parse(dados) : [];
}

function salvarPosts(posts) {
  localStorage.setItem('nebula_posts', JSON.stringify(posts));
}

function adicionarPost(autor, conteudo) {
  const posts = carregarPosts();
  const novoPost = {
    id: Date.now(),
    autor: autor.trim(),
    conteudo: conteudo.trim(),
    data: new Date().toLocaleString('pt-BR'),
  };
  posts.unshift(novoPost);
  salvarPosts(posts);
  return novoPost;
}

function removerPost(id) {
  let posts = carregarPosts();
  posts = posts.filter(p => p.id !== id);
  salvarPosts(posts);
}

function editarPost(id, novoAutor, novoConteudo) {
  const posts = carregarPosts();
  const post = posts.find(p => p.id === id);
  if (post) {
    post.autor = novoAutor.trim();
    post.conteudo = novoConteudo.trim();
    salvarPosts(posts);
  }
}