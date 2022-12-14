// import * as React from "react";
// import CssBaseline from "@mui/material/CssBaseline";
// // import AppBar from '@mui/material/AppBar';
// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// // import Toolbar from '@mui/material/Toolbar';
// import Paper from "@mui/material/Paper";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/StepLabel";
// import Button from "@mui/material/Button";
// import Link from "@mui/material/Link";
// import Typography from "@mui/material/Typography";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import PatientDetails from "./PatientDetails";
// import Report from "./Report";
// import PersonalInfo from "./PersonalInfo";
// import Header from "../../components/NavBar/Header";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center">
//       {"Anka Technology © "}
//       <Link color="inherit" href="/">
//         Doctor Management System
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

// const steps = ["Personal Information", "Patient details", "Review your Report"];

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return <PersonalInfo />;
//     case 1:
//       return <PatientDetails />;
//     case 2:
//       return <Report />;
//     default:
//       throw new Error("Unknown step");
//   }
// }

// const theme = createTheme();

// export default function PatientRegi() {
//   const [activeStep, setActiveStep] = React.useState(0);

//   const handleNext = () => {
//     setActiveStep(activeStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep(activeStep - 1);
//   };

//   const paperStyle = { padding: "10px 10px", width: 600, margin: "10px auto" };

//   return (
//     <>
//     <Header/>

//        <div style={{marginTop:"10vh"}}>
//       <Paper elevation={20} style={paperStyle}>
//         <ThemeProvider theme={theme}>
//           <CssBaseline />

//           <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
//             <Paper
//               variant="outlined"
//               sx={{ my: { xs: 3, md: 2 }, p: { xs: 2, md: 2 } }}
//             >
//               <Typography component="h1" variant="h4" align="center">
//                 Patient Registration Form
//               </Typography>
//               <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
//                 {steps.map((label) => (
//                   <Step key={label}>
//                     <StepLabel>{label}</StepLabel>
//                   </Step>
//                 ))}
//               </Stepper>
//               {activeStep === steps.length ? (
//                 <React.Fragment>
//                   <Typography variant="h5" gutterBottom>
//                     Thank you for Registration.
//                   </Typography>
//                   <Typography variant="subtitle1">
//                     Your registration number is #2001539. We have emailed your
//                     registration confirmation, and will send you an update when
//                     you have next checkup Appointment.
//                   </Typography>
//                 </React.Fragment>
//               ) : (
//                 <React.Fragment>

//                   {getStepContent(activeStep)}
//                   <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
//                     {activeStep !== 0 && (
//                       <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
//                         Back
//                       </Button>
//                     )}

//                     <Button
//                       variant="contained"
//                       onClick={handleNext}
//                       sx={{ mt: 3, ml: 1 }}
//                     >
//                       {activeStep === steps.length - 1
//                         ? "Submit Report"
//                         : "Next"}
//                     </Button>
//                   </Box>
//                 </React.Fragment>
//               )}
//             </Paper>
//             <Copyright />
//           </Container>
//         </ThemeProvider>
//       </Paper>
//       </div>
//     </>
//   );
// }

import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Header from "../../components/NavBar/Header";
import Report from "../ManageNewBorn/Report";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Footer from "../../components/Footer/Footer";
import "./Patient.css";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Stack from "@mui/material/Stack";

import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import Grid from "@mui/material/Grid";

import { makeStyles } from "@material-ui/core/styles";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Basic information", "Patient Information", "Report"];
}

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

const theme = createTheme();

const PersonalInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const paperStyle = { padding: "10px 10px", width: 600, margin: "10px auto" };

  const { control } = useFormContext();
  const [selectedDate, setSelectedDate] = React.useState();

  
  return (
    <div>
      <div style={{ marginTop: "5vh", marginBottom: "5vh" }}>
        <Paper elevation={20} style={paperStyle}>
          <ThemeProvider theme={theme}>
            <CssBaseline />

            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
              <Typography component="h1" variant="h4" align="center">
               Patient Registration
              </Typography>
              <Paper
                variant="outlined"
                sx={{ my: { xs: 3, md: 2 }, p: { xs: 2, md: 2 } }}
              >
                <Typography variant="h6" gutterBottom>
                  Personal Information
                </Typography>
                <Grid container spacing={3}>
                  <Controller
                    control={control}
                    name="firstName"
                    render={({ field }) => (
                      <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            {...register("firstname",{required:true, minLength:2})}
          />
            <small className="invalid">
              {errors.firstname?.type === "required" && (
                <p>First name is required.</p>
              )}
            </small>
            <small className="invalid">
              {errors.firstname?.type === "minLength" && (
                <p>Please enter minimun 2 char.</p>
              )}
            </small>
       </Grid>
                    )}
                  />

                  <Controller
                    control={control}
                    name="lastName"
                    render={({ field }) => (
                      <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="middlename"
                        label="Middle name"
                        fullWidth
                        autoComplete="middle-name"
                        variant="standard"
                        {...register("middlename",{required:true, minLength:2})}
                      />
                        <small className="invalid">
                          {errors.middlename?.type === "required" && (
                            <p>Middle name is required.</p>
                          )}
                        </small>
                        <small className="invalid">
                          {errors.middlename?.type === "minLength" && (
                            <p>Please enter minimun 2 char.</p>
                          )}
                        </small>
                    </Grid>
                    )}
                  />
                </Grid>

                <Grid container spacing={3}>
                  <Controller
                    control={control}
                    name="emailid"
                    render={({ field }) => (
                      <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="lastname"
                        label="Last name"
                        fullWidth
                        autoComplete="last-name"
                        variant="standard"
                        {...register("lastname",{required:true, minLength:2})}
                      />
                        <small className="invalid">
                          {errors.lastname?.type === "required" && (
                            <p>Last name is required.</p>
                          )}
                        </small>
                        <small className="invalid">
                          {errors.lastname?.type === "minLength" && (
                            <p>Please enter minimun 2 char.</p>
                          )}
                        </small>
                    </Grid>
                    )}
                  />

                  <Controller
                    control={control}
                    name="mobilenumber"
                    render={({ field }) => (
                      <Grid item xs={12} md={6}>
                        <TextField
                          required
                          id="mobilenumber"
                          label="Mobile Number"
                          fullWidth
                          autoComplete="Mobile Number"
                          variant="standard"
                          {...register("mobilenumber", {
                            required: true,
                            pattern: /^([2-9])(?!\1+$)\d{9}$/,
                            minLength: 10,
                            maxLength: 10,
                          })}
                        />

                        <small className="invalid">
                          {errors.mobilenumber?.type === "required" && (
                            <p>Mobile number is required.</p>
                          )}
                        </small>
                        <small className="invalid">
                          {errors.mobilenumber?.type === "pattern" && (
                            <p>Invalid Mobile number.</p>
                          )}
                        </small>
                        <small className="invalid">
                          {errors.mobilenumber?.type === "minLength" && (
                            <p>Please enter 10 digits of mobile number.</p>
                          )}
                        </small>
                        <small className="invalid">
                          {errors.mobilenumber?.type === "maxLength" && (
                            <p>Mobile number should have 10 digits only.</p>
                          )}
                        </small>
                      </Grid>
                    )}
                  />
                </Grid>

                <Controller
                  control={control}
                  name="password"
                  render={({ field }) => (
                    <Grid item xs={12} sm={6}>
                    <div className="form-group">
                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                            
                            <Stack spacing={3}>
                              <DesktopDatePicker
                                {...register("dateofbirth", { required: "DOB is Required" })}
                                onChange={(newValue) => {
                                  console.log(newValue)
                                  setSelectedDate(newValue);
                                }}
                                label="Birth Date *"
                                value={selectedDate}
                                maxDate={new Date()}
                                renderInput={(params) => <TextField {...params} />}
                              />
                              
                            </Stack>
                          </LocalizationProvider>
            
                          {errors.dateofbirth && (
                            <span className="text-danger"> {errors.dateofbirth.message}</span>
                          )}
                        </div>
                    </Grid>
                  )}
                />
              </Paper>
              <Copyright />
            </Container>
          </ThemeProvider>
        </Paper>
      </div>
    </div>
  );
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const paperStyle = { padding: "10px 10px", width: 600, margin: "10px auto" };

  const [graduation, setGraduation] = useState("");

  const handleQualification = (event) => {
    setGraduation(event.target.value);
  };

  const { control } = useFormContext();
  return (
    <>
      <Header />
      <div style={{ marginTop: "5vh", marginBottom: "5vh" }}>
        <Paper elevation={20} style={paperStyle}>
          <ThemeProvider theme={theme}>
            <CssBaseline />

            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
              <Paper
                variant="outlined"
                sx={{ my: { xs: 3, md: 2 }, p: { xs: 2, md: 2 } }}
              >
                <Typography variant="h6" gutterBottom>
                  Doctor Details
                </Typography>
                <Grid container spacing={3}>
                  <Controller
                    control={control}
                    name="qualification"
                    render={({ field }) => (
                      <Grid item md={6}>
                        <FormControl variant="standard" sx={{ minWidth: 230 }}>
                          <InputLabel id="demo-simple-select-required-label">
                            Qualification *
                          </InputLabel>
                          <Controller
                            name="qualification"
                            id="qualification"
                            defaultValue={""}
                            control={control}
                            render={({ field }) => (
                              <Select
                                labelId="demo-simple-select-required-label"
                                {...field}
                                {...register("qualification", {
                                  required: true,
                                })}
                              >
                                <MenuItem value="">
                                  <em>Graduation</em>
                                </MenuItem>
                                <MenuItem value={10}>MBBS</MenuItem>
                                <MenuItem value={20}>BAMS</MenuItem>
                                <MenuItem value={30}>BHMS</MenuItem>
                                <MenuItem value={40}>BUMS</MenuItem>
                                <MenuItem value={50}>DHMS</MenuItem>
                              </Select>
                            )}
                          />
                          <small className="invalid">
                            {errors.qualification?.type === "required" && (
                              <p>Please select your qualification.</p>
                            )}
                          </small>
                        </FormControl>
                      </Grid>
                    )}
                  />

                  <Controller
                    control={control}
                    name="postgraduation"
                    render={({ field }) => (
                      <Grid item xs={12} md={6}>
                        <TextField
                          id="post-graduation"
                          label="Post Graduation"
                          fullWidth
                          autoComplete="PostGraduation"
                          variant="standard"
                        />
                      </Grid>
                    )}
                  />
                </Grid>

                <Grid container spacing={3}>
                  <Controller
                    control={control}
                    name="selectmcr"
                    render={({ field }) => (
                      <Grid item md={6}>
                        <FormControl variant="standard" sx={{ minWidth: 230 }}>
                          <InputLabel id="demo-simple-select-required-label">
                            Select MCR *
                          </InputLabel>
                          <Controller
                            name="selectmcr"
                            id="selectmcr"
                            defaultValue={""}
                            control={control}
                            render={({ field }) => (
                              <Select
                                labelId="demo-simple-select-required-label"
                                {...field}
                                {...register("selectmcr", { required: true })}
                              >
                                <MenuItem value="">
                                  <em>MCR Number</em>
                                </MenuItem>
                                <MenuItem value={10}>NMC Number</MenuItem>
                                <MenuItem value={20}>MMC Number</MenuItem>
                              </Select>
                            )}
                          />
                          <small className="invalid">
                            {errors.selectmcr?.type === "required" && (
                              <p>Please select your MCR Number.</p>
                            )}
                          </small>
                        </FormControl>
                      </Grid>
                    )}
                  />

                  <Controller
                    control={control}
                    name="mcrnumber"
                    render={({ field }) => (
                      <Grid item xs={12} md={6}>
                        <TextField
                          id="mcrnumber"
                          label="MCR Number"
                          required
                          fullWidth
                          autoComplete="mcrnumber"
                          variant="standard"
                          {...register("mcrnumber", {
                            required: true,
                            pattern: /^([2-9])(?!\1+$)\d{9}$/,
                            minLength: 10,
                            maxLength: 10,
                          })}
                        />
                        <small className="invalid">
                          {errors.mcrnumber?.type === "required" && (
                            <p>MCR number is required.</p>
                          )}
                        </small>
                        <small className="invalid">
                          {errors.mcrnumber?.type === "pattern" && (
                            <p>Invalid MCR number.</p>
                          )}
                        </small>
                        <small className="invalid">
                          {errors.mcrnumber?.type === "minLength" && (
                            <p>Please enter 10 digits of MCR number.</p>
                          )}
                        </small>
                        <small className="invalid">
                          {errors.mcrnumber?.type === "maxLength" && (
                            <p>MCR number should have 10 digits only.</p>
                          )}
                        </small>
                      </Grid>
                    )}
                  />
                </Grid>
              </Paper>
              <Copyright />
            </Container>
          </ThemeProvider>
        </Paper>
      </div>
    </>
  );
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <PersonalInfo />;
    case 1:
      return <ContactForm />;
    case 2:
      return <Report />;
    default:
      return "unknown step";
  }
}

const PatientRegi = () => {
  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      firstname: "",
      middlename: "",
      lastname: "",
      dateofbirth: "",
      emailId: "",
      mobilenumber: "",
      aadharnumber: "",
      maritalstatus: "",
      mcrnumber: "",
      height: "",
      weight: "",
      desease: "",
      edd: "",
      howmanychildren: "",
      currentmonth: "",
      address: "",
      city: "",
      state: "",
      postalcode: "",
      country: "",
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const handleNext = (data) => {
    console.log(data);
    if (activeStep == steps.length - 1) {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((data) => data.json())
        .then((res) => {
          console.log(res);
          setActiveStep(activeStep + 1);
        });
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div>
      <Header />
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};

          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleNext)}>
              {getStepContent(activeStep)}

              <Button
                className={classes.button}
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                back
              </Button>

              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                //  onClick={handleNext}
                type="submit"
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </form>
          </FormProvider>
        </>
      )}
    </div>
  );
};

export default PatientRegi;
