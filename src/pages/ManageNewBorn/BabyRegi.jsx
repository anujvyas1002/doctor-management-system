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
import BabyDetails from "./BabyDetails";
import Report from "./Report";
import BabyInfo from "./BabyInfo";
import Header from "../../components/NavBar/Header";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Anka Technology © "}
      <Link color="inherit" href="https://mui.com/">
        Doctor Management System
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const steps = ["Baby Information", "Baby details", "Review your Report"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <BabyInfo />;
    case 1:
      return <BabyDetails />;
    case 2:
      return <Report />;
    default:
      throw new Error("Unknown step");
  }
}

const theme = createTheme();

export default function BabyRegi() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const paperStyle = { padding: "10px 10px", width: 600, margin: "10px auto" };

  return (
    <>
     <Header/>
    
      {/* <AppBar
    position="absolute"
    color="default"
    elevation={0}
    sx={{
      position: 'relative',
      borderBottom: (t) => `1px solid ${t.palette.divider}`,
    }}
  >
    
    <Toolbar>
      <Typography variant="h6" color="inherit" noWrap>
       Doctor Management System
      </Typography>
    </Toolbar>
  </AppBar> */}

 <div style={{marginTop:"15vh"}}>

      <Paper elevation={20} style={paperStyle}>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
            <Paper
              variant="outlined"
              sx={{ my: { xs: 3, md: 2 }, p: { xs: 2, md: 2 } }}
            >
              <Typography component="h1" variant="h4" align="center">
                Baby Registration Form
              </Typography>
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
                    Your registration number is #2001539. We have emailed your
                    registration confirmation, and will send you an update when
                    you have next checkup Appointment.
                  </Typography>
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
                    >
                      {activeStep === steps.length - 1
                        ? "Submit Report"
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
    </>
  );
}
