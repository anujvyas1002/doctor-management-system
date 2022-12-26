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

  const [myValue, setMyValue] = useState(null);

  const onValueChange = (e) => {
    setMyValue(e.target.value);
  };

  return (
    <>
      <Controller
        control={control}
        name="mothername"
        rules={{ required: "Mother name is required.", minLength: 2 }}
        render={({ field }) => (
          <TextField
            id="mothername"
            label="Mother Name"
            variant="outlined"
            placeholder="Enter Your Mother Name"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.mothername)}
            helperText={errors.mothername?.message}
          />
        )}
      />
      <small className="invalid">
        {errors.mothername?.type === "minLength" && (
          <p>Please enter minimun 2 char.</p>
        )}
      </small>

      <Controller
        control={control}
        name="fathername"
        rules={{ required: "This field is required.", minLength: 2 }}
        render={({ field }) => (
          <TextField
            id="fathername"
            label="Father Name"
            variant="outlined"
            placeholder="Enter Your Father Name"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.fathername)}
            helperText={errors.fathername?.message}
          />
        )}
      />
      <small className="invalid">
        {errors.fathername?.type === "minLength" && (
          <p>Please enter minimun 2 char.</p>
        )}
      </small>

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
                {...field}
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
          name="dateandtime"
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
          <TextField
            id="apgarscore"
            label="Apgar Score"
            variant="standard"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.apgarscore)}
            helperText={errors.apgarscore?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="nickName"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="nick-name"
            label="Nick Name"
            variant="outlined"
            placeholder="Enter Your Nick Name"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.nickName)}
            helperText={errors.nickName?.message}
          />
        )}
      />
    </>
  );
};
const BabyDetails = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="emailAddress"
        render={({ field }) => (
          <TextField
            id="email"
            label="E-mail"
            variant="outlined"
            placeholder="Enter Your E-mail Address"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="phoneNumber"
        render={({ field }) => (
          <TextField
            id="phone-number"
            label="Phone Number"
            variant="outlined"
            placeholder="Enter Your Phone Number"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="alternatePhone"
        render={({ field }) => (
          <TextField
            id="alternate-phone"
            label="Alternate Phone"
            variant="outlined"
            placeholder="Enter Your Alternate Phone"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );
};
const DoctorRegi = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="address1"
        render={({ field }) => (
          <TextField
            id="address1"
            label="Address 1"
            variant="outlined"
            placeholder="Enter Your Address 1"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="address2"
        render={({ field }) => (
          <TextField
            id="address2"
            label="Address 2"
            variant="outlined"
            placeholder="Enter Your Address 2"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="country"
        render={({ field }) => (
          <TextField
            id="country"
            label="Country"
            variant="outlined"
            placeholder="Enter Your Country Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
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
      return <DoctorRegi />;
    default:
      return "unknown step";
  }
}

const LinaerStepper = () => {
  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      nickName: "",
      emailAddress: "",
      phoneNumber: "",
      alternatePhone: "",
      address1: "",
      address2: "",
      country: "",
      cardNumber: "",
      cardMonth: "",
      cardYear: "",
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  // const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();
  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };
  const isStepFalied = () => {
    return Boolean(Object.keys(methods.formState.errors).length);
  };
  // const isStepSkipped = (step) => {
  //   return skippedSteps.includes(step);
  // };

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
      // setSkippedSteps(
      //   skippedSteps.filter((skipItem) => skipItem !== activeStep)
      // );
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    // if (!isStepSkipped(activeStep)) {
    //   setSkippedSteps([...skippedSteps, activeStep]);
    // }
    setActiveStep(activeStep + 1);
  };

  // const onSubmit = (data) => {
  //   console.log(data);
  // };
  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
                optional
              </Typography>
            );
          }
          if (isStepFalied() && activeStep == index) {
            labelProps.error = true;
          }
          // if (isStepSkipped(index)) {
          //   stepProps.completed = false;
          // }
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
              {isStepOptional(activeStep) && (
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                >
                  skip
                </Button>
              )}
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
    </div>
  );
};

export default LinaerStepper;
