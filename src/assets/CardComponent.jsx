import { Card } from 'react-bootstrap';

const CardComponent = ({ imageUrl, title, content }) => {
  return (
    <Card className="mb-4 h-100"> {/* Added height to cover the entire page */}
      <Card.Img variant="top" src={imageUrl} alt={title} />
      <Card.Body className="d-flex flex-column align-items-center"> {/* Center content */}
        <Card.Title className="text-center">{title}</Card.Title> {/* Center title */}
        <Card.Text className="text-center">{content}</Card.Text> {/* Center content */}
        <button className="btn-darkgreen">Learn More</button>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
