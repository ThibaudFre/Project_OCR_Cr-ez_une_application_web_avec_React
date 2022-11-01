import Header from "../components/Header"
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"

const Home = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer texte="© 2020 Kasa. All rights reserved"/>
        </>

    )
}

export default Home