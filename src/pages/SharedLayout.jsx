import Header from "../components/Header"
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"

/*SharedLayout is used to display inside of every paths the header and footer components*/

const Home = () => {
    return (
        <>
            <Header />
            <Outlet /> {/*here will be all my components that will be display depending of the displayed page*/}
            <Footer texte="© 2020 Kasa. All rights reserved"/>
        </>

    )
}

export default Home