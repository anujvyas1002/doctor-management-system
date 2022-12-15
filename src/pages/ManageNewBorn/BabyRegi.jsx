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

const BabyInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const paperStyle = { padding: "10px 10px", width: 600, margin: "10px auto" };

  const { control } = useFormContext();

  const [date, setDate] = React.useState(dayjs("2014-08-18T21:11:54"));
  const handleChange = (newValue) => {
    setDate(newValue);
  };

  return (
    <div>
      <div style={{ marginTop: "5vh", marginBottom: "5vh" }}>
        <Paper elevation={20} style={paperStyle}>
          <ThemeProvider theme={theme}>
            <CssBaseline />

            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
              <Typography component="h1" variant="h4" align="center">
                NewBorn Registration
              </Typography>
              <Paper
                variant="outlined"
                sx={{ my: { xs: 3, md: 2 }, p: { xs: 2, md: 2 } }}
              >
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
                        <FormLabel id="demo-row-radio-buttons-group-label">
                          Gender
                        </FormLabel>
                        <RadioGroup
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
                                renderInput={(params) => (
                                  <TextField {...params} />
                                )}
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

                  <Controller
                    control={control}
                    name="apgarscore"
                    render={({ field }) => (
                      <Grid item xs={12} md={6}>
                        <FormControl variant="standard" sx={{ minWidth: 230 }}>
                          <InputLabel id="demo-simple-select-required-label">
                            Apgar Score
                          </InputLabel>
                          <Controller
                            name="apgarscore"
                            id="apgarsocre"
                            required
                            defaultValue={""}
                            control={control}
                            render={({ field }) => (
                              <Select
                                labelId="demo-simple-select-required-label"
                                {...field}
                                {...register("apgarscore", {
                                  required: true,
                                })}
                              >
                                <MenuItem value="">
                                  <em>Apgar Score</em>
                                </MenuItem>
                                <MenuItem value={10}>1/5</MenuItem>
                                <MenuItem value={20}>2/5</MenuItem>
                                <MenuItem value={30}>3/5</MenuItem>
                                <MenuItem value={40}>4/5</MenuItem>
                                <MenuItem value={50}>5/5</MenuItem>
                              </Select>
                            )}
                          />
                          <small className="invalid">
                            {errors.apgarscore?.type === "required" && (
                              <p>Please select baby's apgar score.</p>
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
                    name="delivery"
                    render={({ field }) => (
                      <Grid item xs={12} md={6}>
                        <FormControl variant="standard" sx={{ minWidth: 230 }}>
                          <InputLabel id="demo-simple-select-required-label">
                            Delivery
                          </InputLabel>
                          <Controller
                            name="delivery"
                            id="delivery"
                            required
                            defaultValue={""}
                            control={control}
                            render={({ field }) => (
                              <Select
                                labelId="demo-simple-select-required-label"
                                {...field}
                                {...register("delivery", {
                                  required: true,
                                })}
                              >
                                <MenuItem value="">
                                  <em>Delivery Type</em>
                                </MenuItem>
                                <MenuItem value={10}>Natural Birth</MenuItem>
                                <MenuItem value={20}>Vaginal Birth</MenuItem>
                              </Select>
                            )}
                          />
                          <small className="invalid">
                            {errors.delivery?.type === "required" && (
                              <p>Please select delivery type.</p>
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

const BabyDetails = () => {
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
                        />
                      </Grid>
                    )}
                  />

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
                        />
                      </Grid>
                    )}
                  />
                </Grid>

                <Grid container spacing={3}>
                  <Controller
                    control={control}
                    name="state"
                    render={({ field }) => (
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="state"
                          name="state"
                          label="State/Province/Region"
                          fullWidth
                          variant="standard"
                        />
                      </Grid>
                    )}
                  />

                  <Controller
                    control={control}
                    name="zip"
                    render={({ field }) => (
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="zip"
                          name="zip"
                          label="Zip / Postal code"
                          fullWidth
                          autoComplete="postal-code"
                          variant="standard"
                        />
                      </Grid>
                    )}
                  />
                </Grid>

                <Grid container spacing={3}>
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
                        />
                      </Grid>
                    )}
                  />

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
                        />
                      </Grid>
                    )}
                  />
                </Grid>

                <Grid container spacing={3}>
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
                        />
                      </Grid>
                    )}
                  />

                  <Controller
                    control={control}
                    name="phonenumber"
                    render={({ field }) => (
                      <Grid item xs={12} md={6}>
                        <TextField
                          required
                          id="phonenumber"
                          label="Phone Number"
                          fullWidth
                          autoComplete="Phone Number"
                          variant="standard"
                        />
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
                          id="emailid"
                          label="Email Id"
                          fullWidth
                          autoComplete="emailid"
                          variant="standard"
                        />
                      </Grid>
                    )}
                  />

                  <Controller
                    control={control}
                    name="vaccination"
                    render={({ field }) => (
                      <Grid item xs={12} md={6}>
                        <TextField
                          required
                          id="vaccination"
                          label="Vaccination Name"
                          fullWidth
                          autoComplete="vaccination"
                          variant="standard"
                        />
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
      city:"",
      state:"",
      zipcode:"",
      country:"",
      hospitalname:"",
      doctorname:"",
      phonenumber:"",
      emailid:"",
      vaccination:""
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

export default DoctorRegi;
