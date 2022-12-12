import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Header from "../../components/NavBar/Header";
import Footer from "../../components/Footer/Footer";

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

export default function DoctorLogin() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });
  const paperStyle = { padding: "10px 10px", width: 600, margin: "10px auto" };

  const navigate = useNavigate();
  const handleLoginToDashboard = ()=>{
    navigate("/Dashboard");
  }

  return (
    <>
      <Header/>
      <div style={{ marginTop: "25vh", marginBottom: "17vh" }}>
        <Paper elevation={20} style={paperStyle}>
          <ThemeProvider theme={theme}>
            <CssBaseline />

            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
              <Paper
                variant="outlined"
                sx={{ my: { xs: 3, md: 2 }, p: { xs: 2, md: 2 } }}
              >
                <Typography component="h1" variant="h4" align="center">
                  Doctor Login
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <InputLabel
                      id="demo-simple-select-required-label"
                      align="left"
                    >
                      Username *
                    </InputLabel>
                    <TextField
                      id="emailId"
                      label="abc@gmail.com"
                      fullWidth
                      autoComplete="emailId"
                      variant="standard"
                      {...register("emailid", {
                        required: true,
                        pattern: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
                        minLength: 2,
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

                  <Grid item xs={12}>
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

                  
                </Grid>
                <Button sx={{ marginTop: "25px" }} onClick={handleLoginToDashboard} variant="contained">
                  Login{" "}
                </Button>
              </Paper>
              <Copyright />
            </Container>
          </ThemeProvider>
        </Paper>
      </div>
      <Footer/>
    </>
  );
}
