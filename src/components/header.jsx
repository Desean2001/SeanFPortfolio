import Nav from './Navigation';

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