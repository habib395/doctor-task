import { Link } from "react-router-dom";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration submitted!");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-4 py-10">
        রেজিস্ট্রেশন করুন
      </h1>

      <div className="flex items-center justify-center py-10">
        <div className="w-11/12 md:w-3/4 p-10 bg-white rounded-lg shadow-md">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-700">Register</h1>
            <p className="text-gray-500 text-sm">Create your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-gray-800">
            {/* Name & Designation */}
            <div className="flex gap-6">
              <div className="w-1/2">
                <label htmlFor="name" className="text-sm font-medium">নামঃ *</label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full px-3 py-2 border bg-white rounded-md focus:ring-2 focus:ring-yellow-500 text-sm"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="designation" className="text-sm font-medium">পদবীঃ *</label>
                <input
                  id="designation"
                  type="text"
                  required
                  placeholder="Your Designation"
                  className="w-full px-3 py-2 border bg-white rounded-md focus:ring-2 focus:ring-yellow-500 text-sm"
                />
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="flex gap-6">
              <div className="w-1/2">
                <label htmlFor="primaryPhone" className="text-sm font-medium">নাম্বারঃ *</label>
                <input
                  id="primaryPhone"
                  type="tel"
                  required
                  placeholder="Primary Number"
                  className="w-full px-3 py-2 border bg-white rounded-md focus:ring-2 focus:ring-yellow-500 text-sm"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="secondaryPhone" className="text-sm font-medium">নাম্বারঃ (অন্যান্য)</label>
                <input
                  id="secondaryPhone"
                  type="tel"
                  placeholder="Other Number"
                  className="w-full px-3 py-2 border bg-white rounded-md focus:ring-2 focus:ring-yellow-500 text-sm"
                />
              </div>
            </div>

            {/* Country & Email */}
            <div className="flex gap-6">
              <div className="w-1/2">
                <label htmlFor="country" className="text-sm font-medium">আপনার দেশ নির্বাচন করুনঃ *</label>
                <input
                  id="country"
                  type="text"
                  required
                  placeholder="Country"
                  className="w-full px-3 py-2 border bg-white rounded-md focus:ring-2 focus:ring-yellow-500 text-sm"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="email" className="text-sm font-medium">ইমেইলঃ</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  className="w-full px-3 py-2 border bg-white rounded-md focus:ring-2 focus:ring-yellow-500 text-sm"
                />
              </div>
            </div>

            {/* Passwords */}
            <div className="flex gap-6">
              <div className="w-1/2">
                <label htmlFor="password" className="text-sm font-medium">পাসওয়ার্ডঃ *</label>
                <input
                  id="password"
                  type="password"
                  required
                  placeholder="Password"
                  autoComplete="new-password"
                  className="w-full px-3 py-2 border bg-white rounded-md focus:ring-2 focus:ring-yellow-500 text-sm"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="confirmPassword" className="text-sm font-medium">পুনরায়ঃ *</label>
                <input
                  id="confirmPassword"
                  type="password"
                  required
                  placeholder="Confirm Password"
                  className="w-full px-3 py-2 border bg-white rounded-md focus:ring-2 focus:ring-yellow-500 text-sm"
                />
              </div>
            </div>

            {/* DOB and Role */}
            <div className="flex gap-6">
              <div className="w-1/2">
                <label htmlFor="dob" className="text-sm font-medium">জন্ম তারিখঃ *</label>
                <input
                  id="dob"
                  type="date"
                  required
                  className="w-full px-3 py-2 border bg-white rounded-md focus:ring-2 focus:ring-yellow-500 text-sm"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="role" className="text-sm font-medium">আমি একজনঃ *</label>
                <input
                  id="role"
                  type="text"
                  required
                  placeholder="Ex: ডাক্তার, নার্স"
                  className="w-full px-3 py-2 border bg-white rounded-md focus:ring-2 focus:ring-yellow-500 text-sm"
                />
              </div>
            </div>

            {/* Terms */}
            <p className="pt-3 text-xs text-gray-600">
              * দেওয়ায় ঘর গুলো পুরোন করা বাধ্যতামূলক
            </p>

            {/* Submit */}
            <button
              type="submit"
              className="btn btn-primary text-white text-sm mt-4 px-6"
            >
              রেজিস্ট্রেশন করুন
            </button>

            <p className="text-sm pt-2">
              ইতোমধ্যেই রেজিস্ট্রেশন করেছেন?{" "}
              <Link to="/login" className="text-blue-600 hover:underline">
                লগইন করুন
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;