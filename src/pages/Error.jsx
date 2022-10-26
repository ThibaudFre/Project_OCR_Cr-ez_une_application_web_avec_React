import '../css/Error.css'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <main id='mainError'>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to='/' id="backHomeLink">Retourner sur la page d'accueil</Link>
        </main>
    )
}

export default Error