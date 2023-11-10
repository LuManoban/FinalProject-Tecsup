import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/Carrousel.css'

const Carrousel = () => {
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="./IMG/slider 1.jpg" className="d-block w-100 " alt="First slide"/>
        </div>
        <div className="carousel-item">
          <img src="./IMG/394036269_284124401190707_6365585818010166725_n.jpeg" className="d-block w-100" alt="Second slide"/>
        </div>
        <div className="carousel-item">
          <img src="./IMG/slider 3.png" className="d-block w-100" alt="Third slide"/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
);
}


export default Carrousel;
