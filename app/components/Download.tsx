"use client";

import { Sora } from "next/font/google";
import Image from "next/image";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
});

const Download = () => {
  return (
    <section
      className={`relative pt-4 pb-20 sm:py-20 bg-white ${sora.className}`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:flex lg:items-center lg:gap-16 ">
          {/* Left Column - Content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/hero-icon.svg"
                alt="Hero Icon"
                width={40}
                height={60}
                className="object-contain"
              />
              <p className="text-[#0066FF] text-sm font-normal">
                SEAMLESS EXPERIENCE
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0066FF] leading-tight mb-6">
              Download the App &amp; <br />
              Start Transacting
            </h2>
            <p className="text-gray-600 text-sm mb-8 max-w-lg">
              Start making seamless crypto and fiat transactions on the go.
              Safe, fast, and borderless —right from your pocket
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center gap-3 bg-[#0066FF] text-white px-6 py-3 rounded-md hover:bg-[#0052CC] transition-colors">
                <FaGooglePlay className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs">Download on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </button>

              <button className="flex items-center gap-3 bg-[#0066FF] text-white px-6 py-3 rounded-md hover:bg-[#0052CC] transition-colors">
                <FaApple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs">Download on</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </button>
            </div>
          </div>

          {/* Right Column - QR Code */}
          <div className="lg:w-1/2 hidden sm:block relative -left-20">
            <div className="w-full aspect-[3/4] max-w-[600px]  mx-auto lg:ml-auto">
              <Image
                src="/qrcod.svg"
                alt="Download QR Code"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
