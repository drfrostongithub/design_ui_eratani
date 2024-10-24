import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutPage from "./page/AboutPage";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <AboutPage />
      <Footer />
    </div>
  );
}

export default App;
