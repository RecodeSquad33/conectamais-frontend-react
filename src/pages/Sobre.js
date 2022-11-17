function Sobre() {
    return(
        <main>
        <aside className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-sm-12 text-center bg-dark bg-opacity-75 "
                    style={{marginTop: "8%", marginBottom: "10%", width: "60%", borderRadius: "5px", paddingTop: "10px",}}>
                    <h1 className="display-5 mb-4" id="sobre">Quem Somos?</h1>
                    <span className="elementor-divider mx-3 w-50 mt-0 "></span>
                    <p className="text-light">Nossa missão é: contribuir com o incentivo a leitura;</p>
                    <p className="text-light">Levar o acesso a leitura para quem precisa, possibilitando um horizonte de mudanças no futuro;</p>
                    <p className="text-light">Uma plataforma que impacte continuamente na melhora da proficiência em leitura na vida das pessoas;</p>
                    <p className="text-light">Nossos valores são: respeito, trabalho em equipe, empatia, inclusão e democratização do conhecimento.</p>
                </div>
            </div>
        </aside>
    </main>
    );
}

export default Sobre;