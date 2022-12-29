import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Header from "../../components/NavBar/Header";
import Link from "@mui/material/Link";
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
  return ["Basic Information", "Doctor Details"];
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

const PersonalInfo = () => {
  const {
    register,

    formState: { errors },
  } = useFormContext({
    mode: "onTouched",
  });
  console.log(errors);

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
            name="firstname"
            rules={{ required: "First name is required.", minLength: 2 }}
            render={({ field }) => (
              <Grid item xs={12} sm={6}>
                <TextField
                  id="firstname"
                  label="First name"
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
                  {...field}
                  error={Boolean(errors?.firstname)}
                  helperText={errors.firstname?.message}
                />

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
            name="lastname"
            rules={{ required: "Last name is required.", minLength: 2 }}
            render={({ field }) => (
              <Grid item xs={12} sm={6}>
                <TextField
                  id="lastname"
                  name="lastname"
                  label="Last name"
                  fullWidth
                  autoComplete="family-name"
                  variant="standard"
                  {...field}
                  error={Boolean(errors?.lastname)}
                  helperText={errors.lastname?.message}
                />
                <small className="invalid">
                  {errors.lastname?.type === "minLength" && (
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
            rules={{
              required: "Email Id is required.",
              pattern: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
              minLength: 2,
            }}
            render={({ field }) => (
              <Grid item xs={12} md={6}>
                <TextField
                  id="emailid"
                  label="Email Id"
                  fullWidth
                  autoComplete="emailId"
                  variant="standard"
                  {...field}
                  error={Boolean(errors?.emailid)}
                  helperText={errors.emailid?.message}
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
  } = useFormContext({
    mode: "onTouched",
  });
  console.log(errors);

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
                    defaultValue=" "
                    inputProps={{
                      name: "qualification",
                      id: "uncontrolled-native",
                    }}
                    {...field}
                    {...register("qualification", {
                      required: true,
                    })}
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
                  {...register("postgraduation", {
                    minLength: 2,
                  })}
                />
                <small className="invalid">
                  {errors.postgraduation?.type === "minLength" && (
                    <p>Please write correct Post Graduation</p>
                  )}
                </small>
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
                    defaultValue=" "
                    inputProps={{
                      name: "selectmcr",
                      id: "uncontrolled-native",
                    }}
                    {...field}
                    {...register("selectmcr", {
                      required: true,
                    })}
                  >
                    <option value=""></option>
                    <option value="NMC Number">NMC Number</option>
                    <option value="NMC Number">MMC Number</option>
                  </NativeSelect>
                </FormControl>
                <small className="invalid">
                  {errors.selectmcr?.type === "required" && (
                    <p>Select MCR, It's required</p>
                  )}
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
    default:
      return "unknown step";
  }
}

const DoctorRegi = () => {
  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      mothername: "",
      fathername: "",
      gender: "",
      dateandtime: "",
      weight: "",
      apgarscore: "",
      delivery: "",
      address: "",
      city: "",
      state: "",
      postalcode: "",
      country: "",
      hospitalname: "",
      doctorname: "",
      phonenumber: "",
      emailid: "",
      vaccination: "",
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = (docregi) => {
    console.log(docregi);
    if (activeStep === steps.length - 1) {
      axios.post("http://localhost:3000/DoctorRegi", docregi).then((res) => {
        console.log(res);
        console.log(docregi);
        setActiveStep(activeStep + 1);
      });
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const paperStyle = { padding: "10px 10px", width: 600, margin: "10px auto" };

  return (
    <>
      <Header />
      <div style={{ marginTop: "10vh", marginBottom: "10vh" }}>
        <Paper elevation={20} style={paperStyle}>
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
                  Doctor Registration is Successful.
                </Typography>
              ) : (
                <>
                  <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(handleNext)}>
                      {getStepContent(activeStep)}

                      <Button
                        // className={classes.button}
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
            </Paper>
            <Copyright />
          </Container>
        </Paper>
      </div>
      <Footer />
    </>
  );
};

export default DoctorRegi;
