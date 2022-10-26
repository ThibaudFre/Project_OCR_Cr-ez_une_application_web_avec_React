import '../css/Footer.css';
import KasaLogo from './KasaLogo';
import '../css/KasaLogo.css'

const Footer = (props) => {
    return (
        <footer>
            <KasaLogo ident="kasaLogoFooter" colorLogo="#FFFFFF"/>
            <p>{props.texte}</p>
        </footer>
    )
}

export default Footer