import React,{useState} from 'react'
import { Col, Container, Row,Form ,Button,} from 'react-bootstrap'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Register() {
   const[validated,setValidate]=useState(false);
   const[fullname,setFullname]=useState("");
   const[userEmail,setuserEmail]=useState("");
   const[userPassword,setUserPassword]=useState("");


   const handleSubmit =async (event)=>{
       event.preventDefault();
      const form =  event.currentTarget;
      if(form.checkValidity()=== false){
        event.stopPropagation();
        setValidate(true)
      }else{
        setValidate(true)
        try {

          let res= await axios.post("http://localhost:8080/api/v1/register",{
          fullname:fullname,
          email:userEmail,
          password:userPassword
        }); 
        console.log(res);
        if(res.data.success){
          toast.success(res.data.message)
        }else{
          toast.success(res.data.message)
        }
          
        } catch (error) {
          console.log(error.message);
        }
      }
        }
   const handleFullname = (e)=>{
     console.log(fullname);
    setFullname(e.target.value )
   }
   const handleemail = (e)=>{
    console.log(userEmail);
    setuserEmail(e.target.value )
   }
   const handlepassword  =(e) =>{
    console.log(userPassword );
    setUserPassword(e.target.value)
   }


  return (
    <Container>
      <ToastContainer position="top-center"/>
    <Row>
        <Col  className='mt-3'>
            <h2>Sign in</h2>

        </Col>
    </Row>
    <Row>
        <Col>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formGroupFullname">
        <Form.Label>Full-name :</Form.Label>
        <Form.Control type="text" placeholder="Enter full  Name" required onKeyUp={handleFullname} />
        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">please entre your full name!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>E-mail</Form.Label>
        <Form.Control  type="email" placeholder="Enter emai" required onKeyUp={handleemail}  />
        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">please entre your email!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password" required onKeyUp={handlepassword} />
        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">please entre your password!</Form.Control.Feedback>
      </Form.Group>
      <Button  className="mb-3 border-0" variant='success' type="submit">Register</Button>
    </Form>
        </Col>
    </Row>
   </Container>
  )
}

export default Register