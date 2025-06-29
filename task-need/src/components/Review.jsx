import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const data = [
  {
    heading: "গুড়িয়া খাতুন",
    image: "https://example.com/images/diabetes.jpg",
    description:
      "আমি এখানে আমার অতিরিক্ত ওজনের জন্য চিকিৎসা করতে এসেছিলাম। চিকিৎসা শুরু করার আগে আমার ওজন ছিল ৭৮ কেজি।। চিকিৎসা শুরুর ১ মাস ২৩ দিন পরে আমার ওজন হয় ৬৬ কেজি। আমি এখন আগের থেকে আনেক ভালো ফিল করছি।",
  },
  {
    heading: "Tarikul Sk",
    image: "https://example.com/images/hypertension.jpg",
    description:
      "আমার আব্বুর সুগার , ও হার্টের পেসেন্ট । পিস ডাইবেটিস সেন্টারে চিকিৎসা এ শুরুতে সুগার ছিল ৩৮০ , মেডিসিন রেগুলার খেত , মাঝে মাঝে ইনসুলিন ও নিতো । চিকিৎসার ২০ দিনের মাথায় সেটা এখন নেমে এসেছে ১৬০ ।। এখন সুগারের মেডিসিন ছাড়ায় আছে , কোনো সমস্যা হয়না।",
  },
];

const Review = () => {
  return (
    <div className="w-11/12 max-w-5xl mx-auto py-10" id="review">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-black mb-6">
        সুখী হওয়ার গল্প
      </h2>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        className="px-4 md:px-10"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white ark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <p className="italic  text-base md:text-lg whitespace-pre-line mb-4">
                {item.description}
              </p>
              <div className="flex flex-col items-center gap-2">
                <img
                  className="rounded-full w-16 h-16 object-cover border-2 border-primary"
                  src={item.image}
                  alt={item.heading}
                />
                <h3 className="font-semibold  text-base md:text-lg">
                  {item.heading}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;