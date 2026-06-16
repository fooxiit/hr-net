import type { RouteObject } from 'react-router';
import PATH from './PATH';
import { getEmployees } from '../services/employeesService';
import EmployeePage from '../pages/Employee/EmployeePage';

const employeeRoute: RouteObject = {
    path: PATH.EMPLOYEE.PATH,
    loader: loader,
    Component: EmployeePage,
};

async function loader() {
    const employeeResult = await getEmployees();
    if (employeeResult.success) return employeeResult.data;
    return [];
}

export default employeeRoute;
