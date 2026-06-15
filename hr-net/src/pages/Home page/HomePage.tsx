import { useLoaderData } from 'react-router';
import type { Department } from '../../services/department';
import STRING from './STRING';
import NewEmployeeFrom from '../../components/NewEmployeeFrom';
import NavBar from '../../components/NavBar';

export default function HomePage() {
    const departments = useLoaderData<Department[]>();
    return (
        <div>
            <header>
                <span>{STRING.LOGO}</span>
                <h1>{STRING.TITLE}</h1>
            </header>
            <main>
                <NavBar />
                <section className="main-content">
                    <NewEmployeeFrom departments={departments} />
                </section>
            </main>
        </div>
    );
}
