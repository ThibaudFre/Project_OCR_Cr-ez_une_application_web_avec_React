import {BrowserRouter,Routes, Route} from 'react-router-dom'
import React from 'react';
import SharedLayout from "./pages/SharedLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Error from './pages/Error';
import SingleHousing from './pages/SingleHousing';
import homes from "./logements.json"

//application
const App = () => {
    return (
        <React.StrictMode>
        {/*react router*/}
        <BrowserRouter>
            <Routes>
                {/*principal path where is shared the header and the footer*/}
                <Route path='/' element={<SharedLayout />}>
                    {/*all the differents paths*/}
                    <Route index element={<Home housing={homes}/>}/>
                    <Route path='about' element={<About />}/>
                    <Route path="/products/:productId" element={<SingleHousing housing={homes}/>}/>
                    <Route path="*" element={<Error />}/>
                </Route>
            </Routes>
        </BrowserRouter>
      </React.StrictMode>
    )
}

export default App;