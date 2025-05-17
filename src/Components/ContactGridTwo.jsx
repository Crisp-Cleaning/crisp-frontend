import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactGridTwo = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string()
        .matches(/^[0-9+\s()-]*$/, "Invalid phone number")
        .required("Phone number is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values) => {
      console.log("Form values:", values);
      alert("Message sent successfully!");
    },
  });

  return (
    <div className="col-span-2 p-8 lg:p-20">
      <h1 className="text-2xl font-bold mb-6">Send us a message</h1>
      <h5>
        You can reach out to us anytime at{" "}
        <span className="text-[#FF914D]">support@crispcleaningcorp.com.au</span>
      </h5>

      <form
        onSubmit={formik.handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-6 w-full"
      >
        {/* First Name */}
        <div className="flex flex-col">
          <label
            htmlFor="firstName"
            className="text-sm font-medium mb-1 text-slate-600"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            placeholder="John"
            {...formik.getFieldProps("firstName")}
            className={`border rounded-md px-4 py-1 ${
              formik.touched.firstName && formik.errors.firstName
                ? "border-red-500"
                : "border-slate-300"
            } focus:outline-none focus:ring-2 focus:ring-[#FF914D]`}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <span className="text-red-500 text-sm mt-1">
              {formik.errors.firstName}
            </span>
          )}
        </div>

        {/* Last Name */}
        <div className="flex flex-col">
          <label
            htmlFor="lastName"
            className="text-sm font-medium mb-1 text-slate-600"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            placeholder="Smith"
            {...formik.getFieldProps("lastName")}
            className={`border rounded-md px-4 py-1 ${
              formik.touched.lastName && formik.errors.lastName
                ? "border-red-500"
                : "border-slate-300"
            } focus:outline-none focus:ring-2 focus:ring-[#FF914D]`}
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <span className="text-red-500 text-sm mt-1">
              {formik.errors.lastName}
            </span>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="text-sm font-medium mb-1 text-slate-600"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="user@gmail.com"
            {...formik.getFieldProps("email")}
            className={`border rounded-md px-4 py-1 ${
              formik.touched.email && formik.errors.email
                ? "border-red-500"
                : "border-slate-300"
            } focus:outline-none focus:ring-2 focus:ring-[#FF914D]`}
          />
          {formik.touched.email && formik.errors.email && (
            <span className="text-red-500 text-sm mt-1">
              {formik.errors.email}
            </span>
          )}
        </div>

        {/* Phone Number */}
        <div className="flex flex-col">
          <label
            htmlFor="phone"
            className="text-sm font-medium mb-1 text-slate-600"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="0421 172 719"
            {...formik.getFieldProps("phone")}
            className={`border rounded-md px-4 py-1 ${
              formik.touched.phone && formik.errors.phone
                ? "border-red-500"
                : "border-slate-300"
            } focus:outline-none focus:ring-2 focus:ring-[#FF914D]`}
          />
          {formik.touched.phone && formik.errors.phone && (
            <span className="text-red-500 text-sm mt-1">
              {formik.errors.phone}
            </span>
          )}
        </div>

        {/* Message */}
        <div className="flex flex-col md:col-span-2">
          <label
            htmlFor="message"
            className="text-sm font-medium mb-1 text-slate-600"
          >
            Message
          </label>
          <textarea
            id="message"
            rows="6"
            placeholder="Please write your message to us here..."
            {...formik.getFieldProps("message")}
            className={`border rounded-md px-4 py-2 resize-none ${
              formik.touched.message && formik.errors.message
                ? "border-red-500"
                : "border-slate-300"
            } focus:outline-none focus:ring-2 focus:ring-[#FF914D]`}
          ></textarea>
          {formik.touched.message && formik.errors.message && (
            <span className="text-red-500 text-sm mt-1">
              {formik.errors.message}
            </span>
          )}
        </div>

        {/* Submit Button (full width across columns) */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-[#FF914D] text-white px-6 py-2 rounded-md hover:bg-[#e67b33] transition-colors"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactGridTwo;
