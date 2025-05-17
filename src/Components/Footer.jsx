import React from "react";
import { sitemap } from "../data/data";
import { Link } from "react-router-dom";
import ContactForm from "./FooterContactForm";

const Footer = () => {
  return (
    <footer className="p-12">
      <div className="mt-8 grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-4">
        <img src="/logo.svg" className="w-52 -ml-20" />

        <div>
          <h5 className="text-lg font-bold">Sitemap</h5>
          <h5 className="text-slate-500 mt-4">
            {sitemap.map((site, index) => (
              <div key={index}>
                <Link to={site.url}>{site.name}</Link>
              </div>
            ))}
          </h5>
        </div>

        <div>
          <h5 className="text-lg font-bold mb-4">Help & Support</h5>
          <h5 className="text-slate-500">Contact</h5>
          <small className="text-slate-500">
            support@crispcleaningcorp.com.au
          </small>
        </div>

        <div className="col-span-2">
          <ContactForm />
        </div>
      </div>
      <hr className="mt-6" />
      <span className="flex items-center justify-between mt-6">
        <small>CrispCleaningCorp @ 2024</small>
        <small>Terms & Conditions</small>
      </span>
    </footer>
  );
};

export default Footer;
