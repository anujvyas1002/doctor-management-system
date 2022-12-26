import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Header from "../../components/NavBar/Header";
import Report from "../ManageNewBorn/Report";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Footer from "../../components/Footer/Footer";
import "./Doctor.css";
import NativeSelect from "@mui/material/NativeSelect";
import axios from "axios";

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
  return ["Basic information", "Doctor Information", "Report"];
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
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const { control } = useFormContext();
  return (
    <div>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Typography component="h1" variant="h4" align="center">
          Doctor Registration Form
        </Typography>

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
                  {...register("firstname", {
                    required: true,
                    minLength: 2,
                    
                  })}
                  {...field}
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
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  fullWidth
                  autoComplete="family-name"
                  variant="standard"
                  {...register("lastname", {
                    required: true,
                    minLength: 2,
                  })}
                  {...field}
                />
                <small className="invalid">
                  {errors.lastname?.type === "required" && (
                    <p>Last name is required.</p>
                  )}
                </small>
                <small className="invalid">
                  {errors.lastname?.type === "minlength" && (
                    <p>Please enter minimum 2 char.</p>
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
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  id="emailId"
                  label="Email Id"
                  fullWidth
                  autoComplete="emailId"
                  variant="standard"
                  {...register("emailid", {
                    required: true,
                    pattern: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
                    minLength: 2,
                  })}
                  {...field}
                />
                <small className="invalid">
                  {errors.emailid?.type === "required" && (
                    <p>Email id is required.</p>
                  )}
                </small>
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
                  {...field}
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
            <Grid item xs={12} md={6} style={{ marginBottom: "15px" }}>
              <TextField
                required
                id="password"
                label="password"
                fullWidth
                type="password"
                autoComplete="password"
                variant="standard"
                {...register("password", {
                  required: true,
                  pattern:
                    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).*$/,
                  minLength: 8,
                  maxLength: 10,
                })}
                {...field}
              />
              <small className="invalid">
                {errors.password?.type === "required" && (
                  <p>Password is required.</p>
                )}
              </small>
              <small className="invalid">
                {errors.password?.type === "pattern" && (
                  <p>
                    Password must contain 1 uppercase, 1 lowercase, 1 number,
                    and 1 special character.
                  </p>
                )}
              </small>
              <small className="invalid">
                {errors.password?.type === "minLength" && (
                  <p>Please enter minimum 8 char.</p>
                )}
              </small>
              <small className="invalid">
                {errors.password?.type === "maxLength" && (
                  <p>Please enter maximum 10 char.</p>
                )}
              </small>
            </Grid>
          )}
        />
      </Container>
    </div>
  );
};

const ContactForm = () => {
  const {
    register,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  })  

  // const [graduation, setGraduation] = useState("");

  // const handleQualification = (event) => {
  //   setGraduation(event.target.value);
  // };

  const { control } = useFormContext();
  return (
    <>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Doctor Details
        </Typography>
        <Grid container spacing={3}>
          <Controller
            name="qualification"
            id="qualification"
            defaultValue={""}
            control={control}
            render={({ field }) => (
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Qualification *
                  </InputLabel>
                  <NativeSelect
                    autoComplete="qualification"
                    required
                    defaultValue=" "
                    inputProps={{
                      name: "qualification",
                      id: "uncontrolled-native",
                    }}
                    {...field}
                  >
                    <option value=""></option>
                    <option value="MBBS">MBBS</option>
                    <option value="BAMS">BAMS</option>
                    <option value="BHMS">BHMS</option>
                    <option value="BUMS">BUMS</option>
                    <option value="DHMS">DHMS</option>
                  </NativeSelect>
                  
                </FormControl>
                <small className="invalid">
                  {errors.qualification?.type === "required" && (
                    <p>Select Qualification,it is required </p>
                  )}
                </small>
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
                  {...field}
                />
              </Grid>
            )}
            
          />
        </Grid>

        <Grid container spacing={3}>
          <Controller
            name="selectmcr"
            id="selectmcr"
            defaultValue={""}
            control={control}
            render={({ field }) => (
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Select MCR *
                  </InputLabel>
                  <NativeSelect
                    autoComplete="Select mcr"
                    required
                    defaultValue=" "
                    inputProps={{
                      name: "selectmcr",
                      id: "uncontrolled-native",
                    }}
                    {...field}
                  >
                    <option value=""></option>
                    <option value="NMC Number">NMC Number</option>
                    <option value="NMC Number">MMC Number</option>
                  </NativeSelect>
                </FormControl>
                <small className="invalid">
                  {errors.selectmcr?.type === "required" && <p>Select MCR, It's required</p>}
                </small>
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
                  {...field}
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
      </Container>
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

const DoctorRegi = (e) => {
  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      firstName:"",
      lastName:"",
      emailid:"",
      mobilenumber:"",
      password:"",
      qualification:"",
      postgraduation:"",
      selectmcr:"",
      mcrnumber:"",
    },
  });

  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  // const isStepOptional = (step) => {
  //   return step === 1 || step === 2;
  //  handleNext(methods);
  // };
  
  

  const paperStyle = { padding: "10px 10px", width: 600, margin: "10px auto" };


  const handleNext = (doctor) => {
    console.log(doctor); 
    if (activeStep === steps.length - 1) {
     axios.post(`http://localhost:3000/doctorregi`,doctor)
      // .then((doctor) => doctor.json())
        .then((res) => {
          console.log(res);
          console.log(res.data);
          setActiveStep(activeStep + 1);
        });
    } else {
       setActiveStep(activeStep + 1);
      // console.log("error");
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      <Header />
      <div style={{ marginTop: "10vh", marginBottom: "10vh" }}>
        <Paper elevation={20} style={paperStyle}>
          <ThemeProvider theme={theme}>
            <CssBaseline />

            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
              <Paper
                variant="outlined"
                sx={{ my: { xs: 3, md: 2 }, p: { xs: 2, md: 2 } }}
              >
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
                  <Typography variant="h6" align="center">
                   Your Registration is Successful. Your Login Credentials Shared with you on xxx@gmail.com
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
                          className={classes.button}
                          variant="contained"
                          color="primary"
                            // onClick={handleNext}
                          type="submit"
                        >
                          {activeStep === steps.length - 1 ? "Finish" : "Next"}
                        </Button>
                      </form>
                    </FormProvider>
                  </>
                )}
              </Paper>
              <Copyright />
            </Container>
          </ThemeProvider>
        </Paper>
      </div>
      <Footer />
    </>
  );
};

export default DoctorRegi;
