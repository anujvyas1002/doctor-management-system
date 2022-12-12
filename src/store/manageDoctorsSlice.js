import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const doctorsSlice = createSlice({
  name: "manageDoctors",
  initialState: {
    doctors: [],
    status: STATUSES.IDLE,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDoctors.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchDoctors.fulfilled, (state, action) => {
        state.doctors = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchDoctors.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      })
   
      .addCase(addDoctor.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(addDoctor.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(addDoctor.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      })
      .addCase(updateDoctor.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(updateDoctor.fulfilled, (state, action) => {
        state.status = STATUSES.IDLE;
      })
      .addCase(updateDoctor.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      })
      .addCase(removeDoctor.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(removeDoctor.fulfilled, (state, action) => {
        state.status = STATUSES.IDLE;
      })
      .addCase(removeDoctor.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const { setDoctors, setStatus } =
doctorsSlice.actions;

export default doctorsSlice.reducer;

// Thunks
//  fetch Api All Doctor Data
export const fetchDoctors = createAsyncThunk("Doctor/fetch", async () => {
  const res = await axios.get(`http://localhost:3000/Doctor`);
  const data = res.data;
  return data;
});

// Add Doctor Api Call
export const addDoctor = createAsyncThunk("Doctor/add", async (req) => {
  const res = await axios.post(`http://localhost:3000/Doctor`, req);
  const data = res.data;
  return data;
});

// Edit Doctor Api Call
export const updateDoctor = createAsyncThunk(
  "Doctor/update",
  async (req) => {
    const res = await axios.put(`http://localhost:3000/Doctor/${req.id}`,req);
    const data = res.data;
    return data;
  }
);

// Remove Doctor Api Call
export const removeDoctor = createAsyncThunk(
  "Doctor/remove",
  async (id) => {
    const res = await axios.delete(`http://localhost:3000/Doctor/${id}`);
    const data = res.data;
    return data;
  }
);
