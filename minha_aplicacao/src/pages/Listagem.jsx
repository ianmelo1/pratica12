function Listagem() {
  return (
    <main className="container">
      <h1>Usuários e dados cadastrados</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>João Silva</td>
            <td>joao@email.com</td>
            <td>
              <button className="btn-editar">Editar</button>
              <button className="btn-excluir">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
export default Listagem;