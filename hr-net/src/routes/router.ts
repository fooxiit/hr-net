import { createBrowserRouter } from 'react-router';
import homeRoute from './homeRoute';
import employeeRoute from './employeeRoute';

const router = createBrowserRouter([homeRoute, employeeRoute]);

export default router;
