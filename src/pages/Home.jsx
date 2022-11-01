import "../css/Home.css";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";

const Home = (props) => {
    
  return (
    <>
      <Banner source="./images/banner.jpg" attribut="bannière kasa représentant une falaise et l'océan" title="Chez vous, partout et ailleurs"/>
      <Gallery housing={props.housing}/>
    </>
  );
};

export default Home;
