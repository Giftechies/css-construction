import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  address: {},
  property: {},
  aboutPlace: {},
  placeDescription: {},
  movingAddress: {},
  movingPlaceDescription: {},
  calendar: {
    mode: "On",
    dates: [],
    range: "Exact date",
  },
  Inventory: [],
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setAddress(state, action) {
      state.address = action.payload;
    },
    setProperty(state, action) {
      state.property = action.payload;
    },
    setAboutPlace(state, action) {
      state.aboutPlace = action.payload;
    },
    setplaceDescription(state, action) {
      state.placeDescription = action.payload;
    },
    setmovingAddress(state, action) {
      state.movingAddress = action.payload;
    },
    setmovingPlaceDescription(state, action) {
      state.movingPlaceDescription = action.payload;
    },
    setCalendar(state, action) {
      state.calendar = action.payload;
    },
    setInventory(state, action) {
      state.Inventory = action.payload;
    },
  },
});

export const {
  setAddress,
  setProperty,
  setAboutPlace,
  setplaceDescription,
  setmovingAddress,
  setmovingPlaceDescription,
  setCalendar,
  setInventory,
} = formSlice.actions;
export default formSlice.reducer;
