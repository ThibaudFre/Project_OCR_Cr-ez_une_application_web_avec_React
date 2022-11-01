import '../css/Error.css'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <main id='mainError'>
            <h1>404</h1>
            <div id="texteContainer">
                <p>Oups! La page que &nbsp;</p>
                <p> vous demandez n'existe pas.</p>
            </div>
            <Link to='/' id="backHomeLink">Retourner sur la page d'accueil</Link>
        </main>
    )
}

export default Error