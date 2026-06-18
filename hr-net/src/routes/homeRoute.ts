import type { RouteObject } from 'react-router';
import { getDepartment } from '../services/departmentService';
import HomePage from '../pages/Home page/HomePage';

const homeRoute: RouteObject = {
    index: true,
    loader: loader,
    Component: HomePage,
};

// Charge la liste des départements avant l'affichage de la page ; retourne un tableau vide en cas d'échec API
async function loader() {
    const departmentResult = await getDepartment();
    if (departmentResult.success) return departmentResult.data;
    return [];
}

export default homeRoute;
