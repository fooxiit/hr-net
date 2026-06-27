import type { RouteObject } from 'react-router';
import PATH from './PATH';
import EmployeePage from '../pages/Employee/EmployeePage';
import { store } from '../store/store';

const employeeRoute: RouteObject = {
    path: PATH.EMPLOYEE.PATH,
    loader: loader,
    Component: EmployeePage,
};

// Charge la liste des employés avant l'affichage de la page ; retourne un tableau vide en cas d'échec API
async function loader() {
    const employeeResult = store.getState().employees.employees;
    return employeeResult;
}

export default employeeRoute;
