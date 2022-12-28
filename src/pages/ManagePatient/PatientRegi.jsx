import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Header from "../../components/NavBar/Header";
import Link from "@mui/material/Link";
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

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Patient Information", "Patient Details", "Report"];
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
  const [selectedDate, setSelectedDate] = React.useState();

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
            rules={{ required: "Middle name is required.", minLength: 2 }}
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
            rules={{ required: "Email Id is required.",   pattern: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
            minLength: 2,}}
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
            rules={{ required: "Mobile Number is required.",   pattern: /^([2-9])(?!\1+$)\d{9}$/,
            minLength: 10,
            maxLength: 10,}}
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
            
            </Grid>
          )}
        />
      </Grid>
    </Container>
  );
};
const PatientDetail = () => {
  const {

    formState: { errors },
  } = useFormContext({
    mode: "onTouched",
  });
  console.log(errors);

  const { control } = useFormContext();

  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Typography component="h1" variant="h4" align="center">
        NewBorn Registration
      </Typography>
      <Typography variant="h6" gutterBottom>
        NewBorn Details
      </Typography>

      <Grid container spacing={3}>
        <Controller
          control={control}
          name="address"
          rules={{ required: "Address is required.", minLength: 2 }}
          render={({ field }) => (
            <Grid item xs={12}>
              <TextField
                id="address"
                label="Address"
                variant="standard"
                placeholder="Enter Your Address"
                fullWidth
                margin="normal"
                {...field}
                error={Boolean(errors?.address)}
                helperText={errors.address?.message}
              />
              <small className="invalid">
                {errors.address?.type === "minLength" && (
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
          name="city"
          rules={{ required: "city is required.", minLength: 2 }}
          render={({ field }) => (
            <Grid item xs={12} sm={6}>
              <TextField
                id="city"
                label="City Name"
                variant="standard"
                placeholder="Enter Your City Name"
                fullWidth
                margin="normal"
                {...field}
                error={Boolean(errors?.city)}
                helperText={errors.city?.message}
              />
              <small className="invalid">
                {errors.city?.type === "minLength" && (
                  <p>Please enter minimun 2 char.</p>
                )}
              </small>
            </Grid>
          )}
        />
        <Controller
          control={control}
          name="state"
          rules={{ required: "State is required.", minLength: 2 }}
          render={({ field }) => (
            <Grid item xs={12} sm={6}>
              <TextField
                id="state"
                label="State Name"
                variant="standard"
                placeholder="Enter Your state Name"
                fullWidth
                margin="normal"
                {...field}
                error={Boolean(errors?.state)}
                helperText={errors.state?.message}
              />
              <small className="invalid">
                {errors.state?.type === "minLength" && (
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
          name="postalcode"
          rules={{
            required: "Postal code is required.",
            pattern: /^([1-9])(?!\1+$)\d{5}$/,
            minLength: 6,
            maxLength: 6,
          }}
          render={({ field }) => (
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="postalcode"
                label="Zip / Postal code"
                fullWidth
                autoComplete="postalcode"
                variant="standard"
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
          rules={{ required: "State is required.", minLength: 2 }}
          render={({ field }) => (
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="country"
                name="country"
                label="Country"
                fullWidth
                autoComplete="country"
                variant="standard"
                {...field}
              />
              <small className="invalid">
                {errors.country?.type === "required" && (
                  <p>Country is required.</p>
                )}
              </small>
              <small className="invalid">
                {errors.country?.type === "minLength" && (
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
          name="hospitalname"
          rules={{ required: "Hospital name is required.", minLength: 2 }}
          render={({ field }) => (
            <Grid item xs={12} md={6}>
              <TextField
                id="hospitalname"
                label="Hospital Name"
                fullWidth
                autoComplete="hospitalname"
                variant="standard"
                {...field}
              />
              <small className="invalid">
                {errors.hospitalname?.type === "required" && (
                  <p>Hospital Name is required.</p>
                )}
              </small>
              <small className="invalid">
                {errors.hospitalname?.type === "minLength" && (
                  <p>Please enter minimun 2 char.</p>
                )}
              </small>
            </Grid>
          )}
        />
        <Controller
          control={control}
          name="doctorname"
          rules={{ required: "Doctor name is required.", minLength: 2 }}
          render={({ field }) => (
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="doctorname"
                label="Doctor Name"
                fullWidth
                autoComplete="doctorname"
                variant="standard"
                {...field}
              />
              <small className="invalid">
                {errors.doctorname?.type === "required" && (
                  <p>Doctor Name is required.</p>
                )}
              </small>
              <small className="invalid">
                {errors.doctorname?.type === "minLength" && (
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
          name="mobilenumber"
          rules={{
            required: "State is required.",
            pattern: /^([2-9])(?!\1+$)\d{9}$/,
            minLength: 10,
            maxLength: 10,
          }}
          render={({ field }) => (
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="mobilenumber"
                label="Mobile Number"
                fullWidth
                autoComplete="Mobile Number"
                variant="standard"
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

        <Controller
          control={control}
          name="emailid"
          rules={{
            required: "State is required.",
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
      </Grid>

     
    </Container>
  );
};
const Report = () => {
  const {

    formState: { errors },
  } = useFormContext({
    mode: "onTouched",
  });
  console.log(errors);

  const { control } = useFormContext();

  return (
    <>
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Typography component="h1" variant="h4" align="center">
        NewBorn Registration
      </Typography>
      <Typography variant="h6" gutterBottom>
        NewBorn Details
      </Typography>

    <Grid container spacing={3}>
        <Controller
          control={control}
          name="vaccination"
          rules={{ required: "State is required.", minLength: 2 }}
          render={({ field }) => (
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="vaccination"
                name="vaccination"
                label="Vaccination"
                fullWidth
                autoComplete="vaccination"
                variant="standard"
                {...field}
              />
              <small className="invalid">
                {errors.vaccination?.type === "required" && (
                  <p>Vaccination is required.</p>
                )}
              </small>
              <small className="invalid">
                {errors.vaccination?.type === "minLength" && (
                  <p>Please enter minimun 2 char.</p>
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
      return <PatientDetail />;
    case 2:
      return <Report />;
    default:
      return "unknown step";
  }
}

const PatientRegi = () => {

  const paperStyle = { padding: "10px 10px", width: 600, margin: "10px auto" };

  function formatDate(timestamp) {
    let x = new Date(timestamp);
    let DD = x.getDate();
    let MM = x.getMonth() + 1;
    let YYYY = x.getFullYear();
    return YYYY + "/" + MM + "/" + DD;
  }
  
      const [selectedDate, setSelectedDate] = React.useState();

  // const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      firstname: "",
      middlename: "",
      lastname: "",
      dateofbirth: formatDate(selectedDate),
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

  const handleNext = (patient) => {
    console.log(patient);
    if (activeStep === steps.length - 1) {
      axios
        .post("http://localhost:3000/patientregi", patient)
        .then((res) => {
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
