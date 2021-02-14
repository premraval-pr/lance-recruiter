import Navigation from "./components/Navigation";
import Home from "./components/Home";
import HowItWorks from "./components/HowItWorks";
import About from "./components/About";
import FAQs from "./components/FAQs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Navigation />
            <Home />
            <HowItWorks />
            <About />
            <FAQs />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
