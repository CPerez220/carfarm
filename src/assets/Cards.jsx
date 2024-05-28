import { Container, Row, Col } from 'react-bootstrap';
import CardComponent from './CardComponent';
import Card1 from "../images/car-family.png"

const Cards = () => {
  const cardsData = [
    {
      imageUrl: Card1,
      title: 'Finance with Carfarm',
      content: 'Pre-qualify with no impact to your credit',
    },
    {
      imageUrl: Card1,
      title: 'Sell or trade your car',
      content: 'Get a estimated offer by Carfarm AI',
    },
    {
      imageUrl: Card1,
      title: 'Rent or be a renter',
      content: 'Enjoy your car',
    },
  ];

  return (
    <>
    <Container fluid className="my-4">
      <Row className="justify-content-center">
        {cardsData.map((card, index) => (
          <Col key={index} xs={12} md={6} lg={4} className="mb-4">
            <CardComponent {...card} />
          </Col>
        ))}
      </Row>
    </Container>
    </>
  )
}

export default Cards