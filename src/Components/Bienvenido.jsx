import '../styles/Bienvenido.css'

const Bienvenido = () => {
    return ( 
        <div className="hero d-flex" id="hero">
            <div className="container g-layout g-layout--center g-md md:g-layout--1fr-1fr">
                <div className="core bg-transparent">
                    <div className="card__body">
                        <h1 className="card__title"> Bienvenido a la <span className="c-primary">CERVECERIA PARIENTE</span></h1>
                        <h2 className="card__subtitle">¡DONDE DISFRUTARAS LA VERDADERA EXPERIENCIA DE LA CERVEZA ARTESANAL!</h2>
                        <p className="card__text md:d-block">
                            Desde aqui podras:
                        </p>
                        <p className="card__text md:d-block">
                          Comprar nuestros productos, visitar nuestras redes sociales y ponerte en contacto con nosotros.
                      </p>

                    </div>
                </div>
        </div>
        </div>
    );
}
 
export default Bienvenido;