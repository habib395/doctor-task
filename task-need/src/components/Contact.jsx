"use client";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import Lottie from "lottie-react";
import contactLottieData from "../assets/contact.json";

const Contact = () => {
  const whatsappNumber = "+880 1742923499";

  const onSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted!");
  };

  return (
    <div className="w-full px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">অনুসন্ধান করুন</h2>

      <div className="flex flex-col lg:flex-row justify-between gap-12 max-w-6xl mx-auto">
        {/* Left Column - Lottie + Info */}
        <div className="gap-6 w-full lg:w-1/2">
          <Lottie animationData={contactLottieData} className="w-full max-h-80" />
        </div>

        {/* Right Column - Contact Form */}
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-6 w-full lg:w-1/2 p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-3xl font-semibold  bg-clip-text text-transparent">
            Send a Message
          </h2>

          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-lg">Your Name</label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              required
              className="w-full h-12 px-4 rounded-md bg-gray-800 text-white text-lg focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-lg">Your Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              className="w-full h-12 px-4 rounded-md bg-gray-800 text-white text-lg focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-lg">Your Message</label>
            <textarea
              name="message"
              placeholder="Enter your message"
              required
              className="w-full h-32 px-4 py-2 rounded-md bg-gray-800 text-white text-lg focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full h-12 text-lg font-semibold text-white rounded-md bg-gradient-to-r from-[#DF8909] to-[#B415FF] hover:scale-105 transition-transform"
          >
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
