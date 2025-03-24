"use client";

import { Sora } from "next/font/google";
import { RiFundsBoxFill } from "react-icons/ri";
import { IoWalletSharp } from "react-icons/io5";
import { MdExplore } from "react-icons/md";
import { LuBadgeCheck } from "react-icons/lu";
import Image from "next/image";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
});

const stepsList = [
  {
    icon: <LuBadgeCheck className="w-8 h-8 text-white" />,
    title: "Sign Up & Verify",
    points: [
      "Create your account with just an email and password.",
      "Complete identity verification for secure transactions.",
    ],
  },
  {
    icon: <IoWalletSharp className="w-8 h-8 text-white" />,
    title: "Set Up Your Wallet",
    points: [
      "Add your preferred fiat and crypto wallets.",
      "Secure your account with 2FA authentication.",
    ],
  },
  {
    icon: <RiFundsBoxFill className="w-8 h-8 text-white" />,
    title: "Fund Your Account",
    points: [
      "Deposit funds via bank transfer, card, or crypto.",
      "Easily swap between fiat and digital assets.",
    ],
  },
  {
    icon: <MdExplore className="w-8 h-8 text-white" />,
    title: "Explore the App",
    points: [
      "Monitor your transaction history in real-time.",
      "Access detailed reports and analytics anytime.",
    ],
  },
];

const Steps = () => {
  return (
    <section className={`pt-4 pb-20 sm:py-20 bg-[#FFFF] ${sora.className}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-12">
          {/* Header - Right Side */}
          <div className="lg:w-2/5 mt-12 lg:mt-0">
            <div className="text-left">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/hero-icon.svg"
                  alt="Hero Icon"
                  width={40}
                  height={60}
                  className="object-contain"
                />
                <p className="text-[#0066FF] text-sm font-normal">
                  HOW IT WORKS
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0066FF] leading-tight mb-6">
                Getting Started is Easy
              </h2>
              <p className="text-gray-600 text-xs md:text-sm mb-8">
                Download, set up today and start sending and receiving payments
                instantly —secure, fast, and hassle-free!
              </p>
              <button className="bg-[#0066FF] mb-10 md:mb-0 text-white px-8 py-3 rounded-md text-base font-medium hover:bg-[#0052CC] transition-colors">
                Download App
              </button>
            </div>
          </div>
          {/* Steps Grid - Left Side */}
          <div className="lg:w-3/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {stepsList.map((step, index) => (
                <div
                  key={index}
                  className="rounded-lg p-5 text-white transform transition-transform hover:scale-105"
                  style={{
                    background:
                      "linear-gradient(rgba(0, 37, 134, 1), rgba(0, 60, 214, 1))",
                  }}
                >
                  <div className="mb-4">{step.icon}</div>
                  <h3 className="text-sm font-medium mb-4">{step.title}</h3>
                  <ul className="space-y-3">
                    {step.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="text-xs text-white/90">
                        • {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
