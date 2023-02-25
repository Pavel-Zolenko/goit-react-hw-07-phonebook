import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from "redux/operations";

export const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        contacts: [],
        isLoading: false,
        error: null,
        
    },
        extraReducers: (builder) => {
    builder
        .addCase(fetchContacts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.contacts = action.payload;
           })
        .addCase(fetchContacts.pending, (state, action) => {
         state.isLoading = true;
     })
        .addCase(fetchContacts.rejected, (state, action) => {
         state.isLoading = false;
         state.error = action.payload;
     })
        .addCase(addContact.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.contacts.push(action.payload);
          
     })
        .addCase(addContact.pending, (state, action) => {
          state.isLoading = true;
     })
        .addCase(addContact.rejected, (state, action) => {
         state.isLoading = false;
         state.error = action.payload;
     })
        .addCase(deleteContact.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            const index = state.contacts.findIndex(
                contact => contact.id === action.payload.id
            );
            state.contacts.splice(index, 1);
          
     })
        .addCase(deleteContact.pending, (state, action) => {
         state.isLoading = true;
    })
        .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    })
            
       },
});

export const contactsReducer = contactsSlice.reducer;