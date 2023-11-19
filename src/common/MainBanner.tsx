import banner1 from '../assets/Image/Banner1.jpg';
import banner2 from '../assets/Image/Banner2.jpg';
import banner3 from '../assets/Image/Banner3.jpg'; // Cambiado a .jpg
import banner4 from '../assets/Image/Banner4.jpg'; // Asegúrate de que esta imagen existe en tu carpeta de assets
import banner5 from '../assets/Image/Banner5.jpg'; // Asegúrate de que esta imagen existe en tu carpeta de assets
import "./MainBanner.css";

function MainBanner() {
    return (
        <div id="carouselExampleCaptions" className="carousel slide main-banner" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={banner1} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h1>THE NEW A2:</h1>
                        <p>Comunidad de jugadores y desarrolladores</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={banner2} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h1>EcoMend:</h1>
                        <p>Videojuego con un mensaje ambiental</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={banner3} className="d-block w-100" alt="Banner 3"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h1>Emparejados:</h1>
                        <p>El objetivo es emparejar las cartas iguales</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={banner4} className="d-block w-100" alt="Banner 4"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h1>Trivia:</h1>
                        <p>Que tanto sabes sobre videojuegos</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={banner5} className="d-block w-100" alt="Banner 5"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h1>Piedra, Papel o Tijera</h1>
                        <p>El clasico juego pero ahora en virtual</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default MainBanner;
