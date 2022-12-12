import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import {makeStyles} from "@mui/styles";
import Header from "../../components/NavBar/Header";
import Footer from "../../components/Footer/Footer";

const theme = createTheme();

const btnStyle = makeStyles({
 button: {
    background: 'linear-gradient(45deg, #3A8891 30%, #0E5E6F 90%)',
    border: 0,
    borderRadius: '4px 20px 4px 20px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 70,
    padding: '10px 40px 10px 40px',
  },
});

export default function Dashboard() {
  const classes = btnStyle();

  const paperStyle = { padding: "10px 10px", width: 600, margin: "10px auto" };
 
  const navigate = useNavigate();

  const handlePatientRegi = () => {
      navigate("/PatientRegi");
  }
  const handleNewBornRegi =()=>{
    navigate("/BabyRegi");
  }
  const handlePregnancyHistory=()=>{
   navigate("/PregnancyHistory");
  }

  const handleNewBornHistory=()=>{
    navigate("/NewBornHistory");
  }

  return (
    < >
    <Header/>
      <div style={{ marginTop: "25vh", marginBottom: "17vh" }}>
        <Paper elevation={20} style={paperStyle}>
          <ThemeProvider theme={theme}>
            <CssBaseline />

            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
              <Paper
                variant="outlined"
                sx={{ my: { xs: 3, md: 2 }, p: { xs: 10, md: 10} }}>
                <Typography component="h1" variant="h4" align="center">
                  Dashboard
                </Typography>
                <Grid container spacing={4}>
                  <Grid item xs={6}>
                    <Button className={classes.button} sx={{ marginTop: "25px" }} variant="contained" onClick={handlePatientRegi} target='_blank'>
                      Register Pregnancy{" "}
                    </Button>
                    <div>
                </div>
                  </Grid>

                  <Grid item xs={6}>
                    <Button className={classes.button} sx={{ marginTop: "25px" }} variant="contained" onClick={handleNewBornRegi}>
                      Register New Born{" "}
                    </Button>
                  </Grid>
                </Grid>

                <Grid container spacing={4}>
                  <Grid item xs={6}>
                  <Button className={classes.button} sx={{ marginTop: "25px" }} variant="contained" onClick={handlePregnancyHistory}>
                      Pregnancy History{" "}
                    </Button>
                  </Grid>

                  <Grid item xs={6}>
                    <Button className={classes.button} sx={{ marginTop: "25px" }} variant="contained" onClick={handleNewBornHistory}>
                      New Born History{" "}
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Container>
          </ThemeProvider>
        </Paper>
      </div>
     <Footer/>
    </>
  );
}
