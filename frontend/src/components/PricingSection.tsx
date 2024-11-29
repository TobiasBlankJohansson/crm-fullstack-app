export function PricingSection() {
  return (
    <div>
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-blue-700 mb-10">
          Flexible Pricing for Every Business
        </h2>
        <p className="text-lg text-gray-600">
          Choose a plan that suits your needs. Whether you're just starting out or managing a
          growing team, our transparent pricing ensures you get the best value for your investment.
          No hidden fees, just powerful tools to enhance your business relationships.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-2xl font-bold text-blue-700 mb-4">Basic</h3>
          <p className="text-lg text-gray-600 mb-4">Ideal for small businesses starting out.</p>
          <p className="text-3xl font-bold mb-4">$9.99/month</p>
          <button className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-600">
            Get Started
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-2xl font-bold text-blue-700 mb-4">Pro</h3>
          <p className="text-lg text-gray-600 mb-4">
            Perfect for growing businesses with more needs.
          </p>
          <p className="text-3xl font-bold mb-4">$29.99/month</p>
          <button className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-600">
            Get Started
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-2xl font-bold text-blue-700 mb-4">Enterprise</h3>
          <p className="text-lg text-gray-600 mb-4">Comprehensive tools for large organizations.</p>
          <p className="text-3xl font-bold mb-4">Custom Pricing</p>
          <button className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-600">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
}
