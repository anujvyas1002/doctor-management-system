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
import VisibilityIcon from "@mui/icons-material/Visibility";
import {format} from 'date-fns'

import { Button } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstname", headerName: "First Name", width: 130 },
  { field: "middlename", headerName: "Middle Name", width: 130 },
  { field: "lastname", headerName: "Last Name", width: 130 },
  { field: "dateofbirth", headerName: "Date Of Birth", type: "date", width: 130 },
  { field: " weight", headerName: "Weight", type: "number", width: 130 },
  { field: "edd", headerName: "EDD", width: 130 },
  { field: "currentmonth", headerName: "Current Month", width: 130 },
  { field: " city", headerName: "City", width: 130 }
];

export default function DataTable() {

  const columns = [
    { id: "1", label: "ID", minWidth: 50 },
    { id: "2", label: "First Name", minWidth: 100 },
    { id: "3", label: "Middle Name", minWidth: 100 },
    // {
    //   id: "4",
    //   label: "BIRTH DATE",
    //   minWidth: 100,
    //   format: (value) => value.toLocaleString("en-US"),
    // },
    { id: "4", label: "Last Name", minWidth: 100 },
    { id: "5", label: "Date Of Birth",  minWidth: 100,
    format: ({value}) => {return format(new Date(value),'dd/mm/yyyy')},}, 
    {
      id: "6",
      label: "Weight",
      minWidth: 100
    },
    { id: "7", label: "EDD", minWidth: 100 },
    { id: "8", label: "Current Month", minWidth: 100 },
    { id: "9", label: "PHONE NUMBER", minWidth: 100 },
    { id: "10", label: "City    ", minWidth: 100 },

  ];


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
    <div style={{ marginTop: "15vh" }}>
      <Header />
      <h1>Patient History....!!</h1>

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
                    <TableCell align="left">{user.dateofbirth}</TableCell>
                    <TableCell align="left">{user.weight}</TableCell>
                    <TableCell align="left">{user.edd}</TableCell>
                    <TableCell align="left">{user.currentmonth}</TableCell>
                    <TableCell align="left">{user.mobilenumber}</TableCell>

                    <TableCell align="left" direction="row">
                      <Button
                        variant="outlined"
                        // onClick={(e) => alertOpen(user)}
                        className="space"
                      >
                        <VisibilityIcon />
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
