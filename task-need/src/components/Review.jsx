
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

const data = [
  {
    heading: "গুড়িয়া খাতুন",
    image: "https://example.com/images/diabetes.jpg",
    description: "আমি এখানে আমার অতিরিক্ত ওজনের জন্য চিকিৎসা করতে এসেছিলাম। চিকিৎসা শুরু করার আগে আমার ওজন ছিল ৭৮ কেজি।। চিকিৎসা শুরুর ১ মাস ২৩ দিন পরে আমার ওজন হয় ৬৬ কেজি। আমি এখন আগের থেকে আনেক ভালো ফিল করছি।",
  },
  {
    heading: "Tarikul Sk",
    image: "https://example.com/images/hypertension.jpg",
    description: "আমার আব্বুর সুগার , ও হার্টের পেসেন্ট । পিস ডাইবেটিস সেন্টারে চিকিৎসা এ শুরুতে সুগার ছিল ৩৮০ , মেডিসিন রেগুলার খেত , মাঝে মাঝে ইনসুলিন ও নিতো । চিকিৎসার ২০ দিনের মাথায় সেটা এখন নেমে এসেছে ১৬০ ।। এখন সুগারের মেডিসিন ছাড়ায় আছে , কোনো সমস্যা হয়না।",
  },
];

const Review = () => {
  return (
    <div className="w-3/4 mx-auto">
        <h2 className='text-2xl font-bold py-3 text-black text-center'>সুখী হওয়ার গল্প</h2>
    <div className="my-5">
      <Swiper
        spaceBetween={20}
        slidesPerView={1} 
        onSlideChange={() => console.log("slide changed")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-5">
              <i><p className="text-lg whitespace-pre-line">{item.description}</p></i>
              <div className="grid justify-center text-center">
              <figure>
                      <img
                        className='rounded-full w-12 h-12 object-cover'
                        src={item.image}
                        alt={item.heading}
                      />
                    </figure>
              <h2 className="text-base font-semibold mb-2">{item.heading}</h2>
              </div>
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
};

export default Review;