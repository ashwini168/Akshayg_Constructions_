const Hero = () => (
    <section
      className="hero"
      style={{
        backgroundImage: 'url("/images/hero-bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '450px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
      }}
    >
   

      <div className="hero-text">
        <h2>Welcome to BuildWise</h2>
        <p>Your trusted construction partner.</p>
      </div>
    </section>
  );
  
  export default Hero;
  