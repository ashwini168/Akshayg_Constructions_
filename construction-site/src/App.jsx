// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componenets/Header';
import HeroVideo from './componenets/HeroVideo';
import About from './componenets/About';
import Services from './componenets/Services';
import Projects from './componenets/Projects';
import Contact from './componenets/Contact';
import Footer from './componenets/Footer';

import Service1 from './pages/Service1';
import Service2 from './pages/Service2';
import Service3 from './pages/Service3';



// Optional Press placeholder
const Press = () => (
  <section className="press-section">
    <h2>Press Mentions</h2>
    <p>Coming soon...</p>
  </section>
);

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroVideo />
              <Footer />
            </>
          }
        />
        <Route path="/about" element={<><About /><Footer /></>} />
        <Route path="/contact" element={<><Contact /><Footer /></>} />
        <Route path="/press" element={<><Press /><Footer /></>} />
        <Route path="/services" element={<><Services /><Projects /><Footer /></>} />
        <Route path="/service1" element={<><Service1 /><Footer /></>} />
        <Route path="/service2" element={<><Service2 /><Footer /></>} />
        <Route path="/service3" element={<><Service3 /><Footer /></>} />
      </Routes>
    </Router>
  );
};

export default App;
