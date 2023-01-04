import './App.css';
import PatientRegi from './pages/ManagePatient/PatientRegi';
import DoctorRegi from './pages/ManageDoctors/DoctorRegi';
import BabyRegi from './pages/ManageNewBorn/BabyRegi'
import Header from './components/NavBar/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/DashBoard/Home.jsx';
import DoctorLogin from './pages/ManageDoctors/DoctorLogin'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from './pages/DashBoard/Dashboard';
import NewBornHistory from './pages/ManageNewBorn/NewBornHistory';
import PregnancyHistory from './pages/ManagePatient/PregnancyHistory';
import AboutUs from './pages/DashBoard/AboutUs';
import Report from './pages/DashBoard/Report';
import ContactUs from './pages/DashBoard/ContactUs';
import LinaerStepper from './pages/ManageNewBorn/BabyRegi';
import DoctorHistory from './pages/ManageDoctors/DoctorHistory';

// import { CssBaseline, Container, Paper, Box } from "@material-ui/core";


function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Routes>    
      <Route path="/" element={<Header/>} />
   <Route path="/DoctorRegi" element={<DoctorRegi />} />
   <Route path="/BabyRegi" element={<LinaerStepper/>} />
   <Route path="/DoctorLogin" element={<DoctorLogin/>} />
   <Route path="/Dashboard" element={<Dashboard/>} />
   <Route path="/PatientRegi" element={<PatientRegi/>} />
   <Route path="/NewBornHistory" element={<NewBornHistory/>} />
   <Route path="PregnancyHistory" element={<PregnancyHistory/>} />
   <Route path="DoctorHistory" element={<DoctorHistory/>} />


   <Route path="/Home" elemet={<Home/>}  /> 
   <Route path="/AboutUs" element={<AboutUs/>} />
   <Route path="/ContactUs" element={<ContactUs/>} />
   <Route path="/Report" element={<Report/>}/>

   <Route path="/Footer" element={<Footer/>} />
    </Routes> 
    </BrowserRouter>

    {/* <>
      <CssBaseline />
      <Container component={Box} p={4}>
        <Paper component={Box} p={3}>
          <PatientRegistration />
        </Paper>
      </Container>
    </> */}

    </div>
  );
}

export default App;
