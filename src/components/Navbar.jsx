import { Link } from 'react-router-dom'
import '../styles/navbar.css'

function Navbar(){
    return(
        <nav className="navbar">
            <ul>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/contact">Contacts</Link> </li>
                <li> <Link to="/about">About Us</Link> </li>
            </ul>

        </nav>
    )
}

export default Navbar