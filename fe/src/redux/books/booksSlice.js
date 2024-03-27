import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../client"; // Assicurati che client sia correttamente importato

const initialState = {
  books: [],
  isLoading: false,
  error: null,
  totalBooks: 0,
};

export const getAllBooks = createAsyncThunk("books/GETBOOKS", async () => {
  return await client.get("/books");
});

const booksSlice = createSlice({
  name: "books",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.totalBooks = action.payload.length;
        state.books = action.payload;
      })
      .addCase(getAllBooks.rejected, (state) => {
        state.isLoading = false;
        state.error = "Oops, an error has occurred";
      });
  },
});

export const selectAllBooks = (state) => state.books.books;

export default booksSlice.reducer;
