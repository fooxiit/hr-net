import type { Result } from './resultType';
import URL from './URL';
// Service permettent la manipulation des données employés

export type Employee = {
    firstName: string;
    lastName: string;
    startDate: string;
    department: string;
    dateOfBirth: string;
    street: string;
    city: string;
    state: string;
    zipCode: string;
    id: string;
};

// NewEmployee est un Employee sans l'identifiant assigné par le serveur
export type NewEmployee = Omit<Employee, 'id'>;
// Récupère la liste des employés depuis l'API
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

// Sauvegarde la liste des employés depuis l'API
export async function saveEmployee(newEmployee: NewEmployee): Promise<Result<string>> {
    try {
        const headers = new Headers();
        const request: RequestInit = { headers };
        request.method = 'post';
        headers.append('Content-Type', 'application/json');
        request.body = JSON.stringify({ employee: newEmployee });
        const postResponse = await fetch(`${URL.HOST}${URL.ENDPOINT.EMPLOYEE}`, request);
        if (!postResponse.ok) return { success: false, raison: postResponse.status.toString() };
        return { success: true, data: 'employee was created' };
    } catch (error) {
        console.error(error);
        return { success: false, raison: 'fail to fetch' };
    }
}
