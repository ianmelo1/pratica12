import { useNebula } from '../context/NebulaContext';

function Listagem() {
  const { posts } = useNebula();

  return (
    <main className="container">
      <h1>Feed de Posts</h1>

      {posts.length === 0 ? (
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
            {posts.map((item) => (
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
