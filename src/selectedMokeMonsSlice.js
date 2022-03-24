import {createSlice} from '@reduxjs/toolkit'

export const initialState = {
    likedMokeMons: {},
};

export const selectedMokeMonsSlice = createSlice({
    name: 'selectedMokeMons',
    initialState,
    reducers: {
        setLikedMokeMons: (state, action) => {

            console.log('newly liked Mokemons=', action.payload);
            return {...state, likedMokeMons: action.payload};
        },
    },

})

// Action creators are generated for each case reducer function
export const {setLikedMokeMons} = selectedMokeMonsSlice.actions

export default selectedMokeMonsSlice.reducer