
import { Drawer, List, ListItemButton,ListItemIcon,ListItemText,IconButton } from "@mui/material";
import React,{useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';
const PAGES = ["Doctor","Patient","Baby","Vaccination","Login","Logout"];

const DrawerComp = ()=>{
    const [openDrawer,setOpenDrawer] = useState(false);
    return(
    <>
    <Drawer open={openDrawer} onClose={()=>setOpenDrawer(false)}>
        
        <List>
            {
                PAGES.map((page,index)=>(
                    <ListItemButton onClick={()=>setOpenDrawer(false)} key={index}>
                    <ListItemIcon>
                        <ListItemText>{page}</ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                ))
            }
        </List>
    </Drawer>

    <IconButton onClick={()=>setOpenDrawer(!openDrawer)} sx={{color:"white",marginLeft:"auto"}}>
     <MenuIcon />
    </IconButton>
    </>
    )
}

export default DrawerComp;