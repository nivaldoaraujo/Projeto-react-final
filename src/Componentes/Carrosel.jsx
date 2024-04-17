import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Carrosel() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://4infra.com.br/wp-content/uploads/2023/12/O-que-e-um-hardware.jpg"
          alt="First slide" style={{width: "500px", height: "550px"}}
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://s.zst.com.br/cms-assets/2021/04/o-que-e-hardware-ram-1-.jpg"
          alt="Second slide" style={{width: "500px", height: "550px"}}
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://victorvision.com.br/wp-content/uploads/2023/05/tipos-de-hardware.jpg"
          alt="Third slide" style={{width: "500px", height: "550px"}}
        />
        <Carousel.Caption>
          <h5>Vendas de nossos produtos on-line e local</h5>
          <p>
           Produtos de excelência e qualidade no mundo do hardware!!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrosel;