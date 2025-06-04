
import { Link } from 'react-router-dom';
import WhyShop from '../components/WhyShop';
import Footer from '../components/Footer';


const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">About ShopEasy</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">We are passionate about providing you with the best shopping experience with quality, value, and trust.</p>
      </section>
       <section className="bg-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          🛍️ About Us – Our Story
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
          At <span className="font-semibold text-black">[ShopEasy]</span>, we're more than just an eCommerce store — we're a journey shaped by passion, purpose, and people.
        </p>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
          It all started with a simple idea: <br />
          <span className="italic font-medium">To make online shopping easy, trustworthy, and enjoyable for everyone.</span>
        </p>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
          We began with a small collection, driven by a deep understanding of what customers truly need — quality, affordability, and a smooth shopping experience. Over time, we grew, one happy customer at a time, and built a community that values style, service, and simplicity.
        </p>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
          <span className="font-semibold">Our mission is clear:</span><br />
          ✅ To bring carefully selected products to your doorstep<br />
          ✅ To offer an experience, not just a transaction<br />
          ✅ To grow with our customers — listening, evolving, and improving every day
        </p>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          We're proud of how far we've come, but we’re even more excited about where we’re going. <br />
          <span className="font-semibold text-black">Welcome to our story. Welcome to [ShopEasy].</span>
        </p>
      </div>
    </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p>To make shopping simple, affordable, and enjoyable for everyone by providing quality products and excellent customer support.</p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
          <p>To become the most trusted online store for lifestyle and essentials, known for customer satisfaction and reliability.</p>
        </div>
      </section>
      <WhyShop/>

      {/* CTA */}
      <section className="bg-white text-center py-10">
        <h3 className="text-2xl font-semibold mb-4">Ready to explore our products?</h3>
        <Link to="/products" className="bg-gray-900 text-white px-6 py-3 my-2 rounded-full text-lg hover:bg-gray-700">
          Shop Now
        </Link>
      </section>
      <Footer/>
    </div>
  );
};

export default About;
