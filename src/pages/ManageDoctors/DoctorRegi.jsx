import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
// import AppBar from '@mui/material/AppBar';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
// import Toolbar from '@mui/material/Toolbar';
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ReactDOM from "react-dom";
import DoctorDetails from "./DoctorDetails";
import Report from "./Report";
import PersonalInfo from "./PersonalInfo";

import { useNavigate } from "react-router-dom";
import Header from "../../components/NavBar/Header";
import Footer from "../../components/Footer/Footer";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Anka Technology © "}
      <Link color="inherit" href="/">
        Doctor Management System
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const steps = ["Doctor Information", "Doctor details", "Submit your Details"];

function getStepContent(step) {

  switch (step) {
    case 0:
      return <PersonalInfo />;
    case 1:
      return <DoctorDetails />;
    case 2:
      return <Report />;
    default:
      throw new Error("Unknown step");
  }
}

const theme = createTheme();

export default function DoctorRegi() {

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const paperStyle = { padding: "10px 10px", width: 600, margin: "10px auto" };

  const navigate = useNavigate();
  const okGoToLogin=()=>{
    navigate("/DoctorLogin");
   }

  //  let state = {
  //   activeStep: 0 | 1| 2,
  //   steps: [{
  //     name: 'step-name',
  //     icon: 'icon-name',
  //     content: PersonalInfo | DoctorDetails | DoctorRegi, // this is optional, you can use getContent too
  //     data: {}
  //   }]
  // }

  // handleStepSubmit = (stepIndex,data) =>{
  //  setState((prevState)=>{
  //   ...prevState,
  //   activeIndex:prevState + activeIndex + 1,
  //   steps:prevState.map((step,index) => {
  //     if(stepIndex !==index){
  //       return step;
  //     }
  //     return{
  //       ...step,
  //       data
  //     }
  //   })
  //  })
  // }

  return (  
    <>
    <Header/>

  <div style={{marginTop:"15vh",marginBottom:"5vh"}}>

      <Paper elevation={20} style={paperStyle}>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
            <Paper
              variant="outlined"
              sx={{ my: { xs: 3, md: 2 }, p: { xs: 2, md: 2 } }}
            >
              <Typography component="h1" variant="h4" align="center">
                Doctor Registration Form
             
              </Typography>
              <p>Note: Medical Practitioner should register here and create their system username password.</p>
              <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Thank you for Registration.
                  </Typography>
                  <Typography variant="subtitle1">
                    Your Registration is Successful.Your Login Credential shared with you on xxxx@gmail.com
                  </Typography>
                  <Button variant="contained" sx={{ marginTop: "25px" }}  onClick={okGoToLogin}>
                  ok{" "}</Button>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {getStepContent(activeStep)}
                  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                        Back
                      </Button>
                    )}

                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 3, ml: 1 }}
                      type="submit"
                    >
                      {activeStep === steps.length - 1
                        ? "Submit Details  "
                        : "Next"}
                       
                    </Button>
                  </Box>  
                </React.Fragment>
              )}
            </Paper>
            <Copyright />
          </Container>
        </ThemeProvider>
      </Paper>
      </div>
      <Footer/>

    </>
  );
}
