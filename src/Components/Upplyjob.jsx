import React, { useState } from 'react'
import { Col, Container, Row,Form ,Button,} from 'react-bootstrap'
import { ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import instance from '../axios';
import { useNavigate } from 'react-router-dom';






function Upplyjob() {
  const[validated,setValidate]=useState(false);
  const navigate = useNavigate();
  
  const[jobs,setJobs]= useState({
    email:"",
    Mobilenumber:"",
    address:"",
    education:"",
    resume:"",


  })
  console.log(jobs);


  const handleSubmit =async (event) => {
      event.preventDefault();
    const form = event.currentTarget;
     if (form.checkValidity() === false) {
        event.stopPropagation()
     }else{
      const formData = new FormData();
      formData.append("email",jobs.email)
      formData.append("mobileNumber",jobs.Mobilenumber)
      formData.append("address",jobs.address)
      formData.append("education",jobs.education)
      formData.append("resume",jobs.resume)
      try {
        const res =await instance.post(`/api/v1/upply`, formData,{
          headers:{
            "Content-Type":"multipart/form-data",
          },
          withCredentials:true 
         }) 
         console.log(res);

         if(!res.data.success){
          toast.error(res.data.message)
         }

         toast.success(res.data.message);

         await new Promise((resolve) => setTimeout(resolve, 2000));
         navigate("/")

      } catch (error) {
        toast.error(error.response.data.message)
      }  
    };
    setValidate(true); 
  
  }
  
 
  return (
    <Container>
        <ToastContainer position="top-center" autoClose={5000} />
    <Row>
        <Col>
            <h2>Upply job</h2>

        </Col>
    </Row>
    <Row>
        <Col>
        <Form  noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formGroupn">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setJobs({...jobs,email:e.target.value})} required />
         <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
         <Form.Control.Feedback type='invalid'>please entre your email!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupaddress">
        <Form.Label>Mobile number</Form.Label>
        <Form.Control type="number" placeholder="Enter mobile number" onChange={(e)=>setJobs({...jobs,Mobilenumber:e.target.value})} required/>
        <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type='invalid'>please entre your mobile number!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter Address  " onChange={(e)=>setJobs({...jobs, address:e.target.value})} required />
        <Form.Control.Feedback  type='valid'>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type='invalid'>please entre your address!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Education Qualification</Form.Label>
        <Form.Control type="text" placeholder="Enter Address  " onChange={(e)=>setJobs({...jobs,education:e.target.value})} required />
        <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type='invalid'>please entre your education!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formFileMultiple" className="mb-3">
      <Form.Label>Upload Resume</Form.Label>
      <Form.Control type="file" onChange={(e)=>setJobs({...jobs,resume:e.target.files[0]})}  />
      </Form.Group>
      
        
      <Button  className="mb-3 border-0" variant='success' type="submit">Register</Button>
    </Form>
        </Col>
    </Row>
   </Container>
  )
}

export default Upplyjob



