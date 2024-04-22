import{ Container,Form,Button} from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { userlogout } from '../redux/userAuth';





function Header() {

  const isAuthenticated = useSelector((state)=>state.user.isAuthenticated)
  const dispatch = useDispatch()

  const handleLogout = ()=>{

        dispatch(userlogout())


  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" className="bg-body-tertiary"  data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/home">JOB PORTAL</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as ={ Link} to = "/home" >HOME</Nav.Link>
            <Nav.Link as ={ Link} to = "/add">Add</Nav.Link>
            <Nav.Link as ={ Link} to = "/upply">Upply</Nav.Link>
            <Nav.Link as ={ Link} to = "/users">User</Nav.Link>
            <Nav.Link as ={ Link} to = "/jobList">Jobs</Nav.Link>
            <Nav.Link as ={ Link} to = "/registerr">Sign in</Nav.Link>
            {/* <Nav.Link as ={ Link} to = "/detail">details</Nav.Link> */}
          </Nav>
          
        </Navbar.Collapse>
         <Form.Group >
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
         {isAuthenticated ? <Button onClick={handleLogout}>Logout</Button> : <Nav.Link as ={ Link} to = "/login">
          <Button>Login</Button></Nav.Link>}
        
        </Nav>
        </Navbar.Collapse>
        </Form.Group>

      </Container>
    </Navbar>
  );
}

export default Header;