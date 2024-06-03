import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import HC from "../images/customer-happy.png"
import PC from "../images/person-calculate.png"
import AI from "../images/AI.png"

const Tools = () => {
  return (
    <div className='research'>
      <div className='left'>
        <h1 className='title'>TOOLS READY TO ASSIST YOU</h1>
        <h2 className='subtitle'>At Carfarm, we leverage cutting-edge tools to enhance efficiency, accuracy, and reliability. Our suite of resources, from our exceptional staff to advanced technology, has consistently supported our clients in achieving their goals. We invite you to experience their effectiveness firsthand.</h2>
      </div>
      <div className='right'>
        <div className='cardsResearch'>
          <Card className='researchCard'>
            <Card.Img variant="top" src={HC} alt="A Happy Customer" />
            <Card.Body>
              <Card.Text>
              With the invaluable assistance of our exceptional financial advisors, Pedro secured the optimal plan tailored to his needs, enabling him to acquire the car he had always dreamed of
              </Card.Text>
              <Button variant="darkgreen">CONTACT US</Button>
            </Card.Body>
          </Card>
          <Card className='researchCard'>
            <Card.Img variant="top" src={PC} alt="A Person Using Carfarm" />
            <Card.Body>
              <Card.Text>
              Use our Carfarm virtual assistant to find your ideal car, assess your current vehicle’s value, and explore exclusive offers. It streamlines the process for a seamless experience. Try it obligation-free!
              </Card.Text>
              <Button variant="darkgreen">GET HELP</Button>
            </Card.Body>
          </Card>
          <Card className='researchCard'>
            <Card.Img variant="top" src={AI} alt="A Powerful AI" />
            <Card.Body>
              <Card.Text>
              As a subsidiary of Square, it’s no surprise that our technology, including Carfarm AI, stands at the forefront of our sector. Carfarm AI has undergone rigorous training to become the most advanced and useful AI in the industry. Don’t hesitate to try it out for yourself
              </Card.Text>
              <Button variant="darkgreen">CARFARM AI</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Tools;