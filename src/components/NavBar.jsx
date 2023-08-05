import react from 'react';

function NavBar {
    return (
        <nav>
            <ul>
                <li>
                <Link to="/home" className="home">
          Home
        </Link>
        <Link to="/blue" className="blue">
          Blue
        </Link>
        <Link to="/red" className="red">
          Red
        </Link>   
            </li>
            </ul>
        </nav>
    )
}