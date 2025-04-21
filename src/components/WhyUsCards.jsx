const cards = [
  { title: "Client-Centered", description: "We treat our clients like family, always." },
  { title: "Boutique Service", description: "Tailored advice with institutional insight." },
  { title: "Multi-Generational", description: "We manage wealth across lifetimes." },
];

const WhyUsCards = () => {
  return (
    <div className="bg-white py-16 px-6 text-center">
      <h2 className="text-3xl font-semibold text-navy mb-8">What Sets Us Apart</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <div key={index} className="p-6 shadow-md rounded-2xl border hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-navy">{card.title}</h3>
            <p className="text-gray-600 mt-2">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUsCards;