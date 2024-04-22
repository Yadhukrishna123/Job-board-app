import axios  from 'axios';
import React,{useState} from 'react'
import { Container,Button,Form,Col,Row} from "react-bootstrap";
import { Navigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  userAuthSuccess } from "../redux/userAuth";
import { useDispatch } from 'react-redux';



function Login() {

    const[validated,setValidate]=useState(false);
    const[userEmail,setuserEmail]=useState("");
    const[userPassword,setUserPassword]=useState("");
   const dispatch = useDispatch();

    const handleSubmit =async (event)=>{
        event.preventDefault(); 
        const form =  event.currentTarget;
        if(form.checkValidity() === false){
            event.stopPropagation();
            setValidate(true)
            
        }else{
            setValidate(true)
            try {

                let res= await axios.post("http://localhost:8080/api/v1/login",{
                email:userEmail,
                password:userPassword
              },{
                withCredentials:true
              }); 
              if(res.data.success){

                if(res.data.isAuthenticated){

                  dispatch(userAuthSuccess({user:res.data.user, isAuthenticated:res.data.isAuthenticated}));
                  toast.success(res.data.message)
                new Promise((resolve)=> setTimeout(resolve,2000))
                Navigate("/home")
                }else{
                  toast.error(res.data.message)
                }
              }else{
                toast.error(res.data.success)
              }
              
              
                
              } catch (error) {
                toast.error(error.message)
              }
             }   
            }
    const handleEmail = (event)=>{
        console.log(userEmail);
        setuserEmail(event.target.value)
    }

    const handlepassword = (event)=>{
        console.log(userPassword)
        setUserPassword(event.target.value)
    }

  return (
    <Container>
    <ToastContainer position="top-center"/>
  <Row>
      <Col  className='mt-3'>
          <h2>Login</h2>

      </Col>
  </Row>
  <Row>
      <Col>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
    
    <Form.Group className="mb-3" controlId="formGroupEmail">
      <Form.Label>E-mail</Form.Label>
      <Form.Control type="email" placeholder="Enter email" required onKeyUp={handleEmail}  />
      <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
      <Form.Control.Feedback type="invalid">please entre your email!</Form.Control.Feedback>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formGroupPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Enter password" required onKeyUp={handlepassword} />
      <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
      <Form.Control.Feedback type="invalid">please entre your password!</Form.Control.Feedback>
    </Form.Group>
    <Button  className="mb-3 border-0" variant='success' type="submit">LOGIN</Button>
  </Form>
      </Col>
  </Row>
 </Container>
  )
}

export default Login