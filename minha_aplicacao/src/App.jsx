import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Listagem from './pages/Listagem';
import { NebulaProvider } from './context/NebulaContext';

function App() {
  return (
    <NebulaProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/listagem" element={<Listagem />} />
        </Routes>
      </Router>
    </NebulaProvider>
  );
}

export default App;
