import { useLoaderData } from 'react-router';
import type { Department } from '../../services/department';
import STRING from './STRING';
import NewEmployeeFrom from '../../components/NewEmployeeFrom';

import ModalProvider from '../../components/Modal/Modal';

export default function HomePage() {
    const departments = useLoaderData<Department[]>();
    return (
        <ModalProvider initialContent={<div>{STRING.MODAL.CONTENT}</div>}>
            <ModalProvider.Modal />
            <NewEmployeeFrom departments={departments} />
        </ModalProvider>
    );
}
