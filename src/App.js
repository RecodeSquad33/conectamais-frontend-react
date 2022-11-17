import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Contato from "./pages/Contato";
import Cadastro from "./pages/Cadastro";
import Sobre from "./pages/Sobre";
import Voluntario from "./pages/CadastroVoluntario"
import Instituicao from "./pages/CadastroInstituicao";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
      <Routes>
        <Route exact path='/' element={<Home/>} />
      </Routes>
      <Routes>
      <Route path='/login' element={<Login/>} />
      </Routes>
      <Routes>
      <Route path='/contato' element={<Contato/>} />
      </Routes>
      <Routes>
      <Route path='/sobre' element={<Sobre/>} />
      </Routes>
      <Routes>
      <Route path='/cadastro' element={<Cadastro/>} />
      </Routes>
      <Routes>
      <Route path='/voluntario' element={<Voluntario/>} />
      </Routes>
      <Routes>
      <Route path='/instituicao' element={<Instituicao/>} />
      </Routes>
      </div>
      <Footer></Footer>
    </Router >
  );
}

export default App;
