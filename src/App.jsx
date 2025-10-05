import LandingPage from "./components/landing-page/LandingPage";
import Navbar from "./components/nav-bar/Navbar";

function Main({ children }) {
  return <main>{children}</main>;
}

function App() {
  return (
    <>
      <Navbar />
      <Main>
        <LandingPage />
      </Main>
    </>
  );
}

export default App;
