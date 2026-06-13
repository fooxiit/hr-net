import type { RouteObject } from 'react-router';
import PATH from './PATH';

const employeeRoute: RouteObject = {
    path: PATH.EMPLOYEE,
    loader: loader,
};

async function loader() {}

export default employeeRoute;
