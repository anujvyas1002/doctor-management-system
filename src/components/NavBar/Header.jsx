import React,{useState} from "react";
import { AppBar,Tabs,Tab,Toolbar,Button,useMediaQuery,useTheme, Typography} from "@mui/material";
import VaccinesIcon from '@mui/icons-material/Vaccines';
import DrawerComp from "./DrawerComp";
import {Link} from "react-router-dom";
import {makeStyles} from "@mui/styles";

// const PAGES=["Doctor","Patient","Baby","Vaccination"];

const btnStyle = makeStyles({
  button: {
    color:'white',  
    background:'linear-gradient(45deg, #3A8891 30%,  #419AA4 90%)',
    border: 0,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    height: 30,
    padding: '10px 40px 10px 40px',
  },
});

const Header = () =>{


  const classes = btnStyle();
  const [value,setValue] = useState();
  
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
    return(
      <>
      <div  style={{marginTop:"15vh"}}></div>
       <AppBar sx={{background:"#0E5E6F"}}>
       <Toolbar>
        <VaccinesIcon/>
        {  isMatch ? (
            <>
            <Typography sx={{fontSize:"1.5rem",paddingLeft:"10%"}}>
             MOTHERCARE
            </Typography>
            <DrawerComp/>
            </>
          ):(
            <>
             {/* <Tabs 
                sx={{marginLeft:"auto"}} textColor="inherit" value={value} onChange={(e,value)=>setValue(value)} indicatorColor="secondary">
                  {
                    PAGES.map((page,index)=>(
                      <Tab key={index} label={page} />
                    ))
                  }
             </Tabs>  */}
          
        <Tabs sx={{marginLeft:"auto"}} textColor="inherit" value={value} onChange={(e,value)=>setValue(value)} indicatorColor="secondary">
        {/* <NavLink style={{textDecoration:"none", color:"white"}} to="/DoctorRegi" /> */}
        <Tab label="Home" component={Link} to="/" />
        <Tab label="About Us" component={Link} to="/AboutUs"/>
        <Tab label="Contact Us" component={Link} to="/ContactUs"/>
        <Tab label= "Report" component={Link} to="/Report"/>
        </Tabs>
        
        <Button className={classes.button} sx={{marginLeft:"auto", color:"white"}} component={Link} to="/DoctorLogin">Login{" "}</Button>
        <Button className={classes.button} sx={{marginLeft:'10px', color:"white"}} component={Link} to="/DoctorRegi">Register{" "}</Button>
            </>
          )
        }

       </Toolbar>
    
       </AppBar>
      </>
    )
}

export default Header;