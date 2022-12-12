import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";

export default function DoctorDetails() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const [graduation, setGraduation] = useState("");
  const [country, setCountry] = useState([]);

  const handleQualification = (event) => {
    setGraduation(event.target.value);
  };

  useEffect(() => {
    const getcountry = async () => {
      const res = await fetch("country.json");
      const getcon = await res.json();
      console.log(getcon);
      setCountry(await getcon);
    };
    getcountry();
  }, []);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Doctor Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item md={6}>
          <FormControl variant="standard" sx={{ minWidth: 230 }}>
            <InputLabel id="demo-simple-select-required-label">
              Qualification *
            </InputLabel>
            <Controller
              name="qualification"
              id="qualification"
              defaultValue={""}
              control={control}
              render={({ field }) => (
                <Select
                  labelId="demo-simple-select-required-label"
                  {...field}
                  {...register("qualification", { required: true })}
                >
                  <MenuItem value="">
                    <em>Graduation</em>
                  </MenuItem>
                  <MenuItem value={10}>MBBS</MenuItem>
                  <MenuItem value={20}>BAMS</MenuItem>
                  <MenuItem value={30}>BHMS</MenuItem>
                  <MenuItem value={40}>BUMS</MenuItem>
                  <MenuItem value={50}>DHMS</MenuItem>
                </Select>
              )}
            />
            <small className="invalid">
              {errors.qualification?.type === "required" && (
                <p>Please select your qualification.</p>
              )}
            </small>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            id="post-graduation"
            label="Post Graduation"
            fullWidth
            autoComplete="PostGraduation"
            variant="standard"
          />
        </Grid>
        <Grid item md={6}>
          <FormControl variant="standard" sx={{ minWidth: 230 }}>
            <InputLabel id="demo-simple-select-required-label">
             Select MCR *
            </InputLabel>
            <Controller
              name="selectmcr"
              id="selectmcr"
              defaultValue={""}
              control={control}
              render={({ field }) => (
                <Select
                  labelId="demo-simple-select-required-label"
                  {...field}
                  {...register("selectmcr", { required: true })}
                >
                  <MenuItem value="">
                    <em>MCR Number</em>
                  </MenuItem>
                  <MenuItem value={10}>NMC Number</MenuItem>
                  <MenuItem value={20}>MMC Number</MenuItem>
                </Select>
              )}
            />
            <small className="invalid">
              {errors.selectmcr?.type === "required" && (
                <p>Please select your MCR Number.</p>
              )}
            </small>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            id="mcrnumber"
            label="MCR Number"
            required
            fullWidth
            autoComplete="mcrnumber"
            variant="standard"
            {...register("mcrnumber", {
              required: true,
              pattern: /^([2-9])(?!\1+$)\d{9}$/,
              minLength: 10,
              maxLength: 10,
            })}
          />
          <small className="invalid">
            {errors.mcrnumber?.type === "required" && (
              <p>MCR number is required.</p>
            )}
          </small>
          <small className="invalid">
            {errors.mcrnumber?.type === "pattern" && <p>Invalid MCR number.</p>}
          </small>
          <small className="invalid">
            {errors.mcrnumber?.type === "minLength" && (
              <p>Please enter 10 digits of MCR number.</p>
            )}
          </small>
          <small className="invalid">
            {errors.mcrnumber?.type === "maxLength" && (
              <p>MCR number should have 10 digits only.</p>
            )}
          </small>
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox checked color="secondary" name="saveCard" value="yes" />
            }
            label="Remember these details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
