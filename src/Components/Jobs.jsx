
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Jobs({abc}) {





  return (
    <Card >
       <Card.Body>
       
        <Card.Title style={{fontWeight:"900"}}>{abc.jobTitle}</Card.Title>
        <Card.Text>
         Location : {abc.jobLocation}
        </Card.Text>
        <Button as={Link} to={`/detail/${abc.id}`} variant="primary">Upply</Button>
      </Card.Body>
    </Card>
  );
}

export default Jobs ;