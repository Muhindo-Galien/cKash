"use client";

import Image from "next/image";
import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
});

const Hero = () => {
  return (
    <div
      className={`relative min-h-screen -mb-40 overflow-hidden ${sora.className}`}
    >
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("hero-bg.png")',
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 "></div>

      <div className="relative z-10 max-w-5xl mx-auto mt-20 md:mt-0 px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16 lg:py-20 lg:flex lg:items-center lg:gap-x-8">
          {/* Left Column - Text Content */}
          <div className="lg:w-1/2 lg:flex-shrink-0">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/hero-icon.svg"
                alt="Hero Icon"
                width={40}
                height={60}
                className="object-contain"
              />
              <p className="text-[#0066FF] text-sm font-normal">
                CRYPTO & FIAT AT YOUR TIPS.
              </p>
            </div>
            <h1 className="text-4xl md:text-2xl lg:text-5xl font-bold text-[#0066FF] leading-tight mb-6">
              Simplifying Global Transactions
            </h1>
            <p className="text-gray-600 text-lg md:text-base mb-8 max-w-lg">
              Unlock seamless payments with a secure, <br /> user-friendly
              experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#0066FF] text-white px-6 py-4 rounded-sm text-base font-medium hover:bg-[#0052CC] transition-colors flex items-center gap-2">
                Download App
              </button>
              <button className="border-2 border-[#0066FF] text-[#0066FF] px-6 py-3 rounded-sm text-base font-medium hover:bg-[#0066FF] hover:text-white transition-colors">
                Learn more
              </button>
            </div>
            {/* Stats */}
            <div className="mt-12 flex items-center gap-8">
              <div>
                <p className="text-xs text-gray-600">App Download</p>
                <p className="text-xl font-bold text-gray-900">106K+</p>
              </div>
              <div className="w-px h-12 bg-gray-600"></div>
              <div>
                <p className="text-xs text-gray-600">Audited by:</p>
                <p className="text-xl font-bold text-gray-900">CELO</p>
              </div>
            </div>
          </div>

          {/* Right Column - Phone Images */}
          <div className="mt-12 lg:mt-0 lg:w-1/2 relative">
            <div className="relative flex items-center justify-center h-[700px] w-full">
              <div className="absolute -right-20  w-[700px] h-[900px] transform -rotate-[5deg]">
                <Image
                  src="/CKASH.svg"
                  alt="cKash App Foreground Interface"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
