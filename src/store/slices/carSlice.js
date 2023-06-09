import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        data: []
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        addCar(state, action) {
            /* Assumbtion:
            action.payload === { name: 'asd', cost: 200 } */
            state.data.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            });
        },
        removeCar(state, action) {
            /* Assumbtion:
            action.payload === the id of the car we want to remove */
            state.data = state.data.filter((car) => car.id !== action.payload);
        },
    },
});

export const {
    changeSearchTerm, addCar, removeCar
} = carsSlice.actions;

export const carsReducer = carsSlice.reducer;