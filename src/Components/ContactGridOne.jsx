import React from "react";

const ContactGridOne = () => {
  return (
    <div className="bg-gradient-to-b col-span-1 from-[#FF914D] to-[#FFAB77] p-20 rounded-tr-lg rounded-br-lg">
      <div>
        <h1 className="text-2xl font-bold text-white">Get In Touch</h1>
        <h5 className="text-white mt-6">
          We love to hear from you. Our friendly team is always here to chat.
        </h5>
      </div>

      <div className="text-white mt-8">
        <h1 className="text-xl font-medium">Chat with us</h1>
        <h5 className="mt-4">Our friendly team is here to help.</h5>
        <h5 className="mt-4">support@crispcleaningcorp.com.au</h5>
      </div>

      <div className="text-white mt-8">
        <h1 className="text-xl font-medium">Office</h1>
        <h5 className="mt-4">Come say hello at our office HQ.</h5>
        <h5 className="mt-4">
          100 Smith Street <br />
          Collingwood VIC 3066 AU
        </h5>
      </div>

      <div className="text-white mt-8">
        <h1 className="text-xl font-medium">Phone</h1>
        <h5 className="mt-4">Mon-Fri from 8am to 5pm.</h5>
        <h5 className="mt-4">+61 243 124 112</h5>
      </div>

      <div className="text-white mt-8">
        <h1 className="text-xl font-medium">Socials</h1>
        <h5 className="mt-4">Follow us on social media.</h5>
        <h5 className="mt-4">+61 243 124 112</h5>
      </div>
    </div>
  );
};

export default ContactGridOne;
