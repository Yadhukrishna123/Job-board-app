
import React,{useState} from 'react'
import { Col, Container, Row,Form ,Button,} from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import instance from '../axios';
import { useNavigate } from 'react-router-dom';



function Add() {
   const[validated,setValidate]=useState(false);
   const navigate = useNavigate();
   

   



   const[add,setAdd]= useState({
    title:"",
    description:"",
    company_name:"",
    experiance:"",
    qualification:"",
    salary:"",
    location:"",
    
   })
   console.log(add);

   const handleSubmit =async (event)=>{
       event.preventDefault();
      const form = event.currentTarget;
      if(form.checkValidity()=== false){
        event.stopPropagation();
       
      }else{
       
       
        try {
          const res = await instance.post(`/api/v1/updateJob`, {
            headers:{
              "Content-Type":"multipart/form-data",
            },
            withCredentials:true 
          })

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
      setValidate(true);
     }

        
  return (
    <Container>
      <ToastContainer position="top-center"/>
    <Row>
        <Col  className='mt-3'>
            <h2>Add</h2>

        </Col>
    </Row>
    <Row>
        <Col>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formGroupFullname">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter Job Name "  onChange={(e)=>setAdd({...add,title:e.target.value})} required />
        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">entre Job title!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Description"  onChange={(e)=>setAdd({...add,description:e.target.value})} required  />
        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">please entre your email!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Company name</Form.Label>
        <Form.Control type="text" placeholder="company name"  onChange={(e)=>setAdd({...add,company_name:e.target.value})} required/>
        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">  your company!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Experience</Form.Label>
        <Form.Control type="text" placeholder="experiance"  onChange={(e)=>setAdd({...add,experiance:e.target.value})} required />
        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">experiance!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Qualification</Form.Label>
        <Form.Control type="text" placeholder="experiance"  onChange={(e)=>setAdd({...add,qualification:e.target.value})} required />
        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">experiance!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Salary</Form.Label>
        <Form.Control type="text" placeholder="Enter Salary" onChange={(e)=>setAdd({...add,salary:e.target.value})} required />
        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">please entre salary!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" placeholder="Enter location" onChange={(e)=>setAdd({...add,location:e.target.value})} required />
        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">please entrelocation!</Form.Control.Feedback>
      </Form.Group>
      
      
      <Button  className="mb-3 border-0" variant='success' type="submit">Add</Button>
    </Form>
        </Col>
    </Row>
    <div>
      <h2>hello</h2>
    </div>
   </Container>
  )
}

export default Add