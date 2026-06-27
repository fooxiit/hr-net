import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Employee, NewEmployee } from '../services/employeesService';
import type { RootState } from './store';

interface employeeState {
    employees: Employee[];
    id: number;
}

const initialState: employeeState = {
    employees: [],
    id: 0,
};

export const employeeSlice = createSlice({
    name: '"employee',
    initialState: initialState,
    reducers: {
        save: (state, action: PayloadAction<NewEmployee>) => {
            const employee: Employee = { ...action.payload, id: state.id.toString() };
            state.id++;
            state.employees.push(employee);
        },
    },
});

export const selectEmployees = (state: RootState) => state.employees.employees;
export const { save } = employeeSlice.actions;
export default employeeSlice.reducer;
