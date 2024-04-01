import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col,Row,Container,Table} from 'react-bootstrap'
import{ PencilSquare,} from "react-bootstrap-icons"
import { Link, useNavigate } from 'react-router-dom'
import DeleteUser from './DeleteUser'
import {  toast } from 'react-toastify';
  //import 'react-toastify/dist/ReactToastify.css';








function Users() {
const [users,setUsers]= useState([])
const navigate = useNavigate();


const getAllusers =async ()=>{
  try {
    const res =  await axios.get("http://localhost:8080/api/v1/users",{
     withCredentials:true
    })

    setUsers(res.data.users)
   

  } catch (error) {
  toast.error(error.response.data.message)

  await new Promise((resolve)=> setTimeout(resolve,2000))
   navigate("/login")
   console.log();
  }
 }

useEffect(()=>{

 
  getAllusers()

},[navigate,getAllusers])
  

  return (
    <Container>
     
   <Row>
      <Col  className='mt-3'>
          <h2>Users</h2>
          </Col>
    </Row>   
    <Row>
      <Col>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Fullname</th>
          <th>Email</th>
          <th>Edit</th>
          <th>Delete</th>
          
        </tr>
      </thead>
      <tbody>
        {users && users.map((user,index) => (
          <tr key = {index}>
          <td>{index + 1}</td>
          <td>{user.fullname}</td>
          <td>{user.email}</td>
          <td>
             <Link to={`/user/${user._id}`}>
               <PencilSquare/>
             </Link>
          </td>
          <td>
            <DeleteUser id={user._id} users={users} setUsers={setUsers} />
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

export default Users