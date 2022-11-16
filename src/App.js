import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./pages/Login";

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
      </div>
      <Footer></Footer>
    </Router >
  );
}

export default App;
