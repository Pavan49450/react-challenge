import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./index"; // Assuming you have a Redux store set up

interface Doctor {
  id: number;
  name: string;
}

interface DoctorState {
  doctors: Doctor[];
  filteredDoctors: Doctor[];
}

const initialState: DoctorState = {
  doctors: [], // Add your initial list of doctors here
  filteredDoctors: [],
};

const doctorSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {
    setDoctors: (state, action: PayloadAction<Doctor[]>) => {
      state.doctors = action.payload;
      state.filteredDoctors = action.payload;
    },
    filterDoctors: (state, action: PayloadAction<string>) => {
      const searchValue = action.payload.toLowerCase();
      state.filteredDoctors = state.doctors.filter((doctor) =>
        doctor.name.toLowerCase().includes(searchValue)
      );
    },
  },
});

export const { setDoctors, filterDoctors } = doctorSlice.actions;
export const selectDoctors = (state: RootState) => state.doctor.filteredDoctors;
export default doctorSlice.reducer;
