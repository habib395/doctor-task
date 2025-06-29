import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import Lottie from "lottie-react";
import contactLottieData from "../assets/contact.json";

const Contact = () => {

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
          <Lottie animationData={contactLottieData} className="w-full " />
        </div>

        {/* Right Column - Contact Form */}
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-6 lg:w-1/2 p-2 border rounded-xl w-full"
        >
          <h2 className="text-3xl font-semibold  text-transparent">
            Send a Message
          </h2>

          <div className="flex gap-4">
          <div className="flex flex-col gap-2 w-full">
            <label className="text-lg">নামঃ *</label>
            <input
              name="name"
              type="text"
              placeholder="নাম"
              required
              className="w-full h-12 px-4 border rounded-md bg-transparent text-white text-lg focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-lg">নাম্বারঃ *</label>
            <input
              name="name"
              type="text"
              placeholder="নাম্বার"
              required
              className="w-full h-12 px-4 border rounded-md bg-transparent text-white text-lg focus:ring-2 focus:ring-purple-500"
            />
          </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg">ইমেইলঃ *</label>
            <input
              name="email"
              type="email"
              placeholder="ইমেইল"
              required
              className="w-full h-12 px-4 rounded-md border bg-transparent text-white text-lg focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className=" text-lg">মেসেজঃ *</label>
            <textarea
              name="message"
              placeholder="মেসেজ"
              required
              className="w-full h-32 px-4 py-2 border bg-transparent rounded-md text-white text-lg focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary h-12 text-lg font-semibold text-white rounded-md"
          >
            মেসেজ 
          </button>
        </form>
      </div>
    {/* location */}
    <iframe
        title="Google Map"
        className="w-11/12 mx-auto h-full border-0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626.549447634856!2d87.89541673948243!3d24.63920905416713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fa43ac086bf31d%3A0x6c9fcf838ca668e0!2sDhulian%20-%20Pakur%20Rd%2C%20India!5e0!3m2!1sen!2sbd!4v1751171540307!5m2!1sen!2sbd"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Contact;
