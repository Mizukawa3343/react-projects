import LandingPage from "./components/pages/LandingPage";
import Navbar from "./components/nav-bar/Navbar";
import ProjectManagementPage from "./components/pages/ProjectManagementPage";
import UseAsExtensionPage from "./components/pages/UseAsExtensionPage";
import WorkTogetherPage from "./components/pages/WorkTogetherPage";
import CustomizePage from "./components/pages/CustomizePage";
import SponsorsPage from "./components/pages/SponsorsPage";

function Main({ children }) {
  return <main>{children}</main>;
}

function App() {
  return (
    <>
      <Navbar />
      <Main>
        <LandingPage />
        <ProjectManagementPage />
        <WorkTogetherPage />
        <UseAsExtensionPage />
        <CustomizePage />
        <SponsorsPage />
      </Main>
    </>
  );
}

export default App;
