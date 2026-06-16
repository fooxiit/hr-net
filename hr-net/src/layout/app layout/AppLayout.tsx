import { useMemo } from 'react';
import { Outlet, useLocation } from 'react-router';
import type { Path } from '../../routes/PATH';
import PATH from '../../routes/PATH';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar';
import './AppLayout.css';

export default function AppLayout() {
    const { pathname } = useLocation();
    const title = useMemo(() => {
        switch (pathname as Path) {
            case '/':
                return PATH.HOME.TITLE;

            case '/employee':
                return PATH.EMPLOYEE.TITLE;

            default:
                return '';
        }
    }, [pathname]);
    return (
        <>
            <Header pageTitle={title} />
            <div className="content-warper">
                <div className="side-content">
                    <NavBar />
                </div>
                <main className="main-content">
                    <Outlet />
                </main>
            </div>
        </>
    );
}
