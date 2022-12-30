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
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import Stack from "@mui/material/Stack";
import Footer from "../../components/Footer/Footer";
import NativeSelect from "@mui/material/NativeSelect";
import Grid from "@mui/material/Grid";
import axios from "axios";

import "./NewBorn.css";

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
  return ["Baby Information", "Basic Details"];
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

const BabyInfo = () => {
  const {
    register,

    formState: { errors },
  } = useFormContext({
    mode: "onTouched",
  });
  console.log(errors);

  const { control } = useFormContext();

  const [date, setDate] = React.useState(dayjs("2014-08-18T21:11:54"));
  const handleChange = (newValue) => {
    setDate(newValue);
  };

  // const [myValue, setMyValue] = useState(null);

  // const onValueChange = (e) => {
  //   setMyValue(e.target.value);
  // };

  return (
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
          rules={{ required: "Mother name is required.", minLength: 2 }}
          render={({ field }) => (
            <Grid item xs={12} sm={6}>
              <TextField
                id="mothername"
                label="Mother Name"
                variant="standard"
                placeholder="Enter Your Mother Name"
                fullWidth
                margin="normal"
                {...field}
                error={Boolean(errors?.mothername)}
                helperText={errors.mothername?.message}
              />
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
          rules={{ required: "Father name is required.", minLength: 2 }}
          render={({ field }) => (
            <Grid item xs={12} sm={6}>
              <TextField
                id="fathername"
                label="Father Name"
                variant="standard"
                placeholder="Enter Your Mother Name"
                fullWidth
                margin="normal"
                {...field}
                error={Boolean(errors?.fathername)}
                helperText={errors.fathername?.message}
              />
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
          rules={{ required: "Father name is required." }}
          render={({ field }) => (
            <Grid item xs={6}>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                {...field}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                  {...register("value", { required: true })}
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                  {...register("value", { required: true })}
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                  {...register("value", { required: true })}
                />

                <small className="invalid">
                  {errors.value?.type === "required" && (
                    <p>Gender is required.</p>
                  )}
                </small>
              </RadioGroup>
            </Grid>
          )}
        />

        <Controller
          control={control}
          name="dateandtime"
          rules={{ required: "Birth date is required." }}
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
                      {...field}
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
          rules={{
            required: "This field is required.",
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
            </Grid>
          )}
        />
        <small className="invalid">
          {errors.weight?.type === "pattern" && (
            <p>Please enter correct weight.</p>
          )}
        </small>
        <small className="invalid">
          {errors.weight?.type === "minLength" && (
            <p>Please enter minimun 1 char.</p>
          )}
        </small>
        <small className="invalid">
          {errors.weight?.type === "maxLength" && (
            <p>Please enter maximum 3 char.</p>
          )}
        </small>

        <Controller
          control={control}
          name="apgarscore"
          rules={{ required: "This field is required." }}
          render={({ field }) => (
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Apgar Score
                </InputLabel>
                <NativeSelect
                  autoComplete="Apgar Score"
                  defaultValue=" "
                  inputProps={{
                    name: "apgarscore",
                    id: "uncontrolled-native",
                  }}
                  {...field}
                >
                  <option value=""></option>
                  <option value="1/5">1/5</option>
                  <option value="2/5">2/5</option>
                  <option value="3/5">3/5</option>
                  <option value="4/5">4/5</option>
                  <option value="5/5">5/5</option>
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
          rules={{ required: "This field is required." }}
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
const BabyDetails = () => {
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
            required: "Email id is required.",
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
                {errors.emailid?.type === "required" && (
                  <p>Email id is required.</p>
                )}
              </small>
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

      <Grid container spacing={3}>
          <Controller
            control={control}
            name="vaccination"
            rules={{ required: "State is required.", minLength: 2 }}
            render={({ field }) => (
              <Grid item xs={12} md={6}>
                <TextField
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
  );
};


function getStepContent(step) {
  switch (step) {
    case 0:
      return <BabyInfo />;
    case 1:
      return <BabyDetails />;
 
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

  const handleNext = (newborn) => {
    console.log(newborn);
    if (activeStep === steps.length - 1) {
      axios
        .post("http://localhost:3000/newbornregistration", newborn)
        .then((res) => {
          console.log(res);
          console.log(newborn);
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
                  Birth Registration is Successful.
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
