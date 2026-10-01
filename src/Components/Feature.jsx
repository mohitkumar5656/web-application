const Feature = () => {
  const features = [
    {
      id: 1,
      title: "Fast Delivery",
      description: "Get your food delivered in less than 30 minutes.",
      icon: "🚀",
    },
    {
      id: 2,
      title: "Fresh Ingredients",
      description: "We use only fresh and organic ingredients.",
      icon: "🥗",
    },
    {
      id: 3,
      title: "Easy Online Ordering",
      description: "Order online easily through our app or website.",
      icon: "💻",
    },
    {
      id: 4,
      title: "24/7 Support",
      description: "We are here to help you anytime.",
      icon: "📞",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-12">Our Features</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature) => (
          <div key={feature.id} className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;