import {BrowserRouter,Routes, Route} from 'react-router-dom'
import React from 'react';
import SharedLayout from "./pages/SharedLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Error from './pages/Error';


const App = () => {
    return (
        <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SharedLayout />}>
                    <Route index element={<Home />}/>
                    <Route path='about' element={<About />}/>
                    <Route path="*" element={<Error />}/>
                </Route>
            </Routes>
        </BrowserRouter>
      </React.StrictMode>
    )
}

export default App;