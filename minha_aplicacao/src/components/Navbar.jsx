import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Nebula</div>
      <ul className="nav-links">
        <li><Link to="/">Feed</Link></li>
        <li><Link to="/cadastro">Novo Post</Link></li>
        <li><Link to="/listagem">Lista de Dados</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;