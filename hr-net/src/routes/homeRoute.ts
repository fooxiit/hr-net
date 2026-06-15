import type { RouteObject } from 'react-router';
import { getDepartment } from '../services/departement';

const homeRoute: RouteObject = {
    index: true,
    loader: loader,
};

async function loader() {
    const departmentResult = await getDepartment();
    if (departmentResult.success) return departmentResult.data;
    return [];
}

export default homeRoute;
