import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "./components/Shared/Utils/ScrollToTop.tsx";


function App() {

    return (
        <Layout>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </Layout>
    );
}

export default App;