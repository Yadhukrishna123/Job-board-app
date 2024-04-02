

import {Button,Card, Container,Col,Row } from "react-bootstrap"
import Jobs from './Jobs';
import { useEffect, useState } from 'react';
  



  function Home() {

    const [jobs,setJobs]=useState([])

    useEffect(()=>{ 
      fetch("./jobs.json")
      .then((res)=> res.json())
      .then((data)=>setJobs(data))


    },[])
  
   

  return (
  <>
    <Container fluid>
    <div>
      <div fluid>
        <img src="https://jooinn.com/images/job-interview.jpg" alt="" style={{width:"100%", height:"450px"}} />
      </div>
    </div>
    </Container>
      
    <Container fluid >
      <Row>


      {jobs && (
         jobs.map((jobs ,index)=>(
          <Col className='py-3' md={3} key={index} >
           <Jobs abc={jobs} />
          </Col>
         ))
      )}

         
       
        <Col className='py-3' md={3} >
        <Card >
       <Card.Body>
        <Card.Title style={{fontWeight:"900"}}>Frontend Doveloper</Card.Title>
        <Card.Text>
         Loccation : Banglore
        </Card.Text>
        <Button variant="primary">Upply</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col className='py-3' md={3} >
        <Card >
       <Card.Body>
        <Card.Title style={{fontWeight:"900"}}>Frontend Doveloper</Card.Title>
        <Card.Text>
         Loccation : Banglore
        </Card.Text>
        <Button variant="primary">Upply</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col className='py-3' md={3} >
        <Card >
       <Card.Body>
        <Card.Title style={{fontWeight:"900"}}>Frontend Doveloper</Card.Title>
        <Card.Text>
         Loccation : Bangloree
        </Card.Text>
        <Button variant="primary">Upply</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col className='py-3' md={3} >
        <Card >
       <Card.Body>
        <Card.Title style={{fontWeight:"900"}}>Frontend Doveloper</Card.Title>
        <Card.Text>
         Loccation : Banglore
        </Card.Text>
        <Button variant="primary">Upply</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col className='py-3' md={3} >
        <Card >
       <Card.Body>
        <Card.Title style={{fontWeight:"900"}}>Frontend Doveloper</Card.Title>
        <Card.Text>
         Loccation : Banglore
        </Card.Text>
        <Button variant="primary">Upply</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col className='py-3' md={3} >
        <Card >
       <Card.Body>
        <Card.Title style={{fontWeight:"900"}}>Frontend Doveloper</Card.Title>
        <Card.Text>
         Loccation : Banglore
        </Card.Text>
        <Button variant="primary">Upply</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col className='py-3' md={3} >
        <Card >
       <Card.Body>
        <Card.Title style={{fontWeight:"900"}}>Frontend Doveloper</Card.Title>
        <Card.Text>
         Loccation : Banglore
        </Card.Text>
        <Button variant="primary">Upply</Button>
      </Card.Body>
    </Card>
        </Col>
        </Row>
    </Container>

    </>

  )
}




export default Home;