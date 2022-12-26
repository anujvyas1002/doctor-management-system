import Header from "../../components/NavBar/Header";
import React, { useState, useEffect } from "react";
import axios from "axios";

// import {
//   MDBTable,
//   MDBTableHead,
//   MDBTableBody,
//   MDBRow,
//   MDBCol,
//   MDBContainer,
// } from "mdb-react-ui-kit";
// import { ListItemIcon } from "@mui/material";
// // import './App.css';

// const PregnancyHistory = () => {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     loadUsersData();
//   }, []);

//   const loadUsersData = async () => {
//     return await axios
//       .get("http://localhost:3000/patientregi")
//       .then((response) => setData(response.data))
//       .catch((err) => console.log(err));
//   };
//   console.log("data", data);

//   return (
//     <MDBContainer>
//       <div style={{ marginTop: "15vh" }}>
//         <Header />
//         <h1 className="text-center">Pregnancy History..!!</h1>
//          <MDBRow>
//             <MDBCol size="12">
//             <MDBTable>
//              <MDBTableHead dark>
//               <tr>
//               <th scope="col">ID</th>
//                <th scope="col">First Name</th>
//                <th scope="col">Middle Name</th>
//                <th scope="col">Last Name</th>
//                {/* <th scope="col">Date Of Birth</th> */}
//                <th scope="col">Mobile Number</th>
//                {/* <th scope="col">EDD(Estimated Due Date)</th> */}
//                <th scope="col">Address</th>
//                <th scope="col">City</th>
//                <th scope="col">Country</th>
//               </tr>
//              </MDBTableHead>
//              {data.length === 0 ? (
//                <MDBTableBody className="align-center mb-0">
//                   <tr>
//                      <td colSpan={8} className="text-center mb-0">No Data Found</td>
//                   </tr>
//                </MDBTableBody>
//              ):(
//                data.map((item,index)=>(
//                   <MDBTableBody key={index}>
//                    <tr>
//                      <th scope="row">{index+1}</th>
//                      <td>{item.firstname}</td>
//                      <td>{item.middlename}</td>
//                      <td>{item.lastname}</td>
//                      {/* <td>{item.dateofbirth}</td> */}
//                      <td>{item.mobilenumber}</td>
//                      {/* <td>{item.edd}</td> */}
//                      <td>{item.address}</td>
//                      <td>{item.city}</td>
//                      <td>{item.country}</td>
    
//                    </tr>
//                   </MDBTableBody>
//                ))
//              )
//              }
//             </MDBTable>
//             </MDBCol>
//          </MDBRow>
//       </div>
//     </MDBContainer>
//   );
// };
// export default PregnancyHistory;









import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function PregnancyHistory() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}