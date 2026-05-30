function Cadastro() {
  return (
    <main className="container">
      <h1>Criar Novo post</h1>
      <form className="form-cadastro">
        <label htmlFor="nome">Seu nome:</label>
        <input type="text" id="nome" name="nome" placeholder="Digite seu nome..." required />

        <label htmlFor="post">O que está pensando?</label>
        <textarea id="post" name="post" rows="4" placeholder="Escreva aqui seu post..."></textarea>

        <button type="submit">Publicar no feed</button>
      </form>
    </main>
  );
}
export default Cadastro;