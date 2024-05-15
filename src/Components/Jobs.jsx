import { ListGroup ,Button} from 'react-bootstrap'
//import {Button,} from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Jobs({abc}) {

  return (
   <Card  md={9}>
     <Card style={{ width: '30rem'}}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title style={{fontWeight:"bold"}}><h3>{abc.title}</h3></Card.Title>

        
        <ListGroup variant="flush">
        <div>
          <div>
          <ListGroup.Item style={{fontWeight:"bold"}}>{abc.description}</ListGroup.Item> 
          </div>
        </div>
                                                           
        <ListGroup.Item style={{fontWeight:"bold"}}><h3> {abc.company_name}</h3></ListGroup.Item>

        <ListGroup.Item style={{fontWeight:"bold"}}>Experiance : {abc.experience}</ListGroup.Item>
        <ListGroup.Item style={{fontWeight:"bold"}}>Qualificatiob : {abc.qualification}</ListGroup.Item>
        <ListGroup.Item style={{fontWeight:"bold"}}>Salary: {abc.salary}</ListGroup.Item>
        <ListGroup.Item style={{fontWeight:"bold"}}>Location: {abc.location}</ListGroup.Item>
      </ListGroup>
        <Button Link as ={ Link} to = "/ContactInfo" variant="primary">UPPLY</Button>
      </Card.Body>
    </Card>
   </Card>
  );
}

export default Jobs ;