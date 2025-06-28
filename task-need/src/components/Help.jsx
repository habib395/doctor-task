import React, { useState } from 'react';

const Help = () => {
    const healthData = [
        {
          "heading": "ডায়াবেটিস (Diabetes)",
          "image": "https://example.com/images/diabetes.jpg",
          "description": "ডায়াবেটিস, বাংলায় যা সুগার নামেও পরিচিত, এটি একটি ক্রনিক (দীর্ঘমেয়াদি) স্বাস্থ্য সমস্যা যেখানে শরীরের রক্তে গ্লুকোজের পরিমাণ স্বাভাবিকের চেয়ে বেড়ে যায়। এটি মূলত ইনসুলিন নামক হরমোনের অভাব বা কার্যকারিতার অভাবে ঘটে।\n\nডায়াবেটিসের প্রধানত তিনটি ধরন রয়েছে:\n1. টাইপ ১ ডায়াবেটিস: এই ধরনের ডায়াবেটিসে শরীর পর্যাপ্ত ইনসুলিন উৎপাদন করতে পারে না কারণ ইমিউন সিস্টেম ইনসুলিন উৎপাদনকারী কোষগুলোকে ধ্বংস করে দেয়। এটি সাধারণত শিশু বা তরুণদের মধ্যে দেখা যায়।\n2. টাইপ ২ ডায়াবেটিস: এটি সবচেয়ে সাধারণ ধরনের ডায়াবেটিস এবং সাধারণত প্রাপ্তবয়স্কদের মধ্যে দেখা যায়। এখানে শরীর পর্যাপ্ত ইনসুলিন উৎপাদন করতে পারলেও উৎপাদিত ইনসুলিন কার্যকরভাবে ব্যবহার করতে পারে না।\n3. গর্ভকালীন ডায়াবেটিস: এটি গর্ভাবস্থায় ঘটে এবং সাধারণত জন্মের পর ঠিক হয়ে যায়। তবে, এটি ভবিষ্যতে টাইপ ২ ডায়াবেটিসের ঝুঁকি বাড়াতে পারে।\n\nডায়াবেটিসের উপসর্গগুলির মধ্যে রয়েছে:\n- অতিরিক্ত তৃষ্ণা\n- ঘন ঘন প্রস্রাব\n- অতিরিক্ত ক্ষুধা\n- ক্লান্তি\n- ওজন হ্রাস (টাইপ ১ ডায়াবেটিসে)"
        },
        {
          "heading": "হাই প্রেসার (High Blood Pressure)",
          "image": "https://example.com/images/hypertension.jpg",
          "description": "হাই প্রেসার বা উচ্চ রক্তচাপ (Hypertension) হলো একটি সাধারণ স্বাস্থ্য সমস্যা যা তখন ঘটে যখন রক্তের চাপ ধমনীতে বৃদ্ধি পায়। এটি হৃদরোগ, স্ট্রোক এবং অন্যান্য গুরুতর স্বাস্থ্য সমস্যার ঝুঁকি বাড়াতে পারে।\n\nউচ্চ রক্তচাপের কিছু সাধারণ কারণ:\n- অতিরিক্ত ওজন বা স্থূলতা\n- অনিয়ন্ত্রিত খাদ্যাভ্যাস (অতিরিক্ত লবণ, ফাস্ট ফুড ইত্যাদি)\n- অপর্যাপ্ত শারীরিক কার্যকলাপ\n- ধূমপান এবং মদ্যপান\n- মানসিক চাপ"
        },
        {
          "heading": "স্থূলতা (Obesity)",
          "image": "https://example.com/images/obesity.jpg",
          "description": "অতিরিক্ত ওজন বা স্থূলতা হলো এমন একটি অবস্থা যেখানে শরীরে অতিরিক্ত ফ্যাট জমা হয়, যা স্বাস্থ্য সমস্যা তৈরি করতে পারে। স্থূলতা হৃদরোগ, ডায়াবেটিস, উচ্চ রক্তচাপ, এবং কিছু ধরনের ক্যান্সারের ঝুঁকি বাড়ায়।\n\nস্থূলতার কারণগুলো:\n1. অপুষ্টিকর খাদ্যাভ্যাস\n2. অপর্যাপ্ত শারীরিক কার্যকলাপ\n3. জেনেটিক কারণ\n4. মানসিক চাপ ও আবেগ\n5. হরমোনগত সমস্যা\n6. ঔষধের পার্শ্বপ্রতিক্রিয়া"
        },
        {
          "heading": "কিডনিতে পাথর (Kidney Stone)",
          "image": "https://example.com/images/kidney-stone.jpg",
          "description": "কিডনিতে পাথর বা কিডনি স্টোন হলো কঠিন খনিজ ও লবণের স্ফটিক যা কিডনিতে জমে যায়। এটি খুবই ব্যথাদায়ক হতে পারে এবং প্রায়ই প্রস্রাবের সময় সমস্যা সৃষ্টি করে।\n\nকারণসমূহ:\n1. অপর্যাপ্ত পানি পান\n2. খাদ্যাভ্যাস (অতিরিক্ত লবণ, প্রোটিন, অক্সালেট)\n3. পারিবারিক ইতিহাস\n4. স্থূলতা\n5. কিছু ঔষধ\n\nলক্ষণসমূহ:\n- তীব্র পিঠ বা পেটের ব্যথা\n- প্রস্রাবে রক্ত\n- প্রস্রাবে জ্বালা\n- ঘন ঘন প্রস্রাব\n- বমি বমি ভাব"
        },
        {
          "heading": "ফ্যাটি কিডনি (Fatty Kidney)",
          "image": "https://example.com/images/fatty-kidney.jpg",
          "description": "ফ্যাটি কিডনি বা রেনাল লিপোমাটোসিস হলো এমন একটি অবস্থা যেখানে কিডনির চারপাশে অতিরিক্ত ফ্যাট জমা হয়।\n\nকারণসমূহ:\n- স্থূলতা\n- কিডনির দীর্ঘমেয়াদি রোগ\n- হরমোনগত সমস্যা\n- দীর্ঘমেয়াদি ডায়াবেটিস বা উচ্চ রক্তচাপ\n\nউপসর্গ:\n- অনেক সময় উপসর্গ থাকে না\n- মূত্রত্যাগে সমস্যা\n- পিঠে বা কোমরে ব্যথা"
        },
        {
          "heading": "হার্ট ব্লকেজ (Heart Blockage)",
          "image": "https://example.com/images/heart-blockage.jpg",
          "description": "হার্ট ব্লকেজ হলো হৃদপিণ্ডের ধমনীতে ব্লকেজ বা বাধার সৃষ্টি হওয়া। এর ফলে হৃদপিণ্ড পর্যাপ্ত অক্সিজেন পায় না।\n\nকারণসমূহ:\n- অ্যাথেরোস্ক্লেরোসিস\n- ক্যালসিফিকেশন\n- থ্রম্বোসিস\n- ধমনীর পেশীর বৃদ্ধি\n\nলক্ষণসমূহ:\n- বুকে ব্যথা\n- শ্বাসকষ্ট\n- ক্লান্তি\n- অস্বাভাবিক হৃদস্পন্দন\n- হাত, পা বা চোয়ালে ব্যথা"
        },
        {
          "heading": "ট্রাইগ্লিসারাইড (Triglyceride)",
          "image": "https://example.com/images/triglyceride.jpg",
          "description": "ট্রাইগ্লিসারাইড হলো এক ধরণের ফ্যাট, যা অতিরিক্ত ক্যালোরি থেকে তৈরি হয়ে শরীরে সংরক্ষিত হয়।\n\nউচ্চ ট্রাইগ্লিসারাইডের কারণে:\n- হৃদরোগের ঝুঁকি\n- স্ট্রোক\n\nসতর্কতা:\n- নিয়মিত রক্ত পরীক্ষার মাধ্যমে মাত্রা পরিমাপ করা উচিত"
        },
        {
          "heading": "ফ্যাটি লিভার (Fatty Liver)",
          "image": "https://example.com/images/fatty-liver.jpg",
          "description": "ফ্যাটি লিভার হলো এমন একটি অবস্থা যেখানে লিভার কোষে অতিরিক্ত চর্বি জমা হয়। এটি AFLD ও NAFLD নামে দুই ধরনের হতে পারে।\n\nকারণসমূহ:\n1. অ্যালকোহল\n2. স্থূলতা\n3. ডায়াবেটিস\n4. উচ্চ কোলেস্টেরল\n5. অপুষ্টিকর খাবার\n6. হেপাটাইটিস\n\nলক্ষণসমূহ:\n- ক্লান্তি\n- পেটের ডানদিকে ব্যথা\n- ওজন কমা\n- বমি বমি ভাব"
        },
        {
          "heading": "কোলেস্টেরল (Cholesterol)",
          "image": "https://example.com/images/cholesterol.jpg",
          "description": "কোলেস্টেরল হলো একটি চর্বিজাতীয় পদার্থ, যা শরীরের কোষে পাওয়া যায়। এর বেশি মাত্রা হৃদরোগ ও স্ট্রোকের ঝুঁকি বাড়ায়।\n\nধরনসমূহ:\n- LDL (খারাপ)\n- HDL (ভাল)\n- ট্রাইগ্লিসারাইড\n\nকারণ:\n- অপুষ্টিকর খাদ্যাভ্যাস\n- অনিয়মিত ব্যায়াম\n- ওজন\n- ধূমপান\n- বংশগত কারণ"
        },
        {
          "heading": "হাইপারইনসুলিনমিয়া (Hyperinsulinemia)",
          "image": "https://example.com/images/hyperinsulinemia.jpg",
          "description": "হাইপারইনসুলিনমিয়া হলো এমন একটি অবস্থা যেখানে রক্তে অতিরিক্ত ইনসুলিন থাকে। এটি সাধারণত টাইপ ২ ডায়াবেটিস বা ইনসুলিন রেজিস্ট্যান্সের পূর্বলক্ষণ।\n\nকারণসমূহ:\n- ইনসুলিন রেজিস্ট্যান্স\n- স্থূলতা\n- PCOS\n- টাইপ ২ ডায়াবেটিস\n- জেনেটিক\n\nলক্ষণসমূহ:\n- পেটের চর্বি\n- অতিরিক্ত ক্ষুধা\n- ক্লান্তি\n- ব্লাড সুগারের উঠানামা"
        },
        {
          "heading": "ফ্যাটি প্যানক্রিয়াস (Fatty Pancreas)",
          "image": "https://example.com/images/fatty-pancreas.jpg",
          "description": "ফ্যাটি প্যানক্রিয়াস বা প্যানক্রিয়াটিক স্টিটোসিস হলো এমন একটি অবস্থা যেখানে প্যানক্রিয়াসে অস্বাভাবিক পরিমাণে চর্বি জমে। এটি টাইপ ২ ডায়াবেটিস বা ইনসুলিন রেজিস্ট্যান্সের সাথে সম্পর্কিত।\n\nকারণসমূহ:\n- স্থূলতা\n- মেটাবলিক সিন্ড্রোম\n- ইনসুলিন রেজিস্ট্যান্স\n- উচ্চ ফ্যাটযুক্ত খাবার\n- অ্যালকোহল\n\nউপসর্গ:\n- পেট ব্যথা\n- হজমে সমস্যা\n- ক্লান্তি"
        }
      ]

      const [selectedItem, setSelectedItem] = useState(null)

      const handleOpenModal = (item) => {
        setSelectedItem(item);
        document.getElementById('details_modal').showModal();
      };
      

    return (
        <div>
            <h2 className='text-2xl font-bold text-center py-20'>আমাদের সেবা সমূহ</h2>
            <div className='w-11/12 mx-auto grid grid-cols-3 gap-4'>
            {
                healthData.map((item, index) =>(
                    <div key={index} className="card bg-white text-black shadow-xl p-5">
                    <figure>
                      <img
                        className='rounded-full w-20 h-20 object-cover'
                        src={item.image}
                        alt={item.heading}
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="font-bold text-center text-lg">{item.heading}</h2>
                      <p className='text-sm mt-2 whitespace-pre-line'>
                        {item.description.length > 25
                          ? item.description.substring(0, 25) + '...'
                          : item.description}
                      </p>
                      <div className="card-actions  mt-4">
                      <button
                  onClick={() => handleOpenModal(item)}
                  className="text-blue-400 font-semibold text-base"
                >
                  View Detail
                </button>
                      </div>
                    </div>
                  </div>
                ))
            }
        </div>

        {/* Modal */}
      <dialog id="details_modal" className="modal">
        <div className="modal-box max-w-2xl bg-white">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {selectedItem && (
            <>
              <h3 className="font-bold text-lg mb-2">Appointment Details</h3>
              <hr />
              <p className="whitespace-pre-line text-sm text-gray-700 py-2">
                {selectedItem.description}
              </p>
              <hr />
              <div className='flex gap-4 py-3'>
                <button className='btn btn-primary'>Book Appoinment Now</button> 
                <button className='btn bg-white text-black'>Cancel</button>
              </div>
            </>
          )}
        </div>
      </dialog>
      {/* add youtube vedio here */}
      <div className='py-20'>
      <div className="flex w-11/12 mx-auto gap-[2px]">
  <div className="w-full aspect-video my-1">
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/pj_bVgANAxg?si=v1NVMDv0fgFbnzke"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
  <div className="w-full aspect-video my-1">
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/pj_bVgANAxg?si=v1NVMDv0fgFbnzke"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</div>
<div className="flex w-11/12 mx-auto gap-[2px]">
  <div className="w-full aspect-video my-1">
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/pj_bVgANAxg?si=v1NVMDv0fgFbnzke"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
  <div className="w-full aspect-video my-1">
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/pj_bVgANAxg?si=v1NVMDv0fgFbnzke"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</div>
<div className="flex w-11/12 mx-auto gap-[2px]">
  <div className="w-full aspect-video my-1">
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/pj_bVgANAxg?si=v1NVMDv0fgFbnzke"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
  <div className="w-full aspect-video my-1">
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/pj_bVgANAxg?si=v1NVMDv0fgFbnzke"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</div>
      </div>

        </div>
    );
};

export default Help;