import { createBrowserRouter } from 'react-router';
import homeRoute from './homeRoute';
import employeeRoute from './employeeRoute';
import AppLayout from '../layout/app layout/AppLayout';

const router = createBrowserRouter([{ Component: AppLayout, children: [homeRoute, employeeRoute] }]);

export default router;
