import "./App.css";
import AboutMeComponent from "./components/about me/aboutme.component";
import FooterComponent from "./components/footer/footer.component";
import HeaderComponent from "./components/header/header.component";
import PresentationComponent from "./components/presentation/presentation.component";
import ProyectComponent from "./components/proyects/proyect.component";

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
