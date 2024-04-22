import React, { useEffect, useState } from 'react'
import { Card ,ListGroup,Button, Container,Col,Row } from 'react-bootstrap'
import { Link,  } from 'react-router-dom'
import instance from '../axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function JobDetaild() {

 const [jobs,setJobs]=useState([])
//const {id} = useParams();

const getJobDetails = async  ()=>{

  try {

    const res =  await instance("/api/v1/getjob",{
      withCredentials:true
    })

    setJobs(res.data.jobs) 

  } catch (error) {
    
    toast.error(error.response.data.message)

  }
}
useEffect(()=> {

},[ getJobDetails])

  getJobDetails()
  return (
   <Container>
    <ToastContainer position="top-center"/>
      
          <Row>
          {jobs && jobs.map((job)=>(
          <Col md={10}>
         
              <Card >
               <ListGroup.Item>Posting date:{job.companyname} </ListGroup.Item>  
             <Card.Img variant="top" src=""/>
             <Card.Body>
               <Card.Title><h2> </h2></Card.Title>
               <Card.Text> 
   
               </Card.Text>
               </Card.Body>
             <ListGroup className="list-group-flush">
             <ListGroup.Item>:{job.title}  </ListGroup.Item>
             <ListGroup.Item>Description:{job.description}  </ListGroup.Item>
             <ListGroup.Item>Company_name:{job.companyname}  </ListGroup.Item>
             <ListGroup.Item>Experience :{job.experiance}  </ListGroup.Item>
             <ListGroup.Item>Qualifications :{job.qualification} </ListGroup.Item>
             <ListGroup.Item>Salary :{job.salary}  </ListGroup.Item>
             <ListGroup.Item>Location :{job.location}  </ListGroup.Item>
             {/* <ListGroup.Item>Shift and schedule :{job.title}  </ListGroup.Item> */}
             </ListGroup>
             <Card.Body>
             <Button Link as ={ Link} to = "/ContactInfo" variant="primary">Upply</Button>
             </Card.Body>
           </Card>
         
        
       
          </Col>
          ))}
          
         
        </Row>
      
         
      
   </Container>
  )
}

export default JobDetaild