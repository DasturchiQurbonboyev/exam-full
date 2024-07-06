import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
    name: "categoryes",
    initialState: {
        categoryes: JSON.parse(localStorage.getItem('categories')) || []
    },
    reducers: {
        addCategory: function (state, action) {
            const exists = state.categoryes.some(category => category.title === action.payload.title);
            if (!exists) {
                state.categoryes.push(action.payload);
                localStorage.setItem('categories', JSON.stringify(state.categoryes));
            }
        },
        deleteCategory: function (state, action) {
            state.categoryes = state.categoryes.filter(item => item.id !== action.payload);
            localStorage.setItem('categories', JSON.stringify(state.categoryes));
        },
        setCategories: function (state, action) {
            state.categoryes = action.payload;
            localStorage.setItem('categories', JSON.stringify(state.categoryes));
        }
    },
})

export const { addCategory, deleteCategory, setCategories } = categorySlice.actions;
export default categorySlice.reducer;
