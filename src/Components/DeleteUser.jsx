
import React, { useState } from 'react'
import { Modal ,Button} from 'react-bootstrap'
import{Trash3} from "react-bootstrap-icons"
import instance from '../axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function DeleteUser({id, users, setUsers }) {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 

    const handleConfirm =async ()=>{
        setShow(false)
    
        try {
            const res = instance.delete(`/api/v1/user/${id}`,{
                witCredentials:true
            })
            if(res.data.success){
                toast.success(res.data.message)
                setUsers(users.filter((user)=>user._id !==id));
                await new Promise ((resolve)=>setTimeout(resolve,2000))
                
                navigate("/")
              }else{
                toast.error(res.data.message)
              }
        } catch (error) {
            toast.error(error.response.data.message)
        }


    }

  return (
    <>
    <ToastContainer position="top-center"/>
       <Trash3 onClick={ handleShow}/>

       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure that you want to delete user!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Confirm
          </Button>
          <Button variant="primary" onClick={handleConfirm }>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default DeleteUser