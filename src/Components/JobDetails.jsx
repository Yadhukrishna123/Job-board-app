import React, {useEffect, useState} from 'react'
import { Container,Row,Col,Button,Card,ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import instance from '../axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function JobDetails() {
  const [jobs,setJobs]=useState([])

  const getJobDetails = async  ()=>{

    try {
  
      const res =  await instance("/api/v1/getjob",{
        withCredentials:true
      })
  
      setJobs(res.data.users) 
  
    } catch (error) {
      
      toast.error(error.response.data.message)
  
    }
  }
  useEffect(()=> {
    getJobDetails()
  },[ getJobDetails])

  return (
    <Container>
        <Row>
            <Col>
            
            <Card >
         
        
         <Card.Body>
           <Card.Title><h2>sssss</h2></Card.Title>
           <Card.Text>
            Description
           </Card.Text>
         </Card.Body>
         <ListGroup className="list-group-flush">
         <ListGroup.Item>Company name: </ListGroup.Item>
         <ListGroup.Item>Experience : </ListGroup.Item>
         <ListGroup.Item>Qualifications : </ListGroup.Item>
        <ListGroup.Item>Salary type : </ListGroup.Item>
           <ListGroup.Item>Location : </ListGroup.Item>
           <ListGroup.Item>Shift and schedule :  </ListGroup.Item>
         </ListGroup>
         <Card.Body>
         <Button Link as ={ Link} to = "/ContactInfo" variant="primary">Upply</Button>
         </Card.Body>
       </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default JobDetails