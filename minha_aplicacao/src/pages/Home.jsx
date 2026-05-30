import { useState, useEffect } from 'react';
import { useNebula } from '../context/NebulaContext';

function Home() {
  const { posts } = useNebula();
  const [apiPosts, setApiPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then((res) => res.json())
      .then((data) => {
        const formatados = data.map((item) => ({
          id: `api-${item.id}`,
          nome: `Usuário ${item.userId}`,
          post: item.title,
        }));
        setApiPosts(formatados);
      })
      .catch((err) => console.error('Erro ao buscar posts:', err))
      .finally(() => setLoading(false));
  }, []);

  const todosOsPosts = [...posts, ...apiPosts];

  return (
    <main className="container">
      <h1>Feed de Notícias</h1>

      {loading ? (
        <p className="loading">Carregando posts...</p>
      ) : todosOsPosts.length === 0 ? (
        <p>Nenhum post ainda. Seja o primeiro a publicar!</p>
      ) : (
        <div id="feed-lista">
          {todosOsPosts.map((item) => (
            <div key={item.id} style={{ borderBottom: '1px solid #eee', padding: '12px 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <strong>{item.nome}</strong>
                <span style={{
                  fontSize: '0.7rem',
                  padding: '2px 8px',
                  borderRadius: '99px',
                  background: String(item.id).startsWith('api-') ? '#74B9FF' : '#55E6C1',
                  color: 'white',
                  fontWeight: 'bold'
                }}>
                  {String(item.id).startsWith('api-') ? 'API' : 'Novo'}
                </span>
              </div>
              <p>{item.post}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default Home;
