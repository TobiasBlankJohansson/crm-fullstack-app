export function PricingSection() {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <h3 className="text-2xl font-bold mb-4 text-blue-700">Basic Plan</h3>
        <p className="text-gray-600 mb-6">
          Ideal for small teams just getting started with CRM tools.
        </p>
        <p className="text-4xl font-bold text-blue-700 mb-4">$19</p>
        <p className="text-sm text-gray-500 mb-6">Per user/month</p>
        <button className="w-full bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-600 mb-2">
          Learn More
        </button>
        <button className="w-full bg-gray-200 text-blue-700 py-2 px-4 rounded-lg hover:bg-gray-300 mb-2">
          Start Free Trial
        </button>
        <button className="w-full border border-blue-700 text-blue-700 py-2 px-4 rounded-lg hover:bg-blue-100">
          Contact Sales
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <h3 className="text-2xl font-bold mb-4 text-blue-700">Professional Plan</h3>
        <p className="text-gray-600 mb-6">Perfect for growing teams who need advanced features.</p>
        <p className="text-4xl font-bold text-blue-700 mb-4">$49</p>
        <p className="text-sm text-gray-500 mb-6">Per user/month</p>
        <button className="w-full bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-600 mb-2">
          Learn More
        </button>
        <button className="w-full bg-gray-200 text-blue-700 py-2 px-4 rounded-lg hover:bg-gray-300 mb-2">
          Start Free Trial
        </button>
        <button className="w-full border border-blue-700 text-blue-700 py-2 px-4 rounded-lg hover:bg-blue-100">
          Contact Sales
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <h3 className="text-2xl font-bold mb-4 text-blue-700">Enterprise Plan</h3>
        <p className="text-gray-600 mb-6">Custom solutions for large teams and organizations.</p>
        <p className="text-4xl font-bold text-blue-700 mb-4">Custom</p>
        <p className="text-sm text-gray-500 mb-6">Contact us for pricing</p>
        <button className="w-full bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-600 mb-2">
          Learn More
        </button>
        <button className="w-full bg-gray-200 text-blue-700 py-2 px-4 rounded-lg hover:bg-gray-300 mb-2">
          Request a Demo
        </button>
        <button className="w-full border border-blue-700 text-blue-700 py-2 px-4 rounded-lg hover:bg-blue-100">
          Contact Sales
        </button>
      </div>
    </div>
  );
}
