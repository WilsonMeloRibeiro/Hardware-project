import './Header.css'
import logo from '../assets/fixLogo.png'
import { Link } from 'react-router-dom'

function Header () {

    return(
        <header>
            <img src={logo} alt="logo" />
            <nav class="drop-menu">
                <ul class="nav">
                    <li><a onClick={()=> window.location.replace('http://localhost:5173')}>Home</a></li>
                    <li><a>Problemas</a>
                        <ul>
                            <li><a>Mouse</a></li>
                            <li><a>Teclado</a></li>
                            <li><a>Monitor</a></li>
                        </ul>
                    </li>
                    <li><a onClick={()=> window.location.replace('http://localhost:5173/logon')}>Registre-se</a></li>
                    <li><a onClick={()=> window.location.replace('http://localhost:5173/login')}>Entre</a></li>
                    <li><a>Perfil</a></li>
                    <li><a>Sobre</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header