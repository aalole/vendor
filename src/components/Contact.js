import React from "react";

const ContactForm = () => {
  return (
    <form name="contactForm" className="pr-4 contact-form">
      <div className="input-wrapper flex justify-between align-center mb-3 ">
        <div className="flex flex-col pr-4 mb-3">
          <label htmlFor="fullname" className="pb-4 text-sm ">
            Full Name <span className="text-green-400">*</span>
          </label>
          <input
            type="text"
            placeholder="full name"
            required
            minLength="2"
            className="py-2"
          />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="email" className="pb-4 text-sm ">
            Email Address <span className="text-green-400">*</span>
          </label>
          <input type="email" placeholder="Email" required className="py-2" />
        </div>
      </div>
      <div className="flex flex-col mb-3">
        <label htmlFor="message" className="pb-4 text-sm ">
          Message <span className="text-green-400">*</span>
        </label>
        <textarea
          rows="5"
          placeholder="Message"
          cols="10"
          className="py-2"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-green-500 text-bold text-white px-10 mt-4 py-3 rounded-full"
      >
        Submit
      </button>
    </form>
  );
};

const Location = () => {
  return (
    <div className="mapouter flex-start">
      <div className="gmap_canvas">
        <iframe
          width="450"
          height="350"
          margin="auto"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=yidi%20road%20Ilorin&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          title="our location"
        ></iframe>
      </div>
    </div>
  );
};
const Contact = () => {
  return (
    <div className="contact-us mt-10">
      <h1 className="text-5xl mb-4 pt-3 pb-3 font-bold text-black text-left contact-title">
        GET IN TOUCH
      </h1>
      <div className="contact-wrap flex justify-between align-center">
        <ContactForm />
        <Location />
      </div>
    </div>
  );
};

export default Contact;
