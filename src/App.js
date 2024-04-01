
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Upplyjob from "./Components/Upplyjob";
import Registerr from "./Components/Registerr";
import Add from "./Components/Add";
import Login from "./Components/Login";
import JobDetaild from "./Components/JobDetaild"
import ContactInfo from "./Components/ContactInfo";

import{BrowserRouter as Router,Routes,Route} from "react-router-dom"
import ProtectedRoute from "./utils/ProtectedRoute";
import { useSelector } from "react-redux";
import Users from "./Components/Users";
import EditUser from "./Components/EditUser";












function App() {
const isAuthenticated = useSelector((state)=>state.user.isAuthenticated)



  return (
    <Router >
      <Header/>
      <Routes>

         <Route path="/home" element={<Home/>} />
        
         <Route path="/contactinfo" element={<ContactInfo/>} />
         <Route path="/upply" element={<Upplyjob/>} />
         <Route path="/registerr" element={<Registerr/>} />
         <Route path="/login" element={<Login/>} />
         <Route path="/detail/:id" element={<JobDetaild/>} />
         
         <Route path="/Add" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Add/></ProtectedRoute>} />
         <Route path="/users" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Users/></ProtectedRoute>} />
         <Route path="/user/:id" element={<ProtectedRoute isAuthenticated={isAuthenticated}><EditUser/></ProtectedRoute>} />

      </Routes>

        <Footer/>

    </Router>

      
  );
}

export default App;
