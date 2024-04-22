
import React,{useState} from 'react'
import { Col, Container, Row,Form ,Button,} from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 //import instance from '../axios';
import { useNavigate } from 'react-router-dom';
import instance from '../axios';




function Add() {
   const[validated,setValidate]=useState(false);
   const[title,settitle]=useState("");
   const[description,setDescription]=useState("");
   const[companyname,setCompanyName]=useState("");
   const[experiance,setExperiance]=useState("");
   const[qualification,setQualification]=useState("");
   const[salary,setSalary]=useState("");
   const[location,setLocation]=useState("");
  const navigate = useNavigate();

  const handleTitle = (e)=>{
    console.log(title);
    settitle(e.target.value )
  }
  const handleDescription = (e)=>{
    console.log(companyname);
    setCompanyName(e.target.value )
  }
  const  handleCompanyName = (e)=>{
    console.log(description);
    setDescription(e.target.value ) 
  }
  const  handleExperiance = (e)=>{
    console.log(experiance);
    setExperiance(e.target.value )
  }
  const  handleQualification = (e)=>{
    console.log(qualification);
    setQualification(e.target.value )
  }
  const  handleSalary = (e)=>{
    console.log(salary);
    setSalary(e.target.value )
  }
  const  handleLocation = (e)=>{
    console.log(location);
    setLocation(e.target.value )
  }





   

   const handleSubmit =async (event)=>{
       event.preventDefault();
      const form = event.currentTarget;
      if(form.checkValidity()=== false){
        event.stopPropagation();
        setValidate(true);
       }else{
      setValidate(true);
       
       
        try {
          let res= await instance.post(`/api/v1/updateJob`,{
            title:title,
            description:description,
            company_name:companyname,
            experiance:experiance,
            qualification:qualification,
            salary:salary,
            location:location
          })
          console.log(res);
          if(res.data.success){
            toast.success(res.data.message)
          }else{
            toast.success(res.data.message)
          }
          await new Promise((resolve) => setTimeout(resolve, 2000));
          navigate("/")
        } catch (error) {
          console.log(error.message);
        }
       }
       setValidate(true); 
      }

        
  return (
    <Container>
      <ToastContainer position="top-center"/>
    <Row>
        <Col  className='mt-3'>
            <h2>Add Job</h2>

        </Col>
    </Row>
    <Row>
        <Col>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formGroupFullname">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter Job Name "   required onKeyUp={handleTitle} />
        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">entre Job title!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Description"  required onKeyUp={handleDescription}  />
        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">please entre your email!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Company name</Form.Label>
        <Form.Control type="text" placeholder="company name" required onKeyUp={handleCompanyName}/>
        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">  your company!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Experience</Form.Label>
        <Form.Control type="text" placeholder="experiance"  required onKeyUp={handleExperiance} />
        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">experiance!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Qualification</Form.Label>
        <Form.Control type="text" placeholder="experiance" required onKeyUp={handleQualification} />
        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">experiance!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Salary</Form.Label>
        <Form.Control type="text" placeholder="Enter Salary"required onKeyUp={handleSalary} />
        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">please entre salary!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" placeholder="Enter location" required onKeyUp={handleLocation} />
        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">please entrelocation!</Form.Control.Feedback>
      </Form.Group>
      
      
      <Button  className="mb-3 border-0" variant='success' type="submit">Add</Button>
    </Form>
        </Col>
    </Row>
    
   </Container>
  )
}

export default Add