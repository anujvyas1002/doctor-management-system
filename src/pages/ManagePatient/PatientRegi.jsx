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
import "./Patient.css";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Stack from "@mui/material/Stack";
import NativeSelect from "@mui/material/NativeSelect";

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

import axios from "axios";

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
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const { control } = useFormContext();
  const [selectedDate, setSelectedDate] = React.useState();

  return (
    <div>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Typography component="h1" variant="h4" align="center">
          Patient Registration
        </Typography>

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
                  {...field}
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
                  {...field}
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
                        renderInput={(params) => <TextField {...params} />}
                        {...field}
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
                    pattern: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
                    minLength: 2,
                  })}
                  {...field}
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
                  {...field}
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
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Marital Status
                  </InputLabel>
                  <NativeSelect
                    autoComplete="Marital Status"
                    required
                    defaultValue=" "
                    inputProps={{
                      name: "maritalstatus",
                      id: "uncontrolled-native",
                    }}
                    {...field}
                  >
                    <option value=""></option>
                    <option value={20}>Married</option>
                    <option value={30}>Unmarried</option>
                  </NativeSelect>
                </FormControl>
                <small className="invalid">
                  {errors.maritalstatus?.type === "required" && (
                    <p>Marital Status is required.</p>
                  )}
                </small>
              </Grid>
            )}
          />
        </Grid>
      </Container>
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


  // const handleQualification = (event) => {
  //   setGraduation(event.target.value);
  // };

  const { control } = useFormContext();

  const [selectedDate, setSelectedDate] = React.useState();

  return (
    <>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 2 }, p: { xs: 2, md: 2 } }}
        >
          <Typography variant="h6" gutterBottom>
           Patient Details
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
                    {...field}
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
                    {...field}
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
                    {...field}
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
                          renderInput={(params) => <TextField {...params} />}
                          {...field}
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
                    {...field}
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
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel
                      variant="standard"
                      htmlFor="uncontrolled-native"
                    >
                      Current Month
                    </InputLabel>
                    <NativeSelect
                      autoComplete="Current Month"
                      required
                      defaultValue=" "
                      inputProps={{
                        name: "currentmonth",
                        id: "uncontrolled-native",
                      }}
                      {...field}
                    >
                      <option value=""></option>
                      <option value={10}>First</option>
                      <option value={20}>Second</option>
                      <option value={30}>Third</option>
                      <option value={40}>Fourth</option>
                      <option value={50}>Fifth</option>
                      <option value={60}>Sixth</option>
                      <option value={70}>Seventh</option>
                      <option value={80}>Eighth</option>
                      <option value={90}>ninth</option>
                    </NativeSelect>
                  </FormControl>
                  <small className="invalid">
                    {errors.currentmonth?.type === "required" && (
                      <p>Current Month is required.</p>
                    )}
                  </small>
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
                    {...field}
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
                    {...field}
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
                    {...field}
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
                    {...field}
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
                  <FormControl fullWidth>
                    <InputLabel
                      variant="standard"
                      htmlFor="uncontrolled-native"
                    >
                      Country
                    </InputLabel>
                    <NativeSelect
                      autoComplete="Country"
                      required
                      defaultValue=" "
                      inputProps={{
                        name: "country",
                        id: "uncontrolled-native",
                      }}
                      {...field}
                    >
                      <option value="">
                        <em>Country</em>
                      </option>
                      <option value={10}>Country1</option>
                      <option value={20}>Country2</option>
                      <option value={30}>Country3</option>
                      <option value={40}>Country4</option>
                      <option value={50}>Country5</option>
                      <option value={60}>Country6</option>
                      <option value={70}>Country7</option>
                      <option value={80}>Country8</option>
                      <option value={90}>Country9</option>
                    </NativeSelect>
                  </FormControl>
                  <small className="invalid">
                    {errors.country?.type === "required" && (
                      <p>Country is required.</p>
                    )}
                  </small>
                </Grid>
              )}
            />
          </Grid>
        </Paper>
      </Container>
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
  const paperStyle = { padding: "10px 10px", width: 600, margin: "10px auto" };

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
      // mcrnumber: "",
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

  const handleNext = (patient) => {
    console.log(patient);
    if (activeStep === steps.length - 1) {
    axios.post("http://localhost:3000/patientregi",patient)
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
                  <Typography variant="h4" align="center">
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

export default PatientRegi;
