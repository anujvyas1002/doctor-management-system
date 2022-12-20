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
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import Stack from "@mui/material/Stack";
import Footer from "../../components/Footer/Footer";
import NativeSelect from "@mui/material/NativeSelect";

import "./NewBorn.css";

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
  return ["Baby Information", "Basic Details", "Report"];
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

const BabyInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const { control } = useFormContext();

  const [date, setDate] = React.useState(dayjs("2014-08-18T21:11:54"));
  const handleChange = (newValue) => {
    setDate(newValue);
  };

  const [myValue, setMyValue] = useState(null);

  const onValueChange = (e) => {
    setMyValue(e.target.value);
  };

  return (
    <div>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Typography component="h1" variant="h4" align="center">
          NewBorn Registration
        </Typography>

        <Typography variant="h6" gutterBottom>
          Baby Information
        </Typography>
        <Grid container spacing={3}>
          <Controller
            control={control}
            name="mothername"
            render={({ field }) => (
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="mothername"
                  name="mothername"
                  label="Mother name"
                  fullWidth
                  autoComplete="mother-name"
                  variant="standard"
                  {...register("mothername", {
                    required: true,
                    minLength: 2,
                  })}
                />
                <small className="invalid">
                  {errors.mothername?.type === "required" && (
                    <p>Mother name is required.</p>
                  )}
                </small>
                <small className="invalid">
                  {errors.mothername?.type === "minLength" && (
                    <p>Please enter minimun 2 char.</p>
                  )}
                </small>
              </Grid>
            )}
          />

          <Controller
            control={control}
            name="fathername"
            render={({ field }) => (
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="fathername"
                  name="fathername"
                  label="Father Name"
                  fullWidth
                  autoComplete="father-name"
                  variant="standard"
                  {...register("fathername", {
                    required: true,
                    minLength: 2,
                  })}
                />
                <small className="invalid">
                  {errors.fathername?.type === "required" && (
                    <p>Father name is required.</p>
                  )}
                </small>
                <small className="invalid">
                  {errors.fathername?.type === "minLength" && (
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
            name="gender"
            render={({ field }) => (
              <Grid item xs={6}>
                <RadioGroup
                  required
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                    {...register("gender", { required: true })}
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                    {...register("gender", { required: true })}
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                    {...register("gender", { required: true })}
                  />

                  <small className="invalid">
                    {errors.gender?.type === "required" && (
                      <p>Gender is required.</p>
                    )}
                  </small>
                </RadioGroup>
              </Grid>
            )}
          />

          <Controller
            control={control}
            required
            name="datetime"
            render={({ field }) => (
              <Grid item xs={12} sm={6}>
                <div className="form-group">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Stack spacing={3}>
                      <DateTimePicker
                        label="Date & Time picker"
                        value={date}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Stack>
                  </LocalizationProvider>

                  {errors.dateofbirthtime && (
                    <span className="text-danger">
                      {" "}
                      {errors.dateofbirthtime.message}
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

          <Controller
            control={control}
            name="apgarscore"
            render={({ field }) => (
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Apgar Score
                  </InputLabel>
                  <NativeSelect
                    autoComplete="Apgar Score"
                    required
                    defaultValue=" "
                    inputProps={{
                      name: "apgarscore",
                      id: "uncontrolled-native",
                    }}
                  >
                    <option value=""></option>
                    <option value={10}>1/5</option>
                    <option value={20}>2/5</option>
                    <option value={30}>3/5</option>
                    <option value={40}>4/5</option>
                    <option value={50}>5/5</option>
                  </NativeSelect>
                </FormControl>
                <small className="invalid">
                  {errors.apgarscore?.type === "required" && (
                    <p>Please select baby's apgar score..</p>
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
            render={({ field }) => (
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Delivery
                  </InputLabel>
                  <NativeSelect
                    autoComplete="Delivery"
                    required
                    defaultValue=" "
                    inputProps={{
                      name: "delivery",
                      id: "uncontrolled-native",
                    }}
                  >
                    <option value=""></option>
                    <option value={10}>Natural Birth</option>
                    <option value={20}>Vaginal Birth</option>
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
    </div>
  );
};

const BabyDetails = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const { control } = useFormContext();
  return (
    <>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          NewBorn Details
        </Typography>

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
                  {...register("address", {
                    required: true,
                    minLength: 2,
                  })}
                />
                <small className="invalid">
                  {errors.address?.type === "required" && (
                    <p>Address is required.</p>
                  )}
                </small>
                <small className="invalid">
                  {errors.mothername?.type === "minLength" && (
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
            render={({ field }) => (
              <Grid item xs={12} sm={6}>
               <TextField
                  required
                  id="city"
                  name="city"
                  label="City"
                  fullWidth
                  autoComplete="city"
                  variant="standard"
                  {...register("city", {
                    required: true,
                    minLength: 2,
                  })}
                />
                <small className="invalid">
                  {errors.city?.type === "required" && (
                    <p>City is required.</p>
                  )}
                </small>
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
            render={({ field }) => (
              <Grid item xs={12} sm={6}>
               <TextField
                  required
                  id="state"
                  name="state"
                  label="State"
                  fullWidth
                  autoComplete="state"
                  variant="standard"
                  {...register("state", {
                    required: true,
                    minLength: 2,
                  })}
                />
                <small className="invalid">
                  {errors.state?.type === "required" && (
                    <p>State is required.</p>
                  )}
                </small>
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
            name="zipcode"
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
                <TextField
                  required
                  id="country"
                  name="country"
                  label="Country"
                  fullWidth
                  autoComplete="country"
                  variant="standard"
                  {...register("country", {
                    required: true,
                    minLength: 2,
                  })}
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
            render={({ field }) => (
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  id="hospitalname"
                  label="Hospital Name"
                  fullWidth
                  autoComplete="hospitalname"
                  variant="standard"
                  {...register("hospitalname", {
                    required: true,
                    minLength: 2,
                  })}
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
            render={({ field }) => (
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  id="doctorname"
                  label="Doctor Name"
                  fullWidth
                  autoComplete="doctorname"
                  variant="standard"
                  {...register("doctorname", {
                    required: true,
                    minLength: 2,
                  })}
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
            name="phonenumber"
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
        </Grid>

        <Grid container spacing={3}>
          <Controller
            control={control}
            name="vaccination"
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
                  {...register("vaccination", {
                    required: true,
                    minLength: 2,
                  })}
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
      return <BabyInfo />;
    case 1:
      return <BabyDetails />;
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
      zipcode: "",
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

  const handleNext = (data) => {
    console.log(data);
    if (activeStep === steps.length - 1) {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((data) => data.json())
        .then((res) => {
          console.log(res);
          console.log(data);
          setActiveStep(activeStep + 1);
        });
    } else {
      setActiveStep(activeStep + 1);
    }
   };

  // const isStepOptional = (step) => {
  //   return step === 1 || step === 2;
  // };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };


  const paperStyle = { padding: "10px 10px", width: 600, margin: "10px auto" };

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
                  <Typography variant="h3" align="center">
                    Thank You
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
          </ThemeProvider>
        </Paper>
      </div>
      <Footer />
    </>
  );
};

export default DoctorRegi;
