import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from './employeeStore';

export const store = configureStore({
    reducer: { employees: employeesReducer },
});

export type AppStore = typeof store;

export type RootState = ReturnType<AppStore['getState']>;

export type AppDispatch = AppStore['dispatch'];
