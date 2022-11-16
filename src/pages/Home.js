import Mulher_Ensinando from '../imagens/Mulher_Ensinando.jpg'
import Interação from '../imagens/Interação.jpg'
import Discussão from '../imagens/Discussão.jpg'

function Home() {
    return(
    <main>
		<div className="row align-content-center m-0 mt-5">
			<div className="col-lg-6 col-sm-12 bg-dark bg-opacity-50 h-100"
				style={{marginTop: "110px", textAlign: "left"}}>
				<h1 className="display-5 mb-4" id="caixa_esquerda">A melhor conexão
					entre voluntários e instituições de ensino.</h1>
			</div>
			
			<div className="col-lg-6 col-sm-12 p-0 align-items-center"
				style={{marginTop: "22px",}}>
				<div id="carouselExampleCaptions" className="carousel slide"
					data-bs-ride="false">
					<div className="carousel-indicators">
						<button type="button" data-bs-target="#carouselExampleCaptions"
							data-bs-slide-to="0" className="active" aria-current="true"
							aria-label="Slide 1"></button>
						<button type="button" data-bs-target="#carouselExampleCaptions"
							data-bs-slide-to="1" aria-label="Slide 2"></button>
						<button type="button" data-bs-target="#carouselExampleCaptions"
							data-bs-slide-to="2" aria-label="Slide 3"></button>
					</div>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img src={Mulher_Ensinando} className="d-block w-100"
								alt="Mulher_Ensinando"></img>
							<div className="carousel-caption d-none d-md-block">
								<h4>Voluntários</h4>
								<p>Seja voluntário e promova encontros literários na sua
									região.</p>
							</div>
						</div>
						<div className="carousel-item">
							<img src={Interação} className="d-block w-100"
								alt="Interação"></img>
							<div className="carousel-caption d-none d-md-block">
								<h4>Doação ou troca de livros</h4>
								<p>Doe, troque livros ou ideias:</p>
							</div>
						</div>
						<div className="carousel-item">
							<img src={Discussão} className="d-block w-100"
								alt="Discussão"></img>
							<div className="carousel-caption d-none d-md-block">
								<h4>Encontros literários</h4>
								<p>Expanda sua mente!</p>
							</div>
						</div>
					</div>
					<button className="carousel-control-prev" type="button"
						data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button className="carousel-control-next" type="button"
						data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
			</div>
		</div>
	</main>);
}

export default Home;