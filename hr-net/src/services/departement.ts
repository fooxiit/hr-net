import type { Result } from './resultType';
import URL from './URL';
export interface Department {
    label: string;
    id: string;
}
export async function getDepartment(): Promise<Result<Department>> {
    const fetchResponse = await fetch(`${URL.HOST}${URL.ENDPOINT.EMPLOYEE}`);
    if (!fetchResponse.ok) return { success: false, raison: fetchResponse.status.toString() };
    const departments = await fetchResponse.json();
    return { success: true, data: departments };
}
