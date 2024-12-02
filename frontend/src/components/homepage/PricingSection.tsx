export function PricingSection() {
  return (
    <div className="px-6 py-12">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-blue-700 mb-10">
          Flexible Pricing for Every Business
        </h2>
        <p className="text-lg text-gray-600">
          Empower your business with tailored plans designed to scale with your
          needs. Whether you're an entrepreneur just starting out, a
          fast-growing company, or a well-established enterprise, we offer
          solutions to fit your budget and goals. No hidden fees, no surprises,
          just tools that work.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Basic Plan */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-2xl font-bold text-blue mb-4">Basic</h3>
          <p className="text-lg text-stone-600 mb-4">
            Ideal for small businesses starting out. Get all the essentials to
            build and manage your customer relationships effectively.
          </p>
          <ul className="text-stone-600 mb-6 text-left list-disc list-inside">
            <li>Up to 2 team members</li>
            <li>100 customer profiles</li>
            <li>Email support</li>
            <li>Basic reporting and analytics</li>
            <li>Tools you need for your small business.</li>
          </ul>
          <p className="text-3xl font-bold mb-4">$9.99/month</p>
          <button className="bg-blue text-white py-2 px-4 rounded hover:bg-sky-600">
            Get Started
          </button>
        </div>

        {/* Pro Plan */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-2xl font-bold text-blue mb-4">Pro</h3>
          <p className="text-lg text-stone-600 mb-4">
            Perfect for growing businesses with advanced needs. Unlock more
            features to accelerate the growth of your company.
          </p>
          <ul className="text-stone-600 mb-6 text-left list-disc list-inside">
            <li>Up to 10 team members</li>
            <li>Unlimited customer profiles</li>
            <li>Priority email and chat support</li>
            <li>Advanced reporting and dashboards</li>
            <li>Custom workflows and automation</li>
          </ul>
          <p className="text-3xl font-bold mb-4">$29.99/month</p>
          <button className="bg-blue text-white py-2 px-4 rounded hover:bg-sky-600">
            Get Started
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-2xl font-bold text-blue mb-4">Enterprise</h3>
          <p className="text-lg text-stone-600 mb-4">
            Comprehensive tools for large organizations with custom needs.
            Tailored to provide maximum value at scale.
          </p>
          <ul className="text-stone-600 mb-6 text-left list-disc list-inside">
            <li>Unlimited team members</li>
            <li>Dedicated account manager</li>
            <li>Custom integrations and API access</li>
            <li>Advanced security and compliance</li>
            <li>Onboarding and training included</li>
          </ul>
          <p className="text-3xl font-bold mb-4">Custom Pricing</p>
          <button className="bg-blue text-white py-2 px-4 rounded hover:bg-sky-600">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
}
