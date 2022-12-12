import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";

import './Doctor.css'


export default function PersonalInfo() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });
 
   let req;
   const onSubmit = (doctor,e) =>{
    req = {
      firstname:doctor.firstname,
      lastname:doctor.lastname,
      emailid:doctor.emailid,
      mobilenumber:doctor.mobilenumber,
      password:doctor.password

    }
    console.log(req,e);
   }

  const onError = (errors, e) => console.log(errors, e);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Personal Information
      </Typography>
      <form onSubmit={handleSubmit(onSubmit,onError)}>
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
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            {...register("lastname",{required:true,minLength:2})}
          />
          <small className="invalid">
            {errors.lastname?.type === "required" && (<p>Last name is required.</p>)}
          </small>
          <small className="invalid">
            {errors.lastname?.type === "minlength" && (<p>Please enter minimum 2 char.</p>)}
          </small>
        </Grid>
        
        {/* <Grid item xs={6}>
        <FormLabel id="demo-row-radio-buttons-group-label" >Gender</FormLabel>
      <RadioGroup 
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup> 
        </Grid> */}

        <Grid item xs={12} md={6}>
          <TextField
            required
            id="emailId"
            label="Email Id"
            fullWidth
            autoComplete="emailId"
            variant="standard"
            {...register("emailid",{
              required:true,
              pattern:/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
              minLength: 2
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
            id="password"
            label="password"
            fullWidth
            type="password"
            autoComplete="password"
            variant="standard"
            {...register("password",{required:true, pattern:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).*$/,minLength:8,maxLength:10})}
            />
            <small className="invalid">
              {errors.password?.type === "required" && (<p>Password is required.</p>)}
            </small>
            <small className="invalid">
              {errors.password?.type === "pattern" && (<p>Password must contain 1 uppercase, 1 lowercase, 1 number, and 1 special character.</p>)}
            </small>
            <small className="invalid">
              {errors.password?.type === "minLength" && (<p>Please enter minimum 8 char.</p>)}
            </small>
            <small className="invalid">
              {errors.password?.type === "maxLength" && (<p>Please enter maximum 10 char.</p>)}
            </small>
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
           <Button type="submit" variant="contained" color="primary">
            Next
           </Button>
    
        
      </form>
    </React.Fragment>
  );
}
