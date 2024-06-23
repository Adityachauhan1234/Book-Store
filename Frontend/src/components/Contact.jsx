// Contact.jsx

import React from "react";
import { useForm } from "react-hook-form";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28">
          <h1 className="text-2xl font-bold md:text-4xl text-center">
            Contact Us
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 max-w-lg mx-auto"
          >
            <div className="mb-4">
              <label className="block mb-1">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                {...register("name", { required: true })}
                className="w-full px-3 py-2 border rounded-md outline-none"
              />
              {errors.name && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="mb-4">
              <label className="block mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", { required: true })}
                className="w-full px-3 py-2 border rounded-md outline-none"
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="mb-4">
              <label className="block mb-1">Message</label>
              <textarea
                {...register("message", { required: true })}
                placeholder="Ask any query"
                className="w-full px-3 py-2 border rounded-md outline-none"
                rows="5"
              ></textarea>
              {errors.message && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-pink-500 mb-10 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
