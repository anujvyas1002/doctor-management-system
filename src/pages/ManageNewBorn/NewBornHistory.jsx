// import * as React from "react";
// import Header from "../../components/NavBar/Header";

// const NewBornHistory=()=>{
// return(
//     <div style={{marginTop:"15vh"}}>
//        <Header/>
//         <h1>New Born History....!!</h1>
//     </div>
// )
// }
// export default NewBornHistory;



import Header from "../../components/NavBar/Header";
import React, { useState, useEffect } from "react";
import axios from "axios";

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
  { field: 'mothername', headerName: 'Mother Name', width: 130 },
  { field: 'fathername', headerName: 'Father Name', width: 130 },
  { field: 'gender', headerName: 'Gender', width: 130 },
  { field: 'dateandtime', headerName: 'Date & Time',type:'date', width: 130 },
  { field: ' weight', headerName: 'Weight',type:'number', width: 130 },
  { field: 'apgarscore', headerName: 'Apgar Score', width: 130 },
  { field: 'delivery', headerName: 'Delivery', width: 130 },
  { field: ' phonenumber', headerName: 'Phone Number', width: 130 },

  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.mothername || ''} ${params.row.fathername || ''}`,
  },
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
      .get("http://localhost:3000/newbornregistration")
      .then((res) => {
        console.log(res.data);
        setUser(res?.data);
      })
      .catch((err) => {
        alert("something went wrong");
      });
  }, []);

  return (
 
     <div style={{marginTop:"15vh"}}>
      <Header/>
     <h1>New Born History....!!</h1>

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
                    <TableCell align="left">{user.mothername}</TableCell>
                    <TableCell align="left">{user.fathername}</TableCell>
                    <TableCell align="left">{user.gender}</TableCell>
                    <TableCell align="left">{user.dateandtime}</TableCell>
                    <TableCell align="left">{user.weight}</TableCell>
                    <TableCell align="left">{user.apgarscore}</TableCell>
                    <TableCell align="left">{user.delivery}</TableCell>
                    <TableCell align="left">{user.mobilenumber}</TableCell>

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

















