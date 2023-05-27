import './Header.css'
import logo from '../assets/fixLogo.png'
import { Link } from 'react-router-dom'


function Header (props) {

    const loggedIn = props.loggedIn
    const loggedInUser = props.loggedInUser
    


    return(
        <header className='header-nav-bar'>
            <img src={logo} alt="logo" />
            <nav className="drop-menu">
                <ul className="nav">
                    <li><a onClick={()=> window.location.replace('http://localhost:5173')}>Home</a></li>
                    <li><a>Problemas</a>
                        <ul>
                            <li><a>Mouse</a></li>
                            <li><a>Teclado</a></li>
                            <li><a>Monitor</a></li>
                        </ul>
                    </li>
                    {loggedIn ? '' :<li><a onClick={()=> window.location.replace('http://localhost:5173/logon')}>Registre-se</a></li> }
                    {loggedIn ? '': <li><a onClick={()=> window.location.replace('http://localhost:5173/login')}>Entre</a></li>}
                    {loggedIn && <li><a>{loggedInUser}</a></li>}
                </ul>
            </nav>
        </header>
    )
}

export default Header