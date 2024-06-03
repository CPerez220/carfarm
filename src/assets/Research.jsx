import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import TAF from "../images/toyota-and-ford.png";
import MM from "../images/amg-mechanic.png";
import CVM from "../images/c-vs-m.png";

const Research = () => {
  return (
    <div className='research'>
      <div className='left'>
        <h1 className='title'>RESEARCH CREATED FOR YOU</h1>
        <h2 className='subtitle'>At Carfarm, our team of seasoned professionals crafts accurate and insightful articles to provide unparalleled value. Explore our regularly updated content, from comprehensive car reviews to customer surveys. Dive in and stay informed!</h2>
      </div>
      <div className='right'>
        <div className='cardsResearch'>
          <Card className='researchCard'>
            <Card.Img variant="top" src={TAF} alt="Toyota and Ford cars" />
            <Card.Body>
              <Card.Title>Top Most Reliable Cars</Card.Title>
              <Card.Text>
                From Toyota to Ford, these are the most reliable cars according to Carfarm report.
              </Card.Text>
              <Button variant="darkgreen">Read More</Button>
            </Card.Body>
          </Card>
          <Card className='researchCard'>
            <Card.Img variant="top" src={MM} alt="Carfarm mechanic checking cars" />
            <Card.Body>
              <Card.Title>How Carfarm Evaluates Their Cars</Card.Title>
              <Card.Text>
                Learn how Carfarm mechanics check their cars to guarantee the best experience for their clients.
              </Card.Text>
              <Button variant="darkgreen">Read More</Button>
            </Card.Body>
          </Card>
          <Card className='researchCard'>
            <Card.Img variant="top" src={CVM} alt="Comparison between Mustang and Camaro" />
            <Card.Body>
              <Card.Title>Which Is Better: Mustang Vs Camaro</Card.Title>
              <Card.Text>
                The two American icons put to their limits to show who is the best.
              </Card.Text>
              <Button variant="darkgreen">Read More</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Research;