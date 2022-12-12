import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import { useForm } from "react-hook-form";

import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Controller } from "react-hook-form";

export default function BabyInfo() {

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const [date, setDate] = React.useState(dayjs('2014-08-18T21:11:54'));
  const handleChange = (newValue) => {
    setDate(newValue);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Baby Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="mothername"
            name="mothername"
            label="Mother name"
            fullWidth
            autoComplete="mother-name"
            variant="standard"
            {...register("mothername",{required:true,minLength:2})}
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
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="fathername"
            name="fathername"
            label="Father Name"
            fullWidth
            autoComplete="father-name"
            variant="standard"
            {...register("fathername",{required:true,minLength:2})}
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

        <Grid item xs={6}>
        <FormLabel id="demo-row-radio-buttons-group-label" >Gender</FormLabel>
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
                <span className="text-danger"> {errors.dateofbirthtime.message}</span>
              )}
            </div>
        </Grid>

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
            {errors.weight?.type === "required" && <p>Weight is required.</p>}
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
