import "../css/Home.css";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer"

const Home = () => {
  return (
    <>
      <Banner source="./images/banner.jpg" attribut="bannière kasa représentant une falaise et l'océan" title="Chez vous, partout et ailleurs"/>
      <Gallery />
      <Footer texte="© 2020 Kasa. All rights reserved"/>
    </>
  );
};

export default Home;
