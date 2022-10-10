import Carousel from 'react-bootstrap/Carousel';
import './carrucel.css';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../imagenes/logo/glamoure.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='texto'>Vendemos experiencia y calidad</h3>
          <p className='p'>Somos amantes del vestir Bien</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../imagenes/mujer/camizon-de-seda.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
           < h3 className='texto'>Vendemos experiencia y calidad</h3>
          <p className='p'>Somos amantes del vestir Bien</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../imagenes/mujer/bombacha-clasic-beige.jpeg"
          alt="logo"
        />

        <Carousel.Caption>
        <h3 className='texto'>Vendemos experiencia y calidad</h3>
          <p className='p'>Somos amantes del vestir Bien</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;