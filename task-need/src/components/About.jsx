import React from 'react';
import image from "../assets/one.png";

const About = () => {
  return (
    <div id="about" className="py-20">
      <h2 className="text-3xl font-bold text-center py-2">আমাদের সম্পর্কে</h2>

      <div className="w-11/12 max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div>
          <img src={image} alt="About us" className="w-full h-auto object-cover rounded-lg" />
        </div>

        <div>
          <p className="text-base md:text-lg border p-4 rounded-md leading-relaxed">
            <strong className="block mb-2 text-xl">Peace Library Diabetes Centre:</strong>
            <span className="block mb-3">
              প্রকৃতির সুরে সুস্থতার আহ্বান স্বাস্থ্য এমন একটি সম্পদ যা জীবনের প্রতিটি ধাপে গুরুত্বপূর্ণ। আধুনিক যুগে আমরা যে রোগগুলোর সম্মুখীন হই, তার মধ্যে ডায়াবেটিস অন্যতম।
              এটি শুধুমাত্র একটি শারীরিক অবস্থা নয়, বরং আমাদের দৈনন্দিন জীবনের মানসিক এবং সামাজিক দিকেও প্রভাব ফেলে।
              Peace Library Diabetes Centre এই চ্যালেঞ্জ মোকাবিলায় প্রাকৃতিক এবং জীবনধারা ভিত্তিক সমাধান প্রদানের লক্ষ্যে প্রতিষ্ঠিত হয়েছে।
            </span>
            <strong className="block mt-4 mb-1">🔶 আমাদের লক্ষ্য এবং কার্যক্রম</strong>
            <span className="block mb-2">
              আমরা বিশ্বাস করি প্রাকৃতিক খাদ্যাভ্যাস এবং সঠিক জীবনধারার মাধ্যমে রোগ নিয়ন্ত্রণ সম্ভব। প্রায় দুই বছর ধরে এই সেবা দিয়ে আসছি।
            </span>
            <strong className="block mt-4 mb-1">🔶 প্রাকৃতিক খাদ্যাভ্যাসের গুরুত্ব</strong>
            <span className="block mb-2">
              আমরা বিভিন্ন প্রাকৃতিক খাদ্যের মাধ্যমে ডায়াবেটিসসহ অন্যান্য রোগের চিকিৎসা করি।
            </span>
            <strong className="block mt-4 mb-1">🔶 জীবনধারা পরিবর্তন</strong>
            <span className="block mb-2">
              প্রতিটি রোগীর জন্য ব্যক্তিগতকৃত স্বাস্থ্য পরিকল্পনা তৈরি করা হয়, যা তাদের প্রয়োজন অনুযায়ী সাজানো।
            </span>
            <strong className="block mt-4 mb-1">🔶 সাফল্যের গল্প</strong>
            <span className="block mb-2">
              অসংখ্য রোগী আমাদের সেবার মাধ্যমে ঔষধমুক্ত জীবনযাপন করছেন — এটি আমাদের অনুপ্রেরণা।
            </span>
            <strong className="block mt-4 mb-1">🔶 ভবিষ্যৎ লক্ষ্য</strong>
            <span className="block mb-2">
              আরও মানুষের কাছে আমাদের সেবা পৌঁছাতে এবং আরও কার্যকর প্রাকৃতিক পদ্ধতি চালু করতে কাজ করছি।
            </span>
            <strong className="block mt-4 mb-1">🔶 সমাপ্তি</strong>
            <span className="block">
              আমরা বিশ্বাস করি সঠিক খাদ্যাভ্যাস ও জীবনধারা পরিবর্তনের মাধ্যমে অনেক স্বাস্থ্য সমস্যা প্রতিরোধ করা সম্ভব।
            </span>
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div
        className="hero min-h-[60vh] mt-16 rounded-xl overflow-hidden"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center px-4">
          <div className="max-w-xl mx-auto">
            <p className="text-xl md:text-3xl font-semibold mb-5">
              চিকিৎসার জন্য নাম লেখাতে আজ‌ই অ্যাপয়েন্টমেন্ট বুক করুন
            </p>
            <button className="btn btn-primary px-6">Book Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;