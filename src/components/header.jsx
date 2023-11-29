import Nav from './Navigation';
import { Outlet } from 'react-router-dom';

function Header() {
    return (
        <div>
            <h1>Sean Finley</h1>
            <Nav />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Header