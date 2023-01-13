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
import { format } from "date-fns";
import Modal from '@mui/material/Modal';

import { Button } from "@mui/material";
import UpdateDoctor from "./UpdateDoctor";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { 
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,                    
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstname || ""} ${params.row.lastname || ""}`,
  },
  { field: "firstname", headerName: "First Name", width: 130 },
  { field: "lastname", headerName: "Last Name", width: 130 },
  { field: "emailid", headerName: "Email Id", width: 130 },
  {
    field: "mobilenumber",
    headerName: "Mobile Number",
    type: "date",
    width: 130,
  },
  {
    field: " qualification",
    headerName: "Qualification",
    type: "number",
    width: 130,
  },
  { field: "mcrnumber", headerName: "MCR Number", width: 130 },
];

export default function DataTable() {
  const columns = [
    { id: "1", label: "ID", minWidth: 50 },
    { id: "2", label: "FIRST NAME", minWidth: 100 },
    { id: "3", label: "LAST NAME", minWidth: 100 },
    // {
    //   id: "4",
    //   label: "BIRTH DATE",
    //   minWidth: 100,
    //   format: (value) => value.toLocaleString("en-US"),
    // },
    { id: "4", label: "EMAIL ID", minWidth: 100 },
    {
      id: "5",
      label: "MOBILE NUMBER",
      minWidth: 100,
    },
    {
      id: "6",
      label: "QUALIFICATION",
      minWidth: 100,
    },
    { id: "7", label: "MCR NUMBER", minWidth: 100 },
  ];

  const [user, setUser] = useState([]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [recordForEdit, setRecordForEdit] = useState(null);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // const [edit, setEdit] = useState([]);
  const [open, setOpen] = useState(false);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/doctorregi")
      .then((res) => {
        console.log(res.data);
        setUser(res?.data);
      })
      .catch((err) => {
        alert("something went wrong");
      });
  }, []);

  const doctorHistoryOpen = (user) => {
    // setEdit(user);
    setOpen(true);
  };

  const doctorHistoryClose = () =>{
    setOpen(false);
  };

    //----------to auto update data----------
    const FetchData = () => {
      axios.get(`http://localhost:3000/doctorregi`).then((res) => {
        console.log(res.data);
        setUser(res?.data);
      });
    };

    const openInPopup = (item) =>{
      setRecordForEdit(item);
    };

  return (
    <div style={{ marginTop: "15vh" }}>
      <Header />
      <h1>Doctor Registration History....!!</h1>
      
      <Modal
        open={open}
        onClose={doctorHistoryClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
           <UpdateDoctor
          onClose={doctorHistoryClose}
          // employeeData={edit}
          fetchAPI={FetchData}
        ></UpdateDoctor>
      </Modal>

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
                    <TableCell align="left">{user.lastname}</TableCell>
                    <TableCell align="left">{user.emailid}</TableCell>
                    <TableCell align="left">{user.mobilenumber}</TableCell>
                    <TableCell align="left">{user.qualification}</TableCell>
                    <TableCell align="left">{user.mcrnumber}</TableCell>

                    <TableCell align="left" direction="row">
                      <Button
                        variant="outlined"
                        onClick={(e) =>doctorHistoryOpen(user)}
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
