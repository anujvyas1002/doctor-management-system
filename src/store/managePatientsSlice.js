import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const patientsSlice = createSlice({
  name: "managePatients",
  initialState: {
    status: STATUSES.IDLE,
    PatientData: [],
  },
  reducers: {
    // setProducts(state, action) {
    //     state.data = action.payload;
    // },
    // setStatus(state, action) {
    //     state.status = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPatient.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchPatient.fulfilled, (state, action) => {
        state.rolesData = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchPatient.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      })

      .addCase(addPatient.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(addPatient.fulfilled, (state, action) => {
        state.status = STATUSES.IDLE;
      })
      .addCase(addPatient.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      })
      .addCase(updatePatient.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(updatePatient.fulfilled, (state, action) => {
        state.status = STATUSES.IDLE;
      })
      .addCase(updatePatient.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      })
      .addCase(removePatient.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(removePatient.fulfilled, (state, action) => {
        state.status = STATUSES.IDLE;
      })
      .addCase(removePatient.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const { setPatient, setStatus } = patientsSlice.actions;

export default patientsSlice.reducer;

// Thunks
//  fetch Api All patient Data
export const fetchPatient = createAsyncThunk("patient/fetch", async () => {
  const res = await axios.get(`http://localhost:3000/patientData`);
  const data = res.data;
  return data;
});

// Add patient Api Call
export const addPatient = createAsyncThunk("patient/add", async (req) => {
  const res = await axios.post(`http://localhost:3000/patientData`, req);
  const data = res.data;
  return data;
});

// Edit patient Api Call
export const updatePatient= createAsyncThunk("patient/update", async (req) => {
  const res = await axios.put(`http://localhost:3000/patientData/${req.id}`, req);
  const data = res.data;
  return data;
});

// Remove patient Api Call
export const removePatient = createAsyncThunk("patient/remove", async (id) => {
  const res = await axios.delete(`http://localhost:3000/patientData/${id}`);
  const data = res.data;
  return data;
});
