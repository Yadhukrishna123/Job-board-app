import React, { useEffect, useState } from 'react'
import { Col,Row,Container,Button,Form} from 'react-bootstrap'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer, toast } from 'react-toastify';
import instance from '../axios';
import { useNavigate, useParams } from 'react-router-dom';




function EditJob() {
    const[validated,setValidate]=useState(false);
    // const[location,setLocation]=useState("");
    // const[salary,setSalary]=useState("");
    // const[companyname,setCompanyName]=useState("");
    // const[title,settitle]=useState("");

    const navigate = useNavigate();
    const [user,setUser]=useState({
        title:"",
        companyName:"",
        salary:"",
        location:""
    })
     
    const {id} =  useParams();
    // console.log(id);

    useEffect(()=>{
     const   getJobDetails =async ()=>{
            try {
                const res =await instance.get(`api/v1/getjob/${id}`,{
                    withCredentials:true
                })
                console.log(res);
                setUser({
                    title:res.data.job.title,
                    companyName:res.data.job.companyName,
                    salary:res.data.job.salary,
                    location:res.data.job.location

                })
                
            } catch (error) {
                toast.error(error.message)
            }
        }

        getJobDetails( )
    },[id])
    console.log(user);

    const handleSubmit =async (event) =>{
        event.preventDefault();
        const form =  event.currentTarget;
        if(form.checkValidity()=== false){
          event.stopPropagation();
          setValidate(true)
        }else{
          setValidate(true)

          try {
            const res = await instance.put(`/api/v1/getjob/${id}`,{
                title:user.title,
                companyName:user.companyName,
                salary:user.salary,
                location:user.location,
            },{
                withCredentials:true
            })

            if(res.data.success){
                toast.success(res.data.message)
                await new Promise ((resolve)=>setTimeout(resolve,2000))
                navigate("/jobList")
              }else{
                toast.success(res.data.message)
              }
          } catch (error) {
            toast.error(error.response.data.message)
          }
    }
}



      console.log(user);
  return (
    <Container>
     <ToastContainer position="top-center"/> 
  <Row>
      <Col  className='mt-3'>
          <h2>Update  Job</h2>

      </Col>
  </Row>
  <Row>
      <Col>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formGroupFullname">
      <Form.Label>Title</Form.Label>
      <Form.Control type="text" placeholder="Enter Job Name " defaultValue={user.title} required onKeyUp={(e) => setUser({...user, title:e.target.value})} />
      <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
      <Form.Control.Feedback type="invalid">entre Job title!</Form.Control.Feedback>
    </Form.Group>
   
    <Form.Group className="mb-3" controlId="formGroupEmail">
      <Form.Label>Company name</Form.Label>
      <Form.Control type="text" placeholder="company name" defaultValue={user.companyName} required onKeyUp={(e) => setUser({...user, companyName:e.target.value})}/>
      <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
      <Form.Control.Feedback type="invalid">  your company!</Form.Control.Feedback>
    </Form.Group>
   
  
    <Form.Group className="mb-3" controlId="formGroupPassword">
      <Form.Label>Salary</Form.Label>
      <Form.Control type="text" placeholder="Enter Salary" defaultValue={user.salary} required onKeyUp={(e) => setUser({...user, salary:e.target.value})} />
      <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
      <Form.Control.Feedback type="invalid">please entre salary!</Form.Control.Feedback>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formGroupPassword">
      <Form.Label>Location</Form.Label>
      <Form.Control type="text" placeholder="Enter location"  defaultValue={user.location} required onKeyUp={(e) => setUser({...user, location:e.target.value})} />
      <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
      <Form.Control.Feedback type="invalid">please entrelocation!</Form.Control.Feedback>
    </Form.Group>
    
    
    <Button  className="mb-3 border-0" variant='success' type="submit">Update</Button>
  </Form>
      </Col>
  </Row>
  
 </Container>
  )
}

export default EditJob