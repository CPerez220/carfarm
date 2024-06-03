import { Container, Row, Col } from 'react-bootstrap';
import CardComponent from './CardComponent';
import App from "../images/car-app.png"
import Find from "../images/find.png"

const More = () => {
  const cardsData = [
    {
      imageUrl: App,
      title: 'DOWNLOAD THE CARFARM APP',
      content: 'Enhance your convenience by using our app to simplify the process of buying, selling, and renting',
    },
    {
      imageUrl: Find,
      title: 'FIND A CARFARM DEALER',
      content: 'Connect with our experts in person by locating the nearest dealership',
    },
  ];

  return (
    <>
    <div className='cards'>
    <h1 className='title'>MORE HELP</h1>
    <Container fluid className="my-4">
      <Row className="justify-content-center">
        {cardsData.map((card, index) => (
          <Col key={index} xs={12} md={6} lg={4} className="mb-4">
            <CardComponent {...card} />
          </Col>
        ))}
      </Row>
    </Container>
    </div>
    </>
  )
}

export default More