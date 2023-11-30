import { createSlice } from "@reduxjs/toolkit";

const invoicesSlice = createSlice({
  name: "invoices",
  initialState: [],
  reducers: {
    addInvoice: (state, action) => {
      state.push(action.payload);
    },
    deleteInvoice: (state, action) => {
      return state.filter((invoice) => invoice.id !== action.payload);
    },
    updateInvoice: (state, action) => {
      const index = state.findIndex(
        (invoice) => invoice.id === action.payload.id
      );
      if (index !== -1) {
        state[index] = action.payload.updatedInvoice;
      }
    },
    updateEditInvoices: (state, action) => {
      const newUpdatedInvoices = action.payload;
      newUpdatedInvoices.forEach((updatedInvoice) => {
        const index = state.findIndex(
          (invoice) => invoice.id === updatedInvoice.id
        );
        if (index !== -1) {
          state[index] = updatedInvoice;
        }
      });
    },
  },
});

export const { addInvoice, deleteInvoice, updateInvoice ,updateEditInvoices } =
  invoicesSlice.actions;

export const selectInvoiceList = (state) => state.invoices;

export default invoicesSlice.reducer;
