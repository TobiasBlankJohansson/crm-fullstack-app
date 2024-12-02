export default function ContactForm() {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
      <h2 className="text-3xl font-bold mb-6 text-sky-700 text-center">Get in Touch</h2>
      <p className="text-lg text-stone-600 mb-8 text-center">
        Have questions or need help? Fill out the form below, and we’ll get back to you as soon as
        possible.
      </p>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="col-span-1 md:col-span-2">
          <label className="block text-stone-700 font-medium mb-2" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-sky-500 focus:border-sky-500"
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <label className="block text-stone-700 font-medium mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-sky-500 focus:border-sky-500"
            placeholder="Your Email"
            required
          />
        </div>
        <div>
          <label className="block text-stone-700 font-medium mb-2" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-sky-500 focus:border-sky-500"
            placeholder="Your Phone"
          />
        </div>
        <div className="col-span-1 md:col-span-2">
          <label className="block text-stone-700 font-medium mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-sky-500 focus:border-sky-500"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <div className="col-span-1 md:col-span-2 flex justify-center">
          <button
            type="submit"
            className="bg-sky-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-sky-600 focus:ring focus:ring-sky-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
