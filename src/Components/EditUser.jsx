import React, { useEffect, useState } from 'react'
import { Form,Button,Container,Col,Row} from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  useNavigate, useParams } from 'react-router-dom';
import instance from '../axios';




function EditUser() {

     const[validated,setValidate]=useState(false);
     const navigate = useNavigate();
    
    const [user,setUser]=useState({
      fillname:"",
      email:""
    })

     const {id} =  useParams("id")
      
     useEffect(()=>{
     
         const  getUserDetails = async ()=>{
            try {
            const res =await instance.get(`/api/v1/user/${id}`,{
              withCredentials:true
            })
           
            setUser({
              fullname:res.data.user.fullname,
              email:res.data.user.email
            })
           } catch (error) {
            toast.error(error.message)
           }
        }
        getUserDetails();

     },[id])
    
     console.log(user);

     const handleSubmit =async (event)=>{

      event.preventDefault();
      const form = event.currentTarget;
      if(form.checkValidity()=== false){
        event.stopPropagation();
        setValidate(true)
      }else{
        setValidate(true)
        try {
          const res =await instance.put(`/api/v1/user/${id}`,{
            fullname:user.fullname,
            email:user.email
          },{
            withCredentials:true
          });

          if(res.data.success){
            toast.success(res.data.message)
            await new Promise ((resolve)=>setTimeout(resolve,2000))
            navigate("/")
          }else{
            toast.success(res.data.message)
          }
        } catch (error) {
          toast.success(error.response.data.message)
        }
      } 
    }   
    
     console.log(user);

  return (
    <Container>
      <ToastContainer position="top-center"/>
    <Row>
        <Col  className='mt-3'>
            <h2>Update User</h2>

        </Col>
    </Row>
    <Row>
        <Col>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formGroupFullname">
        <Form.Label>Full-name :</Form.Label>
        <Form.Control type="text" placeholder="Enter full  Name" defaultValue={user.fullname} required onKeyUp={(e) => setUser({...user, fullname:e.target.value})} />
        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">please entre your full name!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>E-mail</Form.Label>
        <Form.Control  type="email" placeholder="Enter emai" defaultValue={user.email} required onKeyUp={(e) => setUser({...user, email:e.target.value})} />
        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">please entre your email!</Form.Control.Feedback>
      </Form.Group>
      
      <Button  className="mb-3 border-0" variant='success' type="submit">Update</Button>
    </Form>
        </Col>
    </Row>
   </Container>
  )
}

export default EditUser