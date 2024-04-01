
import React, { useState } from 'react'
import { Container ,Row, Col,Form ,Button,} from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import instance from '../axios';
import { useNavigate } from 'react-router-dom';



 function ContactInfo() {

    

 const navigate = useNavigate();
const [validated, setValidated] = useState(false);
const [Jobs,setjobs] = useState({
        first_name:"",
        last_name:"",
        email:"",
        state:"",
        city:"",
        address:"",
        phone_number:"",
        cv:"",
})
console.log(Jobs);
    const handleSubmit =async  (event) => { 
      event.preventDefault();
    const form =  event.currentTarget;
    if(form.checkValidity()=== false){
      event.stopPropagation();
      setValidated(true)
    }else{
      const formData = new FormData();
      formData.append("firstName",Jobs.first_name)
      formData.append("lastname",Jobs.last_name)
      formData.append("email",Jobs.email)
      formData.append("state",Jobs.state)
      formData.append("city",Jobs.city)
      formData.append("address",Jobs.address)
      formData.append("phonenumber",Jobs.phone_number)
      formData.append("cv",Jobs.cv)
      
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
    }
    setValidated(true); 
      }












  return (
    <Container>
      <ToastContainer position="top-center"/>
        <Row>
         <Col className="py-4" >
            <h2>Add Your contact information</h2>
        </Col>
        </Row>
        <Row>
            <Col>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control  type="text"  placeholder="First name"  onChange={(e)=>setjobs({...Jobs,first_name:e.target.value})} required/>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control   type="text"  placeholder="Last name"  onChange={(e)=>setjobs({...Jobs,last_name:e.target.value})} required/>
           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" onChange={(e)=>setjobs({...Jobs,email:e.target.value})} required />
          <Form.Control.Feedback type="invalid"> Please provide a valid email. </Form.Control.Feedback>
        </Form.Group>
       <Row className='mb-3'>
       <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" onChange={(e)=>setjobs({...Jobs,state:e.target.value})} required/>
          <Form.Control.Feedback type="invalid">Please provide a valid state.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" onChange={(e)=>setjobs({...Jobs,city:e.target.value})} required />
          <Form.Control.Feedback type="invalid">Please provide a valid City. </Form.Control.Feedback>
        </Form.Group>
        </Row>
         <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Address :</Form.Label>
          <Form.Control type="text" placeholder="address" onChange={(e)=>setjobs({...Jobs,address:e.target.value})} required />
          <Form.Control.Feedback type="invalid"> Please provide a valid address. </Form.Control.Feedback>
          <Form.Control.Feedback type="valid">Looking good. </Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Phone Number :</Form.Label>
          <Form.Control type="number" placeholder="Phone number" onChange={(e)=>setjobs({...Jobs,phone_number:e.target.value})} required/>
          <Form.Control.Feedback type="valid">Looking good </Form.Control.Feedback>
          <Form.Control.Feedback type="invalid"> Please provide a valid mobile number. </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>CV</Form.Label>
        <Form.Control type="file" multiple onChange={(e)=>setjobs({...Jobs,cv:e.target.files[0]})} />
      </Form.Group>
    
      <Button  type="submit">Submit</Button>
    </Form>
            </Col>
        </Row>
        
       
        
        
    </Container>
  )
}

export default ContactInfo