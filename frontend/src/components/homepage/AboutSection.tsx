export default function AboutSection() {
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-8">
      <div>
        <h2 className="text-4xl font-bold mb-4 text-blue-700">
          Empower Your Business Relationships
        </h2>
        <p className="text-lg text-gray-600">
          Our CRM platform helps you track sales, manage projects, and build strong customer
          connections. Simplify your workflow, focus on what matters, and achieve more with our
          easy-to-use tools.
        </p>
      </div>
      <div>
        <img
          src="/about.jpg"
          alt="CRM Illustration"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}
