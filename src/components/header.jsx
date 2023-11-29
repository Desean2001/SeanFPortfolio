import Nav from './Navigation';
import { Outlet } from 'react-router-dom';

function Header() {
    return (
        <div>
            <div>
                <h1 className="">Sean Finley</h1>
                <Nav className=""/>
            </div>
            <main className="container">
                <Outlet />
            </main>
        </div>
    )
}

export default Header