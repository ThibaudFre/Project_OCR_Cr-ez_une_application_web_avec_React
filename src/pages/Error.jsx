import '../css/Error.css'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <main className='mainError'>
            <h1>404</h1>
            <div className="texteContainer">
                <p>Oups! La page que &nbsp;</p>
                <p> vous demandez n'existe pas.</p>
            </div>
            <Link to='/' className="backHomeLink">Retourner sur la page d'accueil</Link>
        </main>
    )
}

export default Error