import {Link} from 'react-router-dom'
import '../css/Header.css'
import KasaLogo from './KasaLogo'
import "../css/KasaLogo.css"

function Header(props) {
   return (
    <header>
        <Link to="/" >
            <KasaLogo ident="kasaLogoHeader" colorLogo="#FF6060"/>
        </Link>

        <nav>
            <Link className='link' to="/">
                Accueil
            </Link>
            <Link className='link' to='/about'>
                A Propos
            </Link>
        </nav>
    </header>
        
   )
}

export default Header