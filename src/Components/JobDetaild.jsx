import React, { useEffect, useState } from 'react'
import { Card ,ListGroup,Button, Container,Col,Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'


function JobDetaild() {

const [jobs,setJobs]=useState([])
const {id} = useParams();

useEffect(()=>{
  fetch("/jobs.json")
  .then((res)=> res.json())
  .then((data)=>setJobs(data))

},[])

const work = jobs.find((JOB)=>JOB.id == id)

  return (
   <Container>
      {work && (
         <Row>
         <Col md={10}>
         
         <Card >
         <ListGroup.Item>Posting date:{work.postingDate} </ListGroup.Item>
         <Card.Img variant="top" src={work.companyLogo} />
         <Card.Body>
           <Card.Title><h2> {work.jobTitle}</h2></Card.Title>
           <Card.Text>
            {work.description}
           </Card.Text>
         </Card.Body>
         <ListGroup className="list-group-flush">
         <ListGroup.Item>Company name:{work.companyName} </ListGroup.Item>
         <ListGroup.Item>Experience : {work.experienceLevel}</ListGroup.Item>
         <ListGroup.Item>Qualifications : {work.Qualifications} </ListGroup.Item>
        <ListGroup.Item>Salary type : {work.salaryType}  </ListGroup.Item>
           <ListGroup.Item>Location : {work.jobLocation}  </ListGroup.Item>
           <ListGroup.Item>Shift and schedule : {work.employmentType} </ListGroup.Item>
         </ListGroup>
         <Card.Body>
         <Button Link as ={ Link} to = "/ContactInfo" variant="primary">Upply</Button>
         </Card.Body>
       </Card>
         </Col>
         
        
       </Row>
      )}
   </Container>
  )
}

export default JobDetaild