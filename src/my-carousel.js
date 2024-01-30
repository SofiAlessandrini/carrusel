import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100 h-50%" src="https://www.lima2019.pe/sites/default/files/2019-10/01_0.jpg" text="First slide" />
        <Carousel.Caption className='d-none d-md-block'>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 h-50%" src="https://www.fogaus.com/wp-content/uploads/2016/10/SLIDE-ADOPTADOS-3.jpg" text="Second slide" />
        <Carousel.Caption className='d-none d-md-block'>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 h-50%" src="https://minuevomejoramigo.com/wp-content/uploads/2021/02/comportamiento-perro-adoptado.jpg" text="Third slide" />
        <Carousel.Caption className='d-none d-md-block'>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;