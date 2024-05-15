import { Container,Col,Row } from "react-bootstrap"
import Jobs from './Jobs';
import { useEffect, useState } from 'react';
import instance from "../axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
//import JobDetails from "./JobDetails";




  



  function Home() {

    const [jobs,setJobs]=useState([])
    const dispatch = useDispatch()

     useEffect(()=>{ 
    //   fetch("./jobs.json")
    //   .then((res)=> res.json())
    //   .then((data)=>setJobs(data))

      const getJobsList = async () =>{
        
        try {
          const res = await instance("/api/v1/getjob")
          if(!res.data.success){
            toast.error(res.data.message)
          }
          dispatch(setJobs(res.data.jobs))
        } catch (error) {
          console.log(error.message);
        }
      }
      getJobsList()
    },[dispatch])
  
   

  return (
  <>
    <Container fluid>
       <ToastContainer position="top-center"/>
    <div>
      <div fluid>
        <img src="https://jooinn.com/images/job-interview.jpg" alt="" style={{width:"100%", height:"450px"}} />
      </div>
    </div>
    </Container>
      
    <Container fluid >
      <Row>
z

      {jobs && (
         jobs.map((jobs ,index)=>(
          <Col className='py-4' md={4} key={index} >
           <Jobs abc={jobs} />
          </Col>
         ))
      )}

         
       
        {/* <Col className='py-3' md={3} >
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
        </Col> */}
        </Row>
    </Container>

    </>

  )
}




export default Home;