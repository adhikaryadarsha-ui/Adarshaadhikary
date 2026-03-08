import React from 'react'
import CommonBanner from '../components/CommonBanner'
import Contact from '../components/Contact';

const ContactUs = () => {
  return (
    <>
      <CommonBanner
        title="Contact Me"
        subtitle="I build modern, responsive and high performance websites"
      />
      <Contact /> 
    </>
  );
}

export default ContactUs