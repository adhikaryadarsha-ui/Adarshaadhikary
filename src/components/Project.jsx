import themitticollective from '../assets/images/themitticollective.png';
import artprintstudio from '../assets/images/artprintstudio.png';
import ncsm from "../assets/images/ncsm.png";
import behalaartfest from "../assets/images/behalaartfest.png";
import webstep from '../assets/images/webstep.png';
import wcdsw from '../assets/images/wcdsw.png';
import kanyashree from '../assets/images/kanyashree.png';
import rupashree from '../assets/images/rupashree.png'
// import jonathanmarsland from '../assets/images/jonathanmarsland.png';

// import mlovers from '../assets/images/mlovers.png';


const Portfolio = () => {
  const projects = [
    {
      image: themitticollective,
      title: "The Mitti Collective",
      url: "https://www.themitticollective.org",
      desc: "Cultural and art platform promoting artists and creative work.",
    },
    {
      image: wcdsw,
      title: "wcdsw",
      url: "https://wcdsw.wb.gov.in/",
      desc: "A modern responsive website with interactive UI and clean design.",
    },
    {
      image: kanyashree,
      title: "Kanyashree",
      url: "https://admin-kanyashree.wb.gov.in/",
      desc: "A modern responsive website with interactive UI and clean design.",
    },
    {
      image: rupashree,
      title: "Rupashree",
      url: "https://admin-rupashree.wb.gov.in/",
      desc: "A modern responsive website with interactive UI and clean design.",
    },
    {
      image: behalaartfest,
      title: "Behala Art Fest",
      url: "https://www.behalaartfest.com",
      desc: "Art festival platform featuring events, galleries and artist information.",
    },
    {
      image: ncsm,
      title: "NCSM Website",
      url: "https://ncsm.gov.in",
      desc: "Government portal for National Council of Science Museums developed with accessibility standards.",
    },
    {
      image: artprintstudio,
      title: "Art Print Studio",
      url: "https://artprintstudio.co.uk",
      desc: "Website for art printing and design services.",
    },
    {
      image: webstep,
      title: "Webstep Technologies",
      url: "https://www.webstep.in",
      desc: "Corporate company website with modern UI design.",
    },
    {
      image: themitticollective,
      title: "The Mitti Collective",
      url: "https://www.themitticollective.org",
      desc: "Cultural and art platform promoting artists and creative work.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl text-center font-black mb-16">
          Portfolio <span className="font-bold text-orange-600">Projects</span>
        </h1>
       

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-md overflow-hidden transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl font-semibold group-hover:scale-110 transition duration-500">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>

                <p className="text-gray-600 text-sm mb-4">{project.desc}</p>

                <a
                  href={project.url}
                  target="_blank"
                  className="inline-block bg-blue-900 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition"
                >
                  Visit Website
                </a>
              </div>
            </div>
          ))}
        </div>
        <button variant="primary" className="mt-10 mx-auto block font-semibold text-lg bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700 transition">
          Read More
        </button>
      </div>
    </section>
  );
};

export default Portfolio;
