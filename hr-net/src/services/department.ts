import type { Result } from './resultType';
import URL from './URL';
export interface Department {
    label: string;
    value: string;
    id: string;
}
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
