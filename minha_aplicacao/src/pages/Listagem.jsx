import { useState, useEffect } from 'react';
import { useNebula } from '../context/NebulaContext';

function Listagem() {
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
      .catch((err) => console.error('Erro ao buscar posts da API:', err))
      .finally(() => setLoading(false));
  }, []);

  const todosOsPosts = [...posts, ...apiPosts];

  return (
    <main className="container">
      <h1>Feed de Posts</h1>

      {loading ? (
        <p>Carregando posts...</p>
      ) : todosOsPosts.length === 0 ? (
        <p>Nenhum post cadastrado ainda.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Post</th>
            </tr>
          </thead>
          <tbody>
            {todosOsPosts.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.post}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}

export default Listagem;
