import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <Routes>
        
      </Routes>
      </div>
      <Footer></Footer>
    </Router >
  );
}

export default App;
