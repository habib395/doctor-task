import React from 'react';
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-10 px-4">
      <div className="w-11/12 mx-auto flex flex-col lg:flex-row justify-between gap-10">
        {/* Left Section - Logo & About */}
        <div className="w-full lg:w-1/2">
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Logo" className="h-12 object-contain" />
            <h2 className="text-xl font-semibold">Peace Library</h2>
          </div>
          <p className="text-sm">
            পীস লাইব্রেরী মূলত এটি একটি সংস্থা, ঔষধকে খাদ্য হিসেবে নয়, বরং খাদ্যকেই ঔষধ হিসেবে গ্রহণ করুন। এই স্লোগান নিয়ে আমরা একটি স্বাস্থ্যকর জীবনধারার প্রচার করছি।
          </p>
        </div>

        {/* Right Section - Info Grid */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          {/* Address */}
          <div>
            <h2 className="font-bold underline mb-2">ঠিকানা</h2>
            <p>
              PeaceLibrary DIABETES CENTRE <br />
              Vill-Sekhpur (Chandpur Brigde), Jharkhand Border <br />
              Po- Bhasaipaikar, Ps- Samserganj <br />
              Dist- Murshidabad, Pin-742202 <br />
              State- West Bengal
            </p>
          </div>

          {/* Timing */}
          <div>
            <h2 className="font-bold underline mb-2">খোলা থাকে</h2>
            <p>
              সোম – বৃহস্পতি: 6 AM – 6 PM <br />
              শনি – রবি: 6 AM – 6 PM <br />
              শুক্রবার বন্ধ
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-bold underline mb-2">যোগাযোগ</h2>
            <p>
              ফোন: +91 9732 624 907 <br />
              হোয়াটসঅ্যাপ: +91 9732 624 907
            </p>
          </div>
        </div>
      </div>
      {/* Bottom Line */}
      <div className="text-center mt-10 text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Peace Library Diabetes Centre. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;