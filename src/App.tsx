import "./App.css";
import AboutMeComponent from "./parts/about me/aboutme.component";
import FooterComponent from "./parts/footer/footer.component";
import HeaderComponent from "./parts/header/header.component";
import PresentationComponent from "./parts/presentation/presentation.component";
import ProyectComponent from "./parts/proyects/proyect.component";

function App() {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <PresentationComponent></PresentationComponent>
      <AboutMeComponent></AboutMeComponent>
      <ProyectComponent></ProyectComponent>
      <FooterComponent></FooterComponent>
    </>
  );
}

export default App;
