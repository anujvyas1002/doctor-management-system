import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./authenticationSlice";
import managePatientsReducer from "./managePatientsSlice";
import manageDoctorsReducer from "./manageDoctorsSlice";

const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    managePatients: managePatientsReducer,
    manageDoctors: manageDoctorsReducer,
  },
});

export default store;
