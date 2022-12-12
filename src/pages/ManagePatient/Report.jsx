import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";

const products = [
  {
    name: "Checkup 1",
    desc: "First Month",
    price: "$xx",
  },
  {
    name: "Checkup 2",
    desc: "Second Month",
    price: "$xx",
  },
  {
    name: "Checkup 3",
    desc: "Third Month",
    price: "$xx",
  },
  {
    name: "Checkup 4",
    desc: "Fourth Month",
    price: "$xx",
  },
  { name: "Checkup", desc: "", price: "Free" },
];

const addresses = ["1 MUI Drive", "Reactville", "Anytown", "99999", "USA"];
const patient = [
  { name: "Patient type", detail: "abcd" },
  { name: "patient Name", detail: "Mr Jolly Smith" },
  { name: "Aadhar Card number", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "Next Checkup date", detail: "04/2024" },
];

export default function Report() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Report
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $34.06
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Address
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(", ")}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Patient details
          </Typography>
          <Grid container>
            {patient.map((patient) => (
              <React.Fragment key={patient.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{patient.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{patient.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
