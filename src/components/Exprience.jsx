const Experience = () => {
  const experiences = [
    {
      year: "2023 – Present",
      title: "Web design / Front-End Developer – CMS Computer Ltd (Under NIC)",
      desc: "Developing and maintaining responsive web applications using modern frontend technologies, collaborating with designers and backend developers, optimizing user interfaces for better performance, ensuring compliance with WCAG accessibility standards and GIGW guidelines for government websites, and integrating basic backend functionality using Laravel",
    },
    {
      year: "Jan 2023 – June 2023",
      title:
        "Web design / Front-End Developer – Prakhar Software Solutions (Under NIC)",
      desc: "Assisted in the development of web applications, focusing on front-end features and user interface improvements.",
    },
    {
      year: "Mar 2022 – Dec 2022",
      title: "Web Designer / Frontend Developer – Webstep Technologies",
      desc: "Contributed to various projects involving HTML, CSS, WordPress, Magento, Squarespace, React js and JavaScript, ensuring mobile responsiveness and cross-browser compatibility.",
    },
    {
      year: "May 2022 – Mar 2022",
      title: "Web Designer / Frontend Developer – Bigpage ecommerce pvt ltd ",
      desc: "Contributed to various projects involving HTML, CSS, WordPress, Magento, Squarespace, React js and JavaScript, ensuring mobile responsiveness and cross-browser compatibility.",
    },
    {
      year: "January 2021 – May 2021",
      title: "Web Designer / Frontend Developer – Arrow2web",
      desc: "Contributed to various projects involving HTML, CSS, WordPress, Magento, Squarespace, React js and JavaScript, ensuring mobile responsiveness and cross-browser compatibility.",
    },
    {
      year: "May 2019 – Dec 2020",
      title: "Web Designer / Frontend Developer – Digitron Systems",
      desc: "Contributed to various projects involving HTML, CSS, and JavaScript, ensuring mobile responsiveness and cross-browser compatibility.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-5xl text-center font-black mb-16">
          My 
          <span className="font-bold text-orange-600"> Experience</span>
        </h1>
       

        <div className="relative border-l-4 border-blue-500">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-10 ml-6">
              {/* Circle */}
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full ring-8 ring-white"></span>

              {/* Year */}
              <p className="text-sm text-blue-600 font-semibold">{exp.year}</p>

              {/* Job Title */}
              <h3 className="text-lg font-bold text-gray-800 mt-1">
                {exp.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mt-2">{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
