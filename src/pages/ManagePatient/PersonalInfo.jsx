import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useForm } from "react-hook-form";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Controller } from "react-hook-form";

export default function PersonalInfo() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const [selectedDate, setSelectedDate] = React.useState();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Personal Information
      </Typography>
      <Grid container spacing={3}>
       <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            {...register("firstname",{required:true, minLength:2})}
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

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="middlename"
            label="Middle name"
            fullWidth
            autoComplete="middle-name"
            variant="standard"
            {...register("middlename",{required:true, minLength:2})}
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

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastname"
            label="Last name"
            fullWidth
            autoComplete="last-name"
            variant="standard"
            {...register("lastname",{required:true, minLength:2})}
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

        <Grid item xs={12} sm={6}>
        <div className="form-group">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                
                <Stack spacing={3}>
                  <DesktopDatePicker
                    {...register("dateofbirth", { required: "DOB is Required" })}
                    onChange={(newValue) => {
                      console.log(newValue)
                      setSelectedDate(newValue);
                    }}
                    label="Birth Date *"
                    value={selectedDate}
                    maxDate={new Date()}
                    renderInput={(params) => <TextField {...params} />}
                  />
                  
                </Stack>
              </LocalizationProvider>

              {errors.dateofbirth && (
                <span className="text-danger"> {errors.dateofbirth.message}</span>
              )}
            </div>
        </Grid>
        <Grid item xs={12} md={6}>
        <TextField
           
            id="emailId"
            label="Email Id"
            fullWidth
            autoComplete="emailId"
            variant="standard"
            {...register("emailid",{
             
              pattern:/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
              minLength: 2
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

        <Grid item xs={12} md={6}>
        <TextField
            required
            id="mobilenumber"
            label="Mobile Number"
            fullWidth
            autoComplete="Mobile Number"
            variant="standard"
            {...register("mobilenumber",{
              required:true,
              pattern:/^([2-9])(?!\1+$)\d{9}$/,
              minLength:10,
              maxLength:10
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
        <Grid item xs={12} md={6}>
        <TextField
            required
            id="aadharnumber"
            label="Aadhar Number"
            fullWidth
            autoComplete="Aadhar Number"
            variant="standard"
            {...register("aadharnumber",{
              required:true,
              pattern: /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/,
              minLength:12,
              maxLength:12
              })}
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
        <Grid item xs={12} md={6}>
        <FormControl variant="standard" sx={{minWidth: 230 }}>
        <InputLabel id="demo-simple-select-required-label">Marital Status </InputLabel>
                <Controller
                  name="maritalstatus"
                  id="maritalstatus"
                  defaultValue={""}
                  required
                  control={control}
                  render={({ field }) => (
                    <Select
                    labelId="demo-simple-select-required-label"
                      {...field}
                      {...register("maritalstatus", { required: true })}
                    >
                      <MenuItem value="">
            <em>Marital Status</em>
            </MenuItem>
             <MenuItem value={40}>Married</MenuItem>
             <MenuItem value={50}>Unmarried</MenuItem>
                    </Select>
                  )}
                />
                <small className="invalid">
                  {errors.maritalstatus?.type === "required" && (
                    <p>Please select your marital status.</p>
                  )}
                </small>
        </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            checked
            control={
              <Checkbox color="secondary" name="saveInformation" value="yes" />
            }
            label="Use this information for report generation"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
