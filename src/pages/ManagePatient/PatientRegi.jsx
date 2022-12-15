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
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";

// const useStyles = makeStyles((theme) => ({
//   button: {
//     marginRight: theme.spacing(1),
//   },
// }));

function getSteps() {
  return ["Basic information", "Patient Details", "Report"];
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
                    name="firstname"
                    render={({ field }) => (
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="firstname"
                          label="First name"
                          fullWidth
                          autoComplete="given-name"
                          variant="standard"
                          {...register("firstname", {
                            required: true,
                            minLength: 2,
                          })}
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
                    name="middlename"
                    render={({ field }) => (
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="middlename"
                          label="Middle name"
                          fullWidth
                          autoComplete="middle-name"
                          variant="standard"
                          {...register("middlename", {
                            required: true,
                            minLength: 2,
                          })}
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
                    name="lastname"
                    render={({ field }) => (
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="lastname"
                          label="Last name"
                          fullWidth
                          autoComplete="last-name"
                          variant="standard"
                          {...register("lastname", {
                            required: true,
                            minLength: 2,
                          })}
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
                    name="dateofbirth"
                    render={({ field }) => (
                      <Grid item xs={12} sm={6}>
                        <div className="form-group">
                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <Stack spacing={3}>
                              <DesktopDatePicker
                                {...register("dateofbirth", {
                                  required: "DOB is Required",
                                })}
                                onChange={(newValue) => {
                                  console.log(newValue);
                                  setSelectedDate(newValue);
                                }}
                                label="Birth Date *"
                                value={selectedDate}
                                maxDate={new Date()}
                                renderInput={(params) => (
                                  <TextField {...params} />
                                )}
                              />
                            </Stack>
                          </LocalizationProvider>

                          {errors.dateofbirth && (
                            <span className="text-danger">
                              {" "}
                              {errors.dateofbirth.message}
                            </span>
                          )}
                        </div>
                      </Grid>
                    )}
                  />
                </Grid>

                <Grid container spacing={3}>
                  <Controller
                    control={control}
                    name="emailid"
                    render={({ field }) => (
                      <Grid item xs={12} md={6}>
                        <TextField
                          id="emailid"
                          label="Email Id"
                          fullWidth
                          autoComplete="emailId"
                          variant="standard"
                          {...register("emailid", {
                            pattern:
                              /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
                            minLength: 2,
                          })}
                        />

                        <small className="invalid">
                          {errors.emailid?.type === "pattern" && (
                            <p>Invalid Email Id.</p>
                          )}
                        </small>
                        <small className="invalid">
                          {errors.emailid?.type === "minLength" && (
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

                <Grid container spacing={3}>
                  <Controller
                    control={control}
                    name="aadharnumber"
                    render={({ field }) => (
                      <Grid item xs={12} md={6}>
                        <TextField
                          required
                          id="aadharnumber"
                          label="Aadhar Number"
                          fullWidth
                          autoComplete="Aadhar Number"
                          variant="standard"
                          {...register("aadharnumber", {
                            required: true,
                            pattern: /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/,
                            minLength: 12,
                            maxLength: 12,
                          })}
                        />

                        <small className="invalid">
                          {errors.aadharnumber?.type === "required" && (
                            <p>Aadhar number is required.</p>
                          )}
                        </small>
                        <small className="invalid">
                          {errors.aadharnumber?.type === "pattern" && (
                            <p>Invalid Aadhar number.</p>
                          )}
                        </small>
                        <small className="invalid">
                          {errors.aadharnumber?.type === "minLength" && (
                            <p>Please enter 12 digits of aadhar number.</p>
                          )}
                        </small>
                        <small className="invalid">
                          {errors.aadharnumber?.type === "maxLength" && (
                            <p>Aadhar number should have 12 digits only.</p>
                          )}
                        </small>
                      </Grid>
                    )}
                  />
                  <Controller
                    control={control}
                    name="maritalstatus"
                    render={({ field }) => (
                      <Grid item xs={12} md={6}>
                        <FormControl variant="standard" sx={{ minWidth: 230 }}>
                          <InputLabel id="demo-simple-select-required-label">
                            Marital Status{" "}
                          </InputLabel>
                          <Controller
                            name="maritalstatus"
                            id="maritalstatus"
                            defaultValue={""}
                            required
                            control={control}
                            render={({ field }) => (
                              <Select
                                labelId="demo-simple-select-required-label"
                                {...field}
                                {...register("maritalstatus", {
                                  required: true,
                                })}
                              >
                                <MenuItem value="">
                                  <em>Marital Status</em>
                                </MenuItem>
                                <MenuItem value={40}>Married</MenuItem>
                                <MenuItem value={50}>Unmarried</MenuItem>
                              </Select>
                            )}
                          />
                          <small className="invalid">
                            {errors.maritalstatus?.type === "required" && (
                              <p>Please select your marital status.</p>
                            )}
                          </small>
                        </FormControl>
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
    </div>
  );
};

const PatientDetail = () => {
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

  const [selectedDate, setSelectedDate] = React.useState();
  
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
                    name="height"
                    render={({ field }) => (
                      <Grid item xs={12} md={6}>
                        <TextField
                          id="height"
                          label="Height"
                          required
                          fullWidth
                          autoComplete="height"
                          variant="standard"
                          {...register("height", {
                            required: true,
                            pattern: "^d{0,1}0[1-9]|1[0-2]$",
                            maxLength: 5,
                          })}
                        />
                        <small className="invalid">
                          {errors.height?.type === "required" && (
                            <p>Height is required.</p>
                          )}
                        </small>
                        <small className="invalid">
                          {errors.height?.type === "pattern" && (
                            <p>Invalid Height.</p>
                          )}
                        </small>
                        <small className="invalid">
                          {errors.height?.type === "maxLength" && (
                            <p>Height is invalid.</p>
                          )}
                        </small>
                      </Grid>
                    )}
                  />

                  <Controller
                    control={control}
                    name="weight"
                    render={({ field }) => (
                      <Grid item xs={12} md={6}>
                        <TextField
                          required
                          id="weight"
                          label="Weight"
                          fullWidth
                          autoComplete="weight"
                          variant="standard"
                          {...register("weight", {
                            required: true,
                            pattern: "^(0|[1-9]d*)(,d+)?$",
                            minLength: 1,
                            maxLength: 3,
                          })}
                        />

                        <small className="invalid">
                          {errors.weight?.type === "required" && (
                            <p>Weight is required.</p>
                          )}
                        </small>
                        <small className="invalid">
                          {errors.weight?.type === "pattern" && (
                            <p>Invalid weight.</p>
                          )}
                        </small>
                        <small className="invalid">
                          {errors.weight?.type === "minLength" && (
                            <p>Please enter valid weight.</p>
                          )}
                        </small>
                        <small className="invalid">
                          {errors.weight?.type === "maxLength" && (
                            <p>weight should be valid.</p>
                          )}
                        </small>
                      </Grid>
                    )}
                  />
                </Grid>

                <Grid container spacing={3}>
                  <Controller
                    control={control}
                    name="desease"
                    render={({ field }) => (
                      <Grid item xs={12} md={6}>
                        <TextField
                          id="desease"
                          label="Desease"
                          fullWidth
                          autoComplete="desease"
                          variant="standard"
                        />
                      </Grid>
                    )}
                  />

                  <Controller
                    control={control}
                    name="edd"
                    render={({ field }) => (
                      <Grid item xs={12} sm={6}>
                        <div className="form-group">
                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <Stack spacing={3}>
                              <DesktopDatePicker
                                {...register("edd", {
                                  required: "EDD is Required",
                                })}
                                onChange={(newValue) => {
                                  console.log(newValue);
                                  setSelectedDate(newValue);
                                }}
                                label="Estimated Due Date *"
                                value={selectedDate}
                               
                                renderInput={(params) => (
                                  <TextField {...params} />
                                )}
                              />
                            </Stack>
                          </LocalizationProvider>

                          {errors.dateofbirth && (
                            <span className="text-danger">
                              {" "}
                              {errors.dateofbirth.message}
                            </span>
                          )}
                        </div>
                      </Grid>
                    )}
                  />
                </Grid>

                <Grid container spacing={3}>
                  <Controller
                    control={control}
                    name="howmanychildren"
                    render={({ field }) => (
                      <Grid item xs={12} md={6}>
                        <TextField
                          required
                          id="howmanychildren"
                          label="How Many Children"
                          fullWidth
                          autoComplete="howmanychildren"
                          variant="standard"
                          {...register("howmanychildren", {
                            required: true,
                          })}
                        />
                        <small className="invalid">
                          {errors.howmanychildren?.type === "required" && (
                            <p>Field is Required.</p>
                          )}
                        </small>
                      </Grid>
                    )}
                  />

                  <Controller
                    control={control}
                    name="currentmonth"
                    render={({ field }) => (
                      <Grid item xs={12} md={6}>
                        <FormControl variant="standard" sx={{ minWidth: 230 }}>
                          <InputLabel id="demo-simple-select-required-label">
                            Current Month
                          </InputLabel>
                          <Controller
                            name="currentmonth"
                            id="currentmonth"
                            required
                            defaultValue={""}
                            control={control}
                            render={({ field }) => (
                              <Select
                                labelId="demo-simple-select-required-label"
                                {...field}
                                {...register("currentmonth", {
                                  required: true,
                                })}
                              >
                                <MenuItem value="">
                                  <em>Current Month</em>
                                </MenuItem>
                                <MenuItem value={10}>First</MenuItem>
                                <MenuItem value={20}>Second</MenuItem>
                                <MenuItem value={30}>Third</MenuItem>
                                <MenuItem value={40}>Fourth</MenuItem>
                                <MenuItem value={50}>Fifth</MenuItem>
                                <MenuItem value={60}>Sixth</MenuItem>
                                <MenuItem value={70}>Seventh</MenuItem>
                                <MenuItem value={80}>Eighth</MenuItem>
                                <MenuItem value={90}>ninth</MenuItem>
                              </Select>
                            )}
                          />
                          <small className="invalid">
                            {errors.currentmonth?.type === "required" && (
                              <p>Please select your month.</p>
                            )}
                          </small>
                        </FormControl>
                      </Grid>
                    )}
                  />
                </Grid>

                <Grid container spacing={3}>
                  <Controller
                    control={control}
                    name="address"
                    render={({ field }) => (
                      <Grid item xs={12}>
                        <TextField
                          required
                          id="address"
                          name="address"
                          label="Address"
                          fullWidth
                          autoComplete="address"
                          variant="standard"
                          {...register("address", { required: true })}
                        />
                        <small className="invalid">
                          {errors.address?.type === "required" && (
                            <p>Address is required.</p>
                          )}
                        </small>
                      </Grid>
                    )}
                  />
                </Grid>

                <Grid container spacing={3}>
                  <Controller
                    control={control}
                    name="city"
                    render={({ field }) => (
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="city"
                          name="city"
                          label="City"
                          fullWidth
                          autoComplete="City"
                          variant="standard"
                          {...register("city", { required: true })}
                        />
                        <small className="invalid">
                          {errors.city?.type === "required" && (
                            <p>City is required.</p>
                          )}
                        </small>
                      </Grid>
                    )}
                  />

                  <Controller
                    control={control}
                    name="state"
                    render={({ field }) => (
                      <Grid item xs={12} sm={6}>
                        <TextField
                          id="state"
                          required
                          label="State/Province/Region"
                          fullWidth
                          variant="standard"
                          {...register("state", { required: true })}
                        />
                        <small className="invalid">
                          {errors.state?.type === "required" && (
                            <p>State is required.</p>
                          )}
                        </small>
                      </Grid>
                    )}
                  />
                </Grid>

                <Grid container spacing={3}>
                  <Controller
                    control={control}
                    name="postalcode"
                    render={({ field }) => (
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="postalcode"
                          label="Zip / Postal code"
                          fullWidth
                          autoComplete="postalcode"
                          variant="standard"
                          {...register("postalcode", {
                            required: true,
                            pattern: /^([1-9])(?!\1+$)\d{5}$/,
                            minLength: 6,
                            maxLength: 6,
                          })}
                        />
                        <small className="invalid">
                          {errors.postalcode?.type === "required" && (
                            <p>Postal code is required.</p>
                          )}
                        </small>
                        <small className="invalid">
                          {errors.postalcode?.type === "pattern" && (
                            <p>Invalid Postal code.</p>
                          )}
                        </small>
                        <small className="invalid">
                          {errors.postalcode?.type === "minLength" && (
                            <p>Please enter 6 digits of postal code.</p>
                          )}
                        </small>
                        <small className="invalid">
                          {errors.postalcode?.type === "maxLength" && (
                            <p>Postal code should have 6 digits only.</p>
                          )}
                        </small>
                      </Grid>
                    )}
                  />

                  <Controller
                    control={control}
                    name="country"
                    render={({ field }) => (
                      <Grid item xs={12} sm={6}>
                        <FormControl variant="standard" sx={{ minWidth: 230 }}>
                          <InputLabel id="demo-simple-select-required-label">
                            Country
                          </InputLabel>
                          <Controller
                            name="country"
                            id="country"
                            required
                            defaultValue={""}
                            control={control}
                            render={({ field }) => (
                              <Select
                                labelId="demo-simple-select-required-label"
                                {...field}
                                {...register("country", {
                                  required: true,
                                })}
                              >
                                <MenuItem value="">
                                  <em>Country</em>
                                </MenuItem>
                                <MenuItem value={10}>Country1</MenuItem>
                                <MenuItem value={20}>Country2</MenuItem>
                                <MenuItem value={30}>Country3</MenuItem>
                                <MenuItem value={40}>Country4</MenuItem>
                                <MenuItem value={50}>Country5</MenuItem>
                                <MenuItem value={60}>Country6</MenuItem>
                                <MenuItem value={70}>Country7</MenuItem>
                                <MenuItem value={80}>Country8</MenuItem>
                                <MenuItem value={90}>Country9</MenuItem>
                              </Select>
                            )}
                          />
                          <small className="invalid">
                            {errors.country?.type === "required" && (
                              <p>Please select your Country.</p>
                            )}
                          </small>
                        </FormControl>
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
      return <PatientDetail />;
    case 2:
      return <Report />;
    default:
      return "unknown step";
  }
}

const PatientRegi = () => {
  // const classes = useStyles();
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
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                back
              </Button>

              <Button
                // className={classes.button}
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
