import React, { useState, useEffect } from "react";
import { Menu, ChevronRight, Check } from "lucide-react";
import "./styles.css";
import clockImage from "./clock.png";
import trackImage from "./track.png";
import dashboardImage from "./dashboard.png";
import folderImage from "./folder.png";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  const scrollToProducts = () => {
    const productsSection = document.getElementById("products-section");
    if (productsSection) {
      const offset = 80;
      const elementPosition = productsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navigateToPage = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span
                className="text-2xl font-bold text-blue-900 cursor-pointer"
                onClick={() => navigateToPage("home")}
              >
                Uruz.my
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => navigateToPage("home")}
                className="text-gray-700 hover:text-blue-900"
              >
                Product
              </button>
              <button
                onClick={() => navigateToPage("pricing")}
                className="text-gray-700 hover:text-blue-900"
              >
                Pricing
              </button>
              <button
                onClick={() => navigateToPage("resources")}
                className="text-gray-700 hover:text-blue-900"
              >
                Resources
              </button>
              <button
                onClick={() => navigateToPage("company")}
                className="text-gray-700 hover:text-blue-900"
              >
                Company
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-900"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => navigateToPage("home")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-900"
              >
                Product
              </button>
              <button
                onClick={() => navigateToPage("pricing")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-900"
              >
                Pricing
              </button>
              <button
                onClick={() => navigateToPage("resources")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-900"
              >
                Resources
              </button>
              <button
                onClick={() => navigateToPage("company")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-900"
              >
                Company
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      {currentPage === "pricing" ? (
        <PricingPage />
      ) : currentPage === "company" ? (
        <CompanyPage />
      ) : (
        <HomePage scrollToProducts={scrollToProducts} />
      )}
    </div>
  );
};
const HomePage = ({ scrollToProducts }) => {
  return (
    <>
      {/* Hero Section */}
      <div className="pt-32 pb-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Turn Your
              <br />
              Work Into
              <br />
              System
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Effortlessly manage events, courses, payments, khairat and <br />
              more with Uruz's minimalist, automated system
            </p>
            <div className="flex justify-center">
              <button
                onClick={scrollToProducts}
                className="bg-white text-blue-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200"
              >
                Explore Our Products
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatedText />

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Feature */}
            <div className="bg-blue-900 rounded-lg p-8 text-white">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-yellow-400 text-blue-900 rounded-full text-sm font-medium">
                  Big Wins
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">Saves Time & Effort</h3>
              <p className="text-gray-300 mb-6">
                It handles repetitive work, so less time and energy are spent on
                tedious tasks.
              </p>
              <div className="flex justify-center h-48 md:h-64">
                <img
                  src={clockImage}
                  alt="Save time"
                  className="rounded-lg shadow-lg object-cover w-full"
                />
              </div>
            </div>

            {/* Right Feature */}
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-xl font-bold mb-3">
                Keeps Everything in One Place
              </h3>
              <p className="text-gray-600 mb-6">
                It keeps all information in one spot, making it easy for
                everyone to find what they need when they need it.
              </p>
              <div className="flex justify-center h-48 md:h-64">
                <img
                  src={folderImage}
                  alt="Keeps in Place"
                  className="rounded-lg shadow-lg object-cover w-full"
                />
              </div>
            </div>
          </div>

          {/* Bottom Features */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-xl font-bold mb-3">
                Makes Smarter Decisions
              </h3>
              <p className="text-gray-600 mb-6">
                With clear and organized data, it becomes easier to understand
                what's happening and make better choices.
              </p>
              <div className="flex justify-center h-48 md:h-64">
                <img
                  src={dashboardImage}
                  alt="Dashboard"
                  className="rounded-lg shadow-lg object-cover w-full"
                />
              </div>
            </div>

            <div className="bg-white rounded-lg p-8">
              <h3 className="text-xl font-bold mb-3">
                Keeps Everyone on Track
              </h3>
              <p className="text-gray-600 mb-6">
                It ensures that rules are followed, tasks are done right, and
                everyone knows who's responsible for what.
              </p>
              <div className="flex justify-center h-48 md:h-64">
                <img
                  src={trackImage}
                  alt="Track"
                  className="rounded-lg shadow-lg object-cover w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div id="products-section" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Our Products
          </h2>
          <p className="text-center text-gray-600 mb-12">
            We create solutions that simplify processes, exceed expectations,
            and drive efficiency.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Uruz Event System",
                description:
                  "Efficient Event Solutions with Registration, QR Code, Payments & More",
                tag: "Event Management",
                color: "bg-blue-900",
                url: "",
              },
              {
                title: "Uruz Khairat System",
                description:
                  "Complete Khairat System: Registration, Claim, Payments, Reports & More",
                tag: "Khairat Management",
                color: "bg-blue-900",
                url: "https://uruz.my/khairat",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <span
                  className={`inline-block px-3 py-1 rounded-md text-white text-sm mb-4 ${product.color}`}
                >
                  {product.tag}
                </span>
                <h3 className="text-xl font-bold mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <a
                  href={product.url}
                  className="text-blue-900 font-medium flex items-center hover:text-blue-700 group"
                >
                  Explore{" "}
                  <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Download Section */}
      <div className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transform Your Operations <br /> with Uruz
            </h2>
            <p className="text-gray-400 mb-8">
              Uruz Transforms Your Routine into a Systematic Workflow.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

// CompanyPage Component
const CompanyPage = () => {
  return (
    <div className="pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
            Analitika Ilmuwan
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Empowering organizations through innovative digital solutions
          </p>
        </div>

        {/* Company Overview */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 mb-4">
              Analitika Ilmuwan is a leading technology company specializing in
              developing innovative solutions for businesses and organizations.
              Founded with a vision to simplify complex processes, we combine
              technical expertise with deep industry knowledge to create
              impactful digital products.
            </p>
            <p className="text-gray-600">
              Our flagship product, Uruz.my, represents our commitment to
              delivering user-friendly, efficient systems that transform how
              organizations operate.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-4">
              To empower organizations with innovative digital solutions that
              simplify operations, enhance efficiency, and drive growth.
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-600">
                  Building user-centric solutions that solve real problems
                </span>
              </div>
              <div className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-600">
                  Continuously innovating to meet evolving needs
                </span>
              </div>
              <div className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-600">
                  Providing excellent support and service to our clients
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-6">
            Interested in learning more about our solutions? We'd love to hear
            from you.
          </p>
          <a
            href="mailto:contact@ilmuwan.my"
            className="inline-flex items-center bg-blue-900 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition-colors duration-200"
          >
            Contact Us
            <ChevronRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

// PricingPage Component
const PricingPage = () => {
  return (
    <div className="pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
            Khairat.uruz for the Mosques
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Get started with Uruz.my at no cost
          </p>

          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-8">
              <h2 className="text-2xl font-bold text-center mb-4">PERCUMA</h2>
              <p className="text-5xl font-bold text-center text-blue-900 mb-6">
                RM 0
                <span className="text-lg font-normal text-gray-600">
                  /month
                </span>
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Member Management</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Statistic & Reports</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Receipt & Invoice Generator</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Notification Generator</span>
                </div>
              </div>

              <button className="w-full mt-8 bg-blue-900 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition-colors duration-200">
                Get Started Now
              </button>
            </div>
          </div>

          <div className="mt-12 text-gray-600">
            <p>
              Need a custom plan?{" "}
              <a href="#" className="text-blue-900 font-medium">
                Contact us
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// AnimatedText Component
const AnimatedText = () => {
  const phrases = [
    "Saves Time & Effort",
    "Keeps Everything In One Place",
    "Helps Make Smarter Decisions",
    "Keeps Everyone on Track",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(textInterval);
  }, []);

  return (
    <div className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center text-2xl">
          <span className="text-blue-600 font-bold">Uruz.my</span>
          <span className="mx-1"></span>
          <span
            className={`text-gray-600 font-semibold transition-opacity duration-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {phrases[currentIndex]}
          </span>
        </div>
      </div>
    </div>
  );
};
// Footer Component
const Footer = () => {
  return (
    <footer className="py-8 bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-orange-500 font-medium mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Event System
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Khairat System
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-orange-500 font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Help Centre
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Tutorial
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-orange-500 font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-orange-500 font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>Copyright © 2024 Uruz.my | Managed by Analitika Ilmuwan Sdn Bhd</p>
        </div>
      </div>
    </footer>
  );
};

// Export all components
export { HomePage, CompanyPage, PricingPage, AnimatedText, Footer };

export default App;
