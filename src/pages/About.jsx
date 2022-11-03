import Banner from "../components/Banner";
import DropDown from "../components/DropDown";
import "../css/About.css"

const About = () => {
  /*
    All the differents contents are below it is more usefull
    in case of we want to change them. A better way will be 
    to use a back in case of Kasa(the customer) want to change
    them using a form.
  */
  const fiabilitéContent = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.";
  const respectContent = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
  const serviceContent = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
  const sécuritéContent = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";
  return (
    <>
      <Banner source="./images/bannerAbout.jpg" ident="bannerAbout" attribut="bannière kasa représentant des montagnes"
      />
      <section className="AboutDropDownsContainer">
        <DropDown classes="dropDownAbout" title="Fiabilité" content={fiabilitéContent}/>
        <DropDown classes="dropDownAbout" title="Respect" content={respectContent}/>
        <DropDown classes="dropDownAbout" title="Service" content={serviceContent}/>
        <DropDown classes="dropDownAbout" title="Sécurité" content={sécuritéContent}/>
      </section>
    </>
  );
};

export default About;
