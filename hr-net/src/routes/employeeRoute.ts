import type { RouteObject } from 'react-router';
import PATH from './PATH';
import { getEmployees } from '../services/employeesService';

const employeeRoute: RouteObject = {
    path: PATH.EMPLOYEE,
    loader: loader,
};

async function loader() {
    const employeeResult = await getEmployees();
    if (employeeResult.success) return employeeResult.data;
    return [];
}

export default employeeRoute;
