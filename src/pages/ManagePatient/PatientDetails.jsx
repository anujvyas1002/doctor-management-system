import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useForm } from "react-hook-form";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Controller } from "react-hook-form";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

export default function PatientDetails() {
  const {
    register,
    control,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Patient Details
      </Typography>
      <Grid container spacing={3}>
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
          />
          <small className="invalid">
            {errors.height?.type === "required" && <p>Height is required.</p>}
          </small>
          <small className="invalid">
            {errors.height?.type === "pattern" && <p>Invalid Height.</p>}
          </small>
          <small className="invalid">
            {errors.height?.type === "maxLength" && <p>Height is invalid.</p>}
          </small>
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
          <TextField
            id="desease"
            label="Desease"
            fullWidth
            autoComplete="desease"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="edd"
            label="
            EDD(Estimated Due Date)
            "
            fullWidth
            autoComplete="edd"
            variant="standard"
          />
        </Grid>

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
          />
          <small className="invalid">
            {errors.howmanychildren?.type === "required" && (
              <p>Field is Required.</p>
            )}
          </small>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl variant="standard" sx={{ minWidth: 230 }}>
            <InputLabel id="demo-simple-select-required-label">
              Current Month
            </InputLabel>
            <Controller
              name="currentmonth"
              id="currentmonth"
              required
              defaultValue={""}
              control={control}
              render={({ field }) => (
                <Select
                  labelId="demo-simple-select-required-label"
                  {...field}
                  {...register("currentmonth", {
                    required: true,
                  })}
                >
                  <MenuItem value="">
                    <em>Current Month</em>
                  </MenuItem>
                  <MenuItem value={10}>First</MenuItem>
                  <MenuItem value={20}>Second</MenuItem>
                  <MenuItem value={30}>Third</MenuItem>
                  <MenuItem value={40}>Fourth</MenuItem>
                  <MenuItem value={50}>Fifth</MenuItem>
                  <MenuItem value={60}>Sixth</MenuItem>
                  <MenuItem value={70}>Seventh</MenuItem>
                  <MenuItem value={80}>Eighth</MenuItem>
                  <MenuItem value={90}>ninth</MenuItem>
                </Select>
              )}
            />
            <small className="invalid">
              {errors.currentmonth?.type === "required" && (
                <p>Please select your month.</p>
              )}
            </small>
          </FormControl>
        </Grid>

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
          />
          <small className="invalid">
            {errors.address?.type === "required" && <p>Address is required.</p>}
          </small>
        </Grid>
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
          />
          <small className="invalid">
            {errors.city?.type === "required" && <p>City is required.</p>}
          </small>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
            {...register("state", { required: true })}
          />
          <small className="invalid">
            {errors.state?.type === "required" && <p>State is required.</p>}
          </small>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="postalcode"
            label="Zip / Postal code"
            fullWidth
            autoComplete="postalcode"
            variant="standard"
            {...register("postalcode",{
              required:true,
              pattern:/^([1-9])(?!\1+$)\d{5}$/,
              minLength:6,
              maxLength:6 
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
        <Grid item xs={12} sm={6}>
        <FormControl variant="standard" sx={{ minWidth: 230 }}>
            <InputLabel id="demo-simple-select-required-label">
             Country
            </InputLabel>
            <Controller
              name="country"
              id="country"
              required
              defaultValue={""}
              control={control}
              render={({ field }) => (
                <Select
                  labelId="demo-simple-select-required-label"
                  {...field}
                  {...register("country", {
                    required: true,
                  })}
                >
                  <MenuItem value="">
                    <em>Country</em>
                  </MenuItem>
                  <MenuItem value={10}>Country1</MenuItem>
                  <MenuItem value={20}>Country2</MenuItem>
                  <MenuItem value={30}>Country3</MenuItem>
                  <MenuItem value={40}>Country4</MenuItem>
                  <MenuItem value={50}>Country5</MenuItem>
                  <MenuItem value={60}>Country6</MenuItem>
                  <MenuItem value={70}>Country7</MenuItem>
                  <MenuItem value={80}>Country8</MenuItem>
                  <MenuItem value={90}>Country9</MenuItem>
                </Select>
              )}
            />
            <small className="invalid">
              {errors.country?.type === "required" && (
                <p>Please select your Country.</p>
              )}
            </small>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox checked color="secondary" name="saveCard" value="yes" />
            }
            label="Remember these details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
