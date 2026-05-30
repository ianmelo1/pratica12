import { useState } from 'react';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [post, setPost] = useState('');
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    setErro('');
    setSucesso('');

    if (nome.trim().length < 3) {
      setErro('O nome precisa ter pelo menos 3 caracteres.');
      return;
    }

    if (post.trim().length < 10) {
      setErro('O seu post está muito curto! Escreva pelo menos 10 caracteres.');
      return;
    }

    setSucesso('Post validado com sucesso! (Pronto para enviar para o Feed)');
    setNome('');
    setPost('');
  };

  return (
    <main className="container">
      <h1>Criar Novo Post</h1>
      
      {erro && <p style={{ color: '#ff6b6b', fontWeight: 'bold', marginBottom: '15px' }}>⚠️ {erro}</p>}
      {sucesso && <p style={{ color: '#2ecc71', fontWeight: 'bold', marginBottom: '15px' }}>✨ {sucesso}</p>}

      <form className="form-cadastro" onSubmit={handleSubmit}>
        <label htmlFor="nome">Seu nome:</label>
        <input 
          type="text" 
          id="nome" 
          name="nome" 
          placeholder="Digite seu nome..." 
          value={nome}
          onChange={(e) => setNome(e.target.value)} 
          required 
        />

        <label htmlFor="post">O que está pensando?</label>
        <textarea 
          id="post" 
          name="post" 
          rows="4" 
          placeholder="Escreva aqui seu post..."
          value={post}
          onChange={(e) => setPost(e.target.value)} 
          required
        ></textarea>

        <button type="submit">Publicar no feed</button>
      </form>
    </main>
  );
}

export default Cadastro;