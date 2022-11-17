function Contato(){
    return(
    
    <main>
       
        <aside className="esquerdo-contato">
            <div className="justify-content-center">
                <h1 className="display-5"><strong>Junte-se a nós</strong></h1>
                <p className="mt-3 text-center" style={{color: "#ff9b19", fontSize: "13px"}}><strong>Entre em contato e saiba mais!
                </strong></p>
            </div>
            <div><img src="Images/Imagem área de cadastro.png" alt=""></img></div>

            <div className="element-icon mt-0 mb-lg-4">
                <a href="#" rel="stylesheet" type="text/css" target="_blank"><i className="fa fa-instagram"></i></a>
                <a href="#" rel="stylesheet" type="text/css" target="_blank"><i className="fa fa-facebook"></i></a>
                <a href="#" rel="stylesheet" type="text/css" target="_blank"><i className="fa fa-linkedin"></i></a>
                <a href="#" rel="stylesheet" type="text/css" target="_blank"><i className="fa fa-youtube"></i></a>
                <a href="#" rel="stylesheet" type="text/css" target="_blank"><i className="fa fa-whatsapp"></i></a>
            </div>
        </aside>
        
        <aside className="direito-form">
            <form className="fale-conosco" id="faleconosco">
                <div className="text-title">
                    <h1 className="display-4"><strong>Fale conosco</strong></h1>
                    <span className="elementor-divider">
                    </span>
                </div>
                <div className="input span13">
                    <label htmlFor="nome">Nome*</label>
                    <input type="text" id="nomecontato" placeholder="Nome completo" required="required"
                        aria-required="true" style={{fontSize: "12px",}}></input>
                </div>
                <div className="input span13">
                    <label htmlFor="email">Email*</label>
                    <input type="email" name="emailcontato" id="emailcontato" placeholder="Email" required="required"
                        aria-required="true" style={{fontSize: "12px",}}></input>
                </div>
                <div className="input span13">
                    <label htmlFor="mensagemcontato">Mensagem*</label>
                    <textarea name="" id="mensagemcontato" placeholder="Digite aqui" required="required"
                        aria-required="true" style={{fontSize: "12px",}}></textarea>
                    <div className="input span13">
                        <button className="btn btn-primary" type="button" value="Input" style="font-size: 1.6rem;">Enviar
                            <i className="icon fa fa-envelope" aria-hidden="true" style={{fontSize: "2rem",}}></i></button>
                    </div>
                </div>
                
            </form>
            </aside>
            </main>);
}

export default Contato;