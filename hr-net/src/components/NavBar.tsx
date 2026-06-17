import { NavLink } from 'react-router';
import PATH from '../routes/PATH';
import './NavBar.css';

export default function NavBar() {
    return (
        <nav className="nav-bar">
            <ol>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? 'nav-bar__link nav-bar__link--active' : 'nav-bar__link')} to={PATH.HOME.PATH}>
                        {PATH.HOME.LABEL}
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? 'nav-bar__link nav-bar__link--active' : 'nav-bar__link')} to={PATH.EMPLOYEE.PATH}>
                        {PATH.EMPLOYEE.LABEL}
                    </NavLink>
                </li>
            </ol>
        </nav>
    );
}
