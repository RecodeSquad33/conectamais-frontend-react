import { Link } from 'react-router-dom';
import Logo from '../imagens/Logo.png'


function Navbar() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary m-0"
                id="navbar">
                <div className="container-fluid">
                    <img className="img-fluid" src={Logo} alt="Logo"></img>
                    <button className="navbar-toggler" type="button"
                        data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end me-3"
                        id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item px-1">
                            <Link to="/" id="active" className="nav-link active" aria-current="page">
                            <i className="icon fa fa-home mx-1" aria-hidden="true" style={{fontSize: "1.3rem",}}></i><strong>Home</strong></Link>
                            </li>


                            <li className="nav-item px-1">
                            <Link to="/login" className="nav-link px-1">
                            <i className="fa fa-user-circle-o mx-1" aria-hidden="true" style={{fontSize: "1.3rem",}}></i>Login</Link>
                            </li>

                            <li className="nav-item px-1">
                            <Link to="/" className="nav-link px-1">
                            <i className="fa fa-user-plus mx-1" aria-hidden="true" style={{fontSize: "1.3rem",}}></i>Cadastro</Link>
                            </li>

                            <li className="nav-item px-1">
                            <Link to="/" className="nav-link px-1">
                            <i className="fa fa-calendar-check-o mx-1" aria-hidden="true" style={{fontSize: "1.3rem",}}></i>Eventos</Link>
                            </li>

                            <li className="nav-item px-1">
                            <Link to="/" className="nav-link px-1">
                            <i className="fa fa-phone-square mx-1" aria-hidden="true" style={{fontSize: "1.3rem",}}></i>Contato</Link>
                            </li>

                            <li className="nav-item px-1">
                            <Link to="/" className="nav-link px-1">
                            <i className="fa fa-book mx-1" aria-hidden="true" style={{fontSize: "1.3rem",}}></i>Sobre</Link>
                            </li>

                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;