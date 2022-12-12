import { AppBar,Toolbar,Button,useMediaQuery,useTheme, Typography} from "@mui/material";
import VaccinesIcon from '@mui/icons-material/Vaccines';
import DrawerComp from "./DrawerComp";
import {Link} from "react-router-dom";
import './LogoutHeader.css';


const Header = () =>{
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
    return(
      <>
       <AppBar sx={{background:"#063970"}}>
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
            <Typography sx={{marginLeft:"auto"}} component={Link} to="/"> 

        <Button variant="contained" className="logoutBtn">Logout{" "}</Button>
            </Typography>
          )
        }

       </Toolbar>
    
       </AppBar>
      </>
    )
}

export default Header;