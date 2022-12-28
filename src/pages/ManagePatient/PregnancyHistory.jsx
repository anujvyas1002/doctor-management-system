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



import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import { Button } from "@mui/material";

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstname', headerName: 'First Name', width: 130 },
  { field: 'middlename', headerName: 'Middle Name', width: 130 },
  { field: 'lastname', headerName: 'Last Name', width: 130 },
  { field: 'mobilenumber', headerName: 'Mobile Number',type:'date', width: 130 },
  { field: ' edd', headerName: 'Estimated Due Date',type:'number', width: 130 },
  { field: 'howmanychildren', headerName: 'How Many Children', width: 130 },
  { field: 'country', headerName: 'Country', width: 130 },

];

export default function DataTable() {

    const [user, setUser] = useState([]);


  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/patientregi")
      .then((res) => {
        console.log(res.data);
        setUser(res?.data);
      })
      .catch((err) => {
        alert("something went wrong");
      });
  }, []);

  return (
    <div style={{ height: 400, width: '100%' }}>
 <Header />
<h1 className="text-center">Pregnancy History..!!</h1>
<Paper sx={{ width: "100%" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {user
                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((user, index) => (
                  <TableRow key={user.id}>
                    <TableCell align="left">{index + 1}</TableCell>
                    <TableCell align="left">{user.firstname}</TableCell>
                    <TableCell align="left">{user.middlename}</TableCell>
                    <TableCell align="left">{user.lastname}</TableCell>
                    <TableCell align="left">{user.mobilenumber}</TableCell>
                    <TableCell align="left">{user.edd}</TableCell>
                    <TableCell align="left">{user.howmanychildren}</TableCell>
                    <TableCell align="left">{user.country}</TableCell>

                    <TableCell align="left" direction="row">
                      <Button
                        variant="outlined"
                        // onClick={(e) => alertOpen(user)}
                        className="space">
                        Delete
                      </Button>
                  
                      <Button
                        variant="contained"
                        // onClick={() => userOpen(user)}
                      >
                        Update
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 25, 100]}
          component="div"

          columns={columns}
          pageSize={5}
        
          count={user.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

    </div>
  );
}