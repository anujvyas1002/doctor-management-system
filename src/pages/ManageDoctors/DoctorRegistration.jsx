//............New File.....................


import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Controller } from "react-hook-form";

import CssBaseline from "@mui/material/CssBaseline";
// import AppBar from '@mui/material/AppBar';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ReactDOM from "react-dom";
import DoctorDetails from "./DoctorDetails";
import Report from "./Report";
import PersonalInfo from "./PersonalInfo";

import { useNavigate } from "react-router-dom";
import Header from "../../components/NavBar/Header";
import Footer from "../../components/Footer/Footer";

import './Doctor.css'
