//------------HomePage background image isnt working till now------------

import {makeStyles} from "@mui/styles";
import Header from "../../components/NavBar/Header";

const imgStyle = makeStyles({
  bgimage: {
    backgroundImage: 'url("../Assets/images/HomePage")',
     border: 0,
     borderRadius: '4px 20px 4px 20px',
     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
     color: 'white',
     height: 70,
     padding: '10px 40px 10px 40px',
   },
 });

const Home=()=>{
 const classes = imgStyle();
return(
    <div className={classes.bgimage}>
      <Header/>
      Home!!
    </div>
)
}
export default Home;