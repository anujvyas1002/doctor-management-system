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
import './Doctor.css';


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
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const paperStyle = { padding: "10px 10px", width: 600, margin: "10px auto" };

  const { control } = useFormContext();
  return (
    <div>
   
      <div style={{ marginTop: "5vh", marginBottom: "5vh" }}>
        <Paper elevation={20} style={paperStyle}>
          <ThemeProvider theme={theme}>
            <CssBaseline />

            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
            <Typography component="h1" variant="h4" align="center">
                  Doctor Registration
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
                            pattern:
                              /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
                            minLength: 2,
                          })}
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
                      />
                      <small className="invalid">
                        {errors.password?.type === "required" && (
                          <p>Password is required.</p>
                        )}
                      </small>
                      <small className="invalid">
                        {errors.password?.type === "pattern" && (
                          <p>
                            Password must contain 1 uppercase, 1 lowercase, 1
                            number, and 1 special character.
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
    <Header/>
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
                          {...register("qualification", { required: true })}
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

const DoctorRegi = () => {
  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      emailid: "",
      mobilenumber: "",
      qualification: "",
      postgraduation: "",
      selectmcr: "",
      mcrnumber: "",
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
      <Header/>
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

export default DoctorRegi;
