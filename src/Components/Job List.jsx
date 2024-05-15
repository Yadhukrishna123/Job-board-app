import React, { useEffect, useState } from 'react'
import { Col,Row,Container,Table} from 'react-bootstrap'
import {  Link, useNavigate } from 'react-router-dom'
import instance from '../axios';
import {  toast } from 'react-toastify';
//import DeleteUser from './DeleteUser'
import{ PencilSquare} from "react-bootstrap-icons"
import DeleteJob from './DeleteJob';



function Job_List() {
const [jobs,setJobs]= useState([])
const navigate = useNavigate();

const getAllJobs =async ()=>{
 try {

  const res =  await instance.get("/api/v1/getjob",{
    withCredentials:true
  })
  setJobs(res.data.jobs)
  
 } catch (error) {

  toast.error(error.response.data.message)

  await new Promise((resolve)=> setTimeout(resolve,2000))
 navigate("/login")
  console.log();
 }
}
useEffect(()=>{
  
  getAllJobs()
  
},[jobs,navigate])



  return (
   <Container>
      
        <Col className='mt-3'>
            <h5>JObs</h5>
        </Col>
        <Row>
          <Col>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Company Name</th>
          <th>Salary</th>
          <th>Location</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {jobs && jobs.map((job,index)=>(
          <tr key = {index}>
            <td>{index + 1}</td>
            <td>{job.title}</td>
            <td>{job.company_name}</td>
            <td>{job.salary}</td>
            <td>{job.location}</td>
            <td> 
               <Link to={`/job/${job._id}`}>
                <PencilSquare/>
               </Link>
            </td>
            <td>
              <DeleteJob id={job._id}/>
            </td>
           
          
          </tr>
        ))}  
      </tbody>
    </Table>
          </Col>
        
      </Row>
   </Container>
  )
}

export default Job_List