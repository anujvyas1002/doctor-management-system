import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Header from "../../components/NavBar/Header";
// import Report from "../ManageNewBorn/Report";
import Link from "@mui/material/Link";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Stack from "@mui/material/Stack";
import Footer from "../../components/Footer/Footer";
import NativeSelect from "@mui/material/NativeSelect";
import Grid from "@mui/material/Grid";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import axios from "axios";

import "./Patient.css";

import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";
// import FormLabel from "@mui/material/FormLabel";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Patient Information", "Patient Details"];
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
    formState: { errors },
  } = useFormContext({
    mode: "onTouched",
  });
  console.log(errors);

  const { control } = useFormContext();


  const [selectedDate, setSelectedDate] = React.useState();

  //const [roles, setRoles] = useState({});
  function formatDate(timestamp) {
    let x = new Date(timestamp);
    let DD = x.getDate();
    let MM = x.getMonth() + 1;
    let YYYY = x.getFullYear();
    return YYYY + "/" + MM + "/" + DD;
  }

  return (
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
          rules={{ required: "First name is required.", minLength: 2 }}
          render={({ field }) => (
            <Grid item xs={12} sm={6}>
              <TextField
                id="firstname"
                label="First Name"
                variant="standard"
                placeholder="Enter Your First Name"
                fullWidth
                margin="normal"
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
          name="middlename"
          rules={{ required: "Middle name is required.", minLength: 2 }}
          render={({ field }) => (
            <Grid item xs={12} sm={6}>
              <TextField
                id="middlename"
                label="Middle Name"
                variant="standard"
                placeholder="Enter Your Middle Name"
                fullWidth
                margin="normal"
                {...field}
                error={Boolean(errors?.middlename)}
                helperText={errors.middlename?.message}
              />
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
          rules={{ required: "Last name is required.", minLength: 2 }}
          render={({ field }) => (
            <Grid item xs={12} sm={6}>
              <TextField
                id="lastname"
                label="Last name"
                fullWidth
                autoComplete="last-name"
                variant="standard"
                {...field}
                error={Boolean(errors?.lastname)}
                helperText={errors.lastname?.message}
              />

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
          rules={{ required: "Date of birth is required.", minLength: 2 }}
          render={({ field }) => (
            <Grid item xs={12} sm={6}>
              <div className="form-group">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Stack spacing={3}>
                    <DesktopDatePicker
                      onChange={(newValue) => {
                        console.log(newValue);
                        setSelectedDate(newValue);
                      }}
                      label="Birth Date *"
                      value={selectedDate}
                      maxDate={new Date()}
                      renderInput={(params) => <TextField {...params} />}
                      {...field}
                      error={Boolean(errors?.dateofbirth)}
                      helperText={errors.dateofbirth?.message}
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
                {errors.emailid?.type === "pattern" && <p>Invalid Email Id.</p>}
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
          rules={{
            required: "Mobile Number is required.",
            pattern: /^([2-9])(?!\1+$)\d{9}$/,
            minLength: 10,
            maxLength: 10,
          }}
          render={({ field }) => (
            <Grid item xs={12} md={6}>
              <TextField
                id="mobilenumber"
                label="Mobile Number"
                fullWidth
                autoComplete="Mobile Number"
                variant="standard"
                {...field}
                error={Boolean(errors?.mobilenumber)}
                helperText={errors.mobilenumber?.message}
              />

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
          name="delivery"
          rules={{ required: "Please select delivery type." }}
          render={({ field }) => (
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Delivery
                </InputLabel>
                <NativeSelect
                  autoComplete="Delivery"
                  defaultValue=" "
                  inputProps={{
                    name: "delivery",
                    id: "uncontrolled-native",
                  }}
                  {...field}
                  error={Boolean(errors?.delivery)}
                  helperText={errors.delivery?.message}
                >
                  <option value=""></option>
                  <option value="Natural Birth">Natural Birth</option>
                  <option value="Vaginal Birth">Vaginal Birth</option>
                </NativeSelect>
              </FormControl>
              <small className="invalid">
                {errors.delivery?.type === "required" && (
                  <p>Please select delivery type.</p>
                )}
              </small>
            </Grid>
          )}
        />
      </Grid>
    </Container>
  );
};
const PatientDetail = () => {
  const {
    register,

    formState: { errors },
  } = useFormContext({
    mode: "onTouched",
  });
  console.log(errors);

  const { control } = useFormContext();

  const [selectedDate, setSelectedDate] = React.useState();

  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Patient Details
      </Typography>
      <Grid container spacing={3}>
        <Controller
          control={control}
          name="height"
          rules={{
            required: "Height is required.",
            pattern: "^d{0,1}0[1-9]|1[0-2]$",
            maxLength: 5,
          }}
          render={({ field }) => (
            <Grid item xs={12} sm={6}>
              <TextField
                id="height"
                label="Height"
                variant="standard"
                placeholder="Enter Your Height"
                fullWidth
                margin="normal"
                {...field}
                error={Boolean(errors?.height)}
                helperText={errors.height?.message}
              />
              <small className="invalid">
                {errors.height?.type === "pattern" && <p>Invalid Height.</p>}
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
          rules={{
            required: "Weight is required.",
            pattern: "^(0|[1-9]d*)(,d+)?$",
            minLength: 1,
            maxLength: 3,
          }}
          render={({ field }) => (
            <Grid item xs={12} sm={6}>
              <TextField
                id="weight"
                label="Weight"
                variant="standard"
                placeholder="Enter Your Weight"
                fullWidth
                margin="normal"
                {...field}
                error={Boolean(errors?.weight)}
                helperText={errors.weight?.message}
              />
              <small className="invalid">
                {errors.weight?.type === "pattern" && <p>Invalid weight.</p>}
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
          rules={{ minLength: 2 }}
          render={({ field }) => (
            <Grid item xs={12} sm={6}>
              <TextField
                id="desease"
                label="Desease"
                fullWidth
                autoComplete="desease"
                variant="standard"
                {...field}
                error={Boolean(errors?.desease)}
                helperText={errors.desease?.message}
              />

              <small className="invalid">
                {errors.desease?.type === "minLength" && (
                  <p>Please enter minimun 2 char.</p>
                )}
              </small>
            </Grid>
          )}
        />

        <Controller
          control={control}
          name="edd"
          rules={{ required: "EDD is Required" ,}}
          render={({ field }) => (
            <Grid item xs={12} sm={6}>
              <div className="form-group">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Stack spacing={3}>
                    <DesktopDatePicker
                      onChange={(newValue) => {
                        console.log(newValue);
                        setSelectedDate(newValue);
                      }}
                      label="Estimated Due Date *"
                      value={selectedDate}
                      renderInput={(params) => <TextField {...params} />}
                      {...field}
                      error={Boolean(errors?.edd)}
                      helperText={errors.edd?.message}
                    />
                      <small className="invalid">
                {errors.edd?.type === "required" && (
                  <p>Please enter valid EDD.</p>
                )}
              </small>
             
                  </Stack>
                  
                </LocalizationProvider>
              </div>
            </Grid>
          )}
        />
      </Grid>

      <Grid container spacing={3}>
        <Controller
          control={control}
          name="howmanychildren"
          rules={{ required: "This feild is required", maxLength: "1" }}
          render={({ field }) => (
            <Grid item xs={12} md={6}>
              <TextField
                id="howmanychildren"
                label="How Many Children"
                fullWidth
                autoComplete="howmanychildren"
                variant="standard"
                {...field}
                error={Boolean(errors?.howmanychildren)}
                helperText={errors.howmanychildren?.message}
              />
              <small className="invalid">
                {errors.howmanychildren?.type === "maxLength" && (
                  <p>Please give proper count.</p>
                )}
              </small>
            </Grid>
          )}
        />

        <Controller
          control={control}
          name="currentmonth"
          rules={{ required: "This feild is required" }}
          render={({ field }) => (
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Current Month
                </InputLabel>
                <NativeSelect
                  autoComplete="Current Month"
                  defaultValue=" "
                  inputProps={{
                    name: "currentmonth",
                    id: "uncontrolled-native",
                  }}
                  {...field}
                  error={Boolean(errors?.currentmonth)}
                  helperText={errors.currentmonth?.message}
                >
                  <option value=""></option>
                  <option value="First">First</option>
                  <option value="Second">Second</option>
                  <option value="Third">Third</option>
                  <option value="Fourth">Fourth</option>
                  <option value="Fifth">Fifth</option>
                  <option value="Sixth">Sixth</option>
                  <option value="Seventh">Seventh</option>
                  <option value="Eighth">Eighth</option>
                  <option value="Ninth">Ninth</option>
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

    
    </Container>
  );
};


function getStepContent(step) {
  switch (step) {
    case 0:
      return <PersonalInfo />;
    case 1:
      return <PatientDetail />;
 
    default:
      return "unknown step";
  }
}

const PatientRegi = () => {
  const classes = useStyles();


  const [selectedDate, setSelectedDate] = React.useState();

  //const [roles, setRoles] = useState({});
  function formatDate(timestamp) {
    let x = new Date(timestamp);
    let DD = x.getDate();
    let MM = x.getMonth() + 1;
    let YYYY = x.getFullYear();
    return YYYY + "/" + MM + "/" + DD;
  }
 
  const methods = useForm({
    defaultValues: {
      firstname: "",
      middlename: "",
      lastname: "",
      dateofbirth:formatDate(selectedDate),
      emailId: "",
      mobilenumber: "",
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
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  
  const handleNext = (patient) => {
    console.log(patient);
    if (activeStep === steps.length - 1) {
      axios.post("http://localhost:3000/patientregi", patient).then((res) => {
        console.log(res);
        console.log(patient);
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
               Pregnancy Registration Successful. Detailed Calender link shared with Mother.
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


export default PatientRegi;