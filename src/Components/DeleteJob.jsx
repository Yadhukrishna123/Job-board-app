import React, { useState } from 'react'
import { Trash } from 'react-bootstrap-icons'
import { Modal ,Button} from 'react-bootstrap'
import instance from '../axios';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';



function DeleteJob({id}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();


    const handleConfirm =async ()=>{
        setShow(false)
        try {
            const res =await instance.delete(`/api/v1/getjob/${id}`,{
                witCredentials:true
            })
            if(res.data.success){
                toast.sccess(res.data.message)
                await new Promise((resolve)=> setTimeout(resolve, 2000))
                navigate("/jobList")
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
    

  return (
    <>
    
    <Trash onClick={handleShow}/>
    
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Job</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure that you want to delete Job!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            CLOSE
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            CONFIRM
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default DeleteJob