import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="section">
      <h2>Our Services</h2>
      <div className="card-grid">
        <Link
 to="/service1" className="services-link">
          <div className="card">
            <img src="/images/service1.jpg" alt="Service 1" className="project-img" />
            <h3>Architectural Design</h3>
            <p>Modern and sustainable design tailored to your vision.</p>
          </div>
        </Link>

        <Link to="/service2" className="services-link">
          <div className="card">
            <img src="/images/service2.jpg" alt="Service 2" className="project-img" />
            <h3>Residential Construction</h3>
            <p>Reliable and efficient home construction services.</p>
          </div>
        </Link>

        <Link to="/service3" className="services-link">
          <div className="card">
            <img src="/images/service3.jpg" alt="Service 3" className="project-img" />
            <h3>Project Consulting</h3>
            <p>Expert consultation for budget-friendly and smart execution.</p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Home;