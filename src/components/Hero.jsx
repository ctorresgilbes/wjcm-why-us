const Hero = () => {
  return (
    <div className="relative h-screen bg-navy">
      <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: `url('/hero-wjcm.jpg')` }} />
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Why William Joseph Capital Management</h1>
        <p className="text-xl max-w-2xl">Because we offer our clients something more than investments—we offer vision, trust, and generational stewardship.</p>
      </div>
    </div>
  );
};

export default Hero;