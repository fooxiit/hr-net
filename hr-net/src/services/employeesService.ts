import type { Result } from './resultType';
import URL from './URL';

interface Employee {
    firstName: string;
    lastName: string;
    startDate: Date;
    department: string;
    dateOfBirth: Date;
    street: string;
    city: string;
    state: string;
    zipCode: string;
    id: string;
}

type NewEmployee = Omit<Employee, 'id'>;

export async function getEmployees(): Promise<Result<Employee>> {
    try {
        const fetchResponse = await fetch(`${URL.HOST}${URL.ENDPOINT.EMPLOYEE}`);
        if (!fetchResponse.ok) return { success: false, raison: fetchResponse.status.toString() };
        const employee = await fetchResponse.json();
        return { success: true, data: employee };
    } catch (error) {
        console.error(error);
        return { success: false, raison: 'fail to fetch' };
    }
}

export async function saveEmployee(newEmployee: NewEmployee): Promise<Result<string>> {
    try {
        const postResponse = await fetch(`${URL.HOST}${URL.ENDPOINT.EMPLOYEE}`, { method: 'post', body: JSON.stringify(newEmployee) });
        if (!postResponse.ok) return { success: false, raison: postResponse.status.toString() };
        return { success: true, data: 'employee was created' };
    } catch (error) {
        console.error(error);
        return { success: false, raison: 'fail to fetch' };
    }
}
