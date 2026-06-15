import type { RouteObject } from 'react-router';
import { getDepartment } from '../services/department';
import HomePage from '../pages/Home page/HomePage';

const homeRoute: RouteObject = {
    index: true,
    loader: loader,
    Component: HomePage,
};

async function loader() {
    const departmentResult = await getDepartment();
    if (departmentResult.success) return departmentResult.data;
    return [];
}

export default homeRoute;
