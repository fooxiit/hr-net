const PATH = {
    HOME: { PATH: '/', LABEL: 'Home', TITLE: 'Home Page' },
    EMPLOYEE: { PATH: '/employee', LABEL: 'View Curent Employee', TITLE: 'Curent Employees' },
} as const;

export type Path = '/' | '/employee';

export default PATH;
