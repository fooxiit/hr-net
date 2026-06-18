import type { RouteObject } from 'react-router';
import PATH from './PATH';
import { getEmployees } from '../services/employeesService';
import EmployeePage from '../pages/Employee/EmployeePage';

const employeeRoute: RouteObject = {
    path: PATH.EMPLOYEE.PATH,
    loader: loader,
    Component: EmployeePage,
};

// Charge la liste des employés avant l'affichage de la page ; retourne un tableau vide en cas d'échec API
async function loader() {
    const employeeResult = await getEmployees();
    if (employeeResult.success) return employeeResult.data;
    return [];
}

export default employeeRoute;
