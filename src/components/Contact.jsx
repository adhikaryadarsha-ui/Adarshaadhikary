import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl text-center font-black mb-16">
          Contact <span className="font-bold text-orange-600">Me</span>
        </h1>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-6">Adarsha Adhikary</h3>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-blue-600 text-xl" />
                <span>Kolkata, India</span>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-green-600 text-xl" />
                <span>+91 9564790085</span>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-red-500 text-xl" />
                <span>adhikaryadarsha9@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-md space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              required
              className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="submit"
              className="bg-orange-700 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
