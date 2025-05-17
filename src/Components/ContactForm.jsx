import React from "react";
import ContactGridOne from "./ContactGridOne";
import ContactGridTwo from "./ContactGridTwo";

const ContactForm = () => {
  return (
    <section className="grid lg:grid-cols-3 py-20 items-center">
      <ContactGridOne />
      <ContactGridTwo />
    </section>
  );
};

export default ContactForm;
