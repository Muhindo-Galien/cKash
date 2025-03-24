"use client";

import { Sora } from "next/font/google";
import Image from "next/image";
import { FiMail } from "react-icons/fi";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
});

const Newsletter = () => {
  return (
    <section className={`${sora.className}`}>
      <div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mb-30 rounded-xs"
        style={{
          background:
            "linear-gradient(rgba(0, 37, 134, 1), rgba(0, 60, 214, 1))",
        }}
      >
        <div className="text-center">
          {/* Header */}
          <div className="flex justify-center items-center gap-2 mb-4">
            <Image
              src="/hero-icon.svg"
              alt="Hero Icon"
              width={40}
              height={60}
              className="object-contain"
            />
            <p className="text-gray-100 text-sm font-normal">STAY UPDATED</p>
            <Image
              src="/left-icon.svg"
              alt="Hero Icon"
              width={40}
              height={60}
              className="object-contain"
            />
          </div>
          <h2 className="text-3xl md:text-3xl font-bold text-white leading-tight mb-4">
            Receive Newsletter &amp; Updates
          </h2>
          <p className="text-white/80 text-base  mb-8">
            Real stories from real users
          </p>

          {/* Email Input */}
          <div className="max-w-2xl mx-auto">
            <form className="flex flex-col sm:flex-row gap-4">
              <div className="flex-grow relative">
                <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-white/10 text-white placeholder-white/50 px-12 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white/20"
                />
              </div>
              <button
                type="submit"
                className="bg-white text-[#0066FF] px-8 py-3 rounded-md font-medium hover:bg-white/90 transition-colors whitespace-nowrap"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
