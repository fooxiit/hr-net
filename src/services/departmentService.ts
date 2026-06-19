import type { Result } from './resultType';
import URL from './URL';
// Service permettent la manipulation des données des départements
export interface Department {
    label: string;
    value: string;
    id: string;
}
// Récupère la liste des départements depuis l'API
export async function getDepartment(): Promise<Result<Department>> {
    try {
        const fetchResponse = await fetch(`${URL.HOST}${URL.ENDPOINT.DEPARTMENT}`);
        if (!fetchResponse.ok) return { success: false, raison: fetchResponse.status.toString() };
        const departments = await fetchResponse.json();
        return { success: true, data: departments };
    } catch (error) {
        console.error(error);
        return { success: false, raison: 'fail to fetch' };
    }
}
