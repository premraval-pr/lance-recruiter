import Navigation from "./components/Navigation";
import Home from "./components/Home";
import HowItWorks from "./components/HowItWorks";
import About from "./components/About";
import FAQs from "./components/FAQs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Navigation />
                <Home />
                <HowItWorks />
                <About />
                <FAQs />
                <Contact />
                <Route path="/login" exact component={About} />
            </Router>
            <Footer />
        </div>
    );
}

export default App;
