import React from 'react';
import home from "../assets/home.png"
import one from "../assets/one.png"
import two from "../assets/two.png"
import three from "../assets/three.png"

const Home = () => {
    return (
        <div>
            <div>
            <img src={home} alt="Logo" className="object-contain w-full" />
            </div>
            <div>
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src={one}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src={two}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src={three}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src={three}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
            </div>
            <div className='w-11/12 mx-auto py-10'>
                <h2 className='text-2xl font-bold text-center'>স্বাস্থ্যকর লাইফস্টাইল</h2>
                <div className='grid grid-cols-12 gap-6'> 
                    <div className='col-span-6 py-6'>
                    <div className='w-1/2 mx-auto border border-black rounded-lg p-3'>
                    <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
      alt="Album" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
                    </div>
                    </div>
                    <div className='col-span-6 py-10'>
                        <div className='border p-3 rounded-lg shadow-lg'>
                            <h2 className='text-2xl font-bold'>স্বাস্থ্যকর লাইফস্টাইল</h2>
                            <p className='font-semibold'>কি আছে আমাদের লাইফ স্টাইলে? কেন ভাল হয়ে যায় লাইফ স্টাইল ও লাইফ টাইম ডিসিস গুলো। (সুস্থতার মূল মন্ত্রে সবচেয়ে গুরুত্বপূর্ণ যে বিষয়টি তা হল খাদ্যাভ্যাস)</p>
                            <p>১) আমরা স্বাস্থ্যকর খাদ্য খেতে বলি।</p>
                            <p>২) আমরা রোযা রাখতে বলি।</p>
                            <p>৩) আমরা ভালো ঘুমাতে বলি।</p>
                            <p>৪) আমরা দৈনিক ব্যায়াম করতে বলি।</p>
                            <p>৫) আমরা মানসিক প্রশান্তির চর্চা করতে বলি।</p>
                            <p className='font-semibold'>‘সুস্থতা সৃষ্টিকর্তার নেয়ামত সুতরাং তাকে ধরে রাখুন’</p>
                            <p>জেনে রাখবেন</p>
                            <p className='font-semibold'>“দুর্বল মুমিনের চেয়ে</p>
                            <p className='font-semibold'>মানুষ বড়ই আশ্চর্যজনক ও বোকা”</p>
                            <p>সে সম্পদ অর্জন করতে গিয়ে স্বাস্থ্য হারায়।</p>
                            <p> তারপর আবার সেই স্বাস্থ্য ফিরে পেতে সম্পদ নষ্ট করে।</p>
                            <p>নিজেকে ভালোবাসুন, নিজেকে সময় দিন। আপনার স্বাস্থ্য‌ই আপনার সম্পদ, একথা বুঝে নিন।</p>
                            <p>“স্বাস্থ্যকর লাইফস্টাইল সুস্থ জীবন” “হয়তো ডিসিপ্লিন নয়তো ডিসিস” আপনার লাইফস্টাইল মডিফিকেশন করতে পরামর্শ নিন লাইফস্টাইল মডিফায়ার <span className='text-blue-400'>আব্দুল কাইয়ুম পীস লাইব্রেরী</span> এর কাছে।</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-11/12 mx-auto py-16 px-10 shadow-lg rounded-lg'>
                <div className='flex justify-between'>
                    <p className='font-semibold text-4xl'>চিকিৎসার জন্য আজ‌ই অ্যাপয়েন্টমেন্ট বুক করুন</p>
                    <button className='btn btn-primary'>Book Appiontment</button>
                </div>
                <p className='text-xl py-4'>• ঔষধ মুক্ত জীবন সুস্থ জীবন, আর এর জন্য প্রয়োজন স্বাস্থ্যকর লাইফ স্টাইল।</p>
            </div>
        </div>
    );
};

export default Home;