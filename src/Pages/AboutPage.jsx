const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <h1 className="text-4xl font-semibold text-center mb-8">About Us</h1>

      {/* About Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <img 
          src="/Image/a2.jpg" 
          alt="About Us" 
          className="w-full md:w-1/2 rounded-lg shadow-lg object-cover h-64 md:h-80"
        />
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-700 mb-4">
            We are a passionate team dedicated to delivering fresh and delicious meals
            right to your doorstep. Our commitment is to quality, and customer satisfaction.
          </p>
          <p className="text-gray-700">
            Founded in 2022, our shop has grown to serve hundreds of happy customers daily,
            combining traditional flavors with modern convenience.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-blue-100 p-6 rounded-lg text-center shadow-md">
          <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
          <p>To provide high-quality, fresh, and with fast and friendly service.</p>
        </div>
        <div className="bg-yellow-100 p-6 rounded-lg text-center shadow-md">
          <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
          <p>To become the most loved and trusted  in our community.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;