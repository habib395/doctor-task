import React, { useEffect } from 'react';
import home from "../assets/home.png";
import Carousel from './Carousel';

const Home = () => {
  useEffect(() => {
    const slideIds = ["slide1", "slide2", "slide3", "slide4"];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % slideIds.length;
      window.location.hash = `#${slideIds[index]}`;
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id='home' className="overflow-x-hidden">
      {/* Top Banner */}
      <div>
        <img src={home} alt="Banner" className="w-full h-auto object-cover" />
      </div>

      {/* Carousel */}
      <Carousel />

      {/* Lifestyle Section */}
      <div className='max-w-7xl mx-auto py-10 px-4'>
        <h2 className='text-2xl md:text-3xl font-bold text-center mb-6'>স্বাস্থ্যকর লাইফস্টাইল</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='flex justify-center'>
            <div className='w-full sm:w-3/4 border border-black rounded-lg p-3'>
              <div className="card lg:card-side shadow-xl">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                    alt="Lifestyle"
                    className="w-full h-auto"
                  />
                </figure>
                <div className="card-body bg-transparent">
                  <h2 className="card-title">New album is released!</h2>
                  <p>Click the button to listen on Spotiwhy app.</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className='border p-5 rounded-lg shadow-lg'>
            <h2 className='text-xl md:text-2xl font-bold mb-3'>স্বাস্থ্যকর লাইফস্টাইল</h2>
            <p className='font-semibold mb-2'>কি আছে আমাদের লাইফ স্টাইলে? কেন ভাল হয়ে যায় লাইফ স্টাইল ও লাইফ টাইম ডিসিস গুলো। (সুস্থতার মূল মন্ত্রে সবচেয়ে গুরুত্বপূর্ণ যে বিষয়টি তা হল খাদ্যাভ্যাস)</p>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>আমরা স্বাস্থ্যকর খাদ্য খেতে বলি।</li>
              <li>আমরা রোযা রাখতে বলি।</li>
              <li>আমরা ভালো ঘুমাতে বলি।</li>
              <li>আমরা দৈনিক ব্যায়াম করতে বলি।</li>
              <li>আমরা মানসিক প্রশান্তির চর্চা করতে বলি।</li>
            </ul>
            <p className='font-semibold mb-1'>‘সুস্থতা সৃষ্টিকর্তার নেয়ামত সুতরাং তাকে ধরে রাখুন’</p>
            <p className='mb-1'>জেনে রাখবেন</p>
            <p className='font-semibold'>“দুর্বল মুমিনের চেয়ে মানুষ বড়ই আশ্চর্যজনক ও বোকা”</p>
            <p>সে সম্পদ অর্জন করতে গিয়ে স্বাস্থ্য হারায়। তারপর আবার সেই স্বাস্থ্য ফিরে পেতে সম্পদ নষ্ট করে।</p>
            <p>নিজেকে ভালোবাসুন, নিজেকে সময় দিন। আপনার স্বাস্থ্য‌ই আপনার সম্পদ, একথা বুঝে নিন।</p>
            <p>“স্বাস্থ্যকর লাইফস্টাইল সুস্থ জীবন” “হয়তো ডিসিপ্লিন নয়তো ডিসিস”</p>
            <p>আপনার লাইফস্টাইল মডিফিকেশন করতে পরামর্শ নিন লাইফস্টাইল মডিফায়ার <span className='text-blue-400'>আব্দুল কাইয়ুম পীস লাইব্রেরী</span> এর কাছে।</p>
          </div>
        </div>
      </div>

      {/* Appointment CTA */}
      <div className='w-11/12 max-w-7xl mx-auto py-12 px-6 shadow-lg rounded-lg'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
          <p className='text-2xl md:text-3xl font-semibold text-center md:text-left'>
            চিকিৎসার জন্য আজ‌ই অ্যাপয়েন্টমেন্ট বুক করুন
          </p>
          <button className='btn btn-primary w-full md:w-auto'>Book Appointment</button>
        </div>
        <p className='text-lg mt-4 text-center md:text-left'>
          • ঔষধ মুক্ত জীবন সুস্থ জীবন, আর এর জন্য প্রয়োজন স্বাস্থ্যকর লাইফ স্টাইল।
        </p>
      </div>
    </div>
  );
};

export default Home;