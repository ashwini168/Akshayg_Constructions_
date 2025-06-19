// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componenets/Header';
import Hero from './componenets/Hero';
import About from './componenets/About';
import Services from './componenets/Services';
import Projects from './componenets/Projects';
import Contact from './componenets/Contact';
import Footer from './componenets/Footer';
import Home from './pages/Home';
import Service1 from './pages/Service1';
import Service2 from './pages/Service2';
import Service3 from './pages/Service3';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Homepage with full layout */}
        <Route
          path="/"
          element={
            <>
             
             <Hero />
             <About />
             <Services />
             <Projects />
             <Contact />
             
            </>
          }
        />
        {/* Individual service pages */}
        <Route path="/service1" element={<Service1 />} />
        <Route path="/service2" element={<Service2 />} />
        <Route path="/service3" element={<Service3 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
