"use client";

import { Sora } from "next/font/google";
import Image from "next/image";
import {  FiGlobe } from "react-icons/fi";
import { GrTransaction } from "react-icons/gr";
import { FaGasPump } from "react-icons/fa";
import { BsCurrencyExchange } from "react-icons/bs";
import { MdWallet } from "react-icons/md";
import { AiFillSecurityScan } from "react-icons/ai";


const sora = Sora({
  subsets: ["latin"],
  display: "swap",
});

const featuresList = [
  {
    icon: <GrTransaction className="w-6 h-6 text-[#0066FF]" />,
    title: "Instant Crypto & Fiat Transfers",
    description:
      "Send and receive crypto or fiat instantly, anytime,  anywhere. No delays, no hidden fees — just fast, secure, and seamless transactions at your fingertips.",
  },
  {
    icon: <BsCurrencyExchange className="w-6 h-6 text-[#0066FF]" />,
    title: "Multi-Currency Wallet",
    description:
      "Manage crypto and fiat currencies in one secure wallet. Easily swap, store, and transact in multiple currencies without hassle.",
  },
  {
    icon: <FaGasPump className="w-6 h-6 text-[#0066FF]" />,
    title: "Low Transaction Fees",
    description:
      "Enjoy low transaction fees for crypto and fiat transfers. Make your transactions more cost-effective and efficient.",
  },
  {
    icon: <MdWallet className="w-6 h-6 text-[#0066FF]" />,
    title: "Cross border Payment",
    description:
      "Send and receive money across borders seamlessly. No more waiting for your money to arrive — make transactions quickly and efficiently.",
  },
  {
    icon: <AiFillSecurityScan className="w-6 h-6 text-[#0066FF]" />,
    title: "Secure & Encrypted Transactions",
    description:
      "Your financial transactions are protected with end-to-end encryption. Rest assured that your data is secure and your transactions are safe.",
  },
];

const Features = () => {
  return (
    <section className={`py-20 bg-white ${sora.className}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Image
              src="/hero-icon.svg"
              alt="Hero Icon"
              width={40}
              height={60}
              className="object-contain"
            />
            <p className="text-gray-600 text-sm font-normal">OUR FEATURES</p>
            <Image
              src="/left-icon.svg"
              alt="Hero Icon"
              width={40}
              height={60}
              className="object-contain"
            />
          </div>
          <h2 className="text-3xl md:text-4xl  font-bold text-[#0066FF] leading-tight mb-6">
            Built for you, <br />
            Built for Everyone
          </h2>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            Empowering seamless transactions with cutting-edge technology.
          </p>
        </div>

        <div className="lg:flex lg:items-center lg:gap-12">
          <div className="mt-12 lg:mt-0 lg:w-1/2">
            <div className="relative h-[500px] w-full">
              <Image
                src="/feature-right.png"
                alt="Feature Illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="space-y-8">
              {featuresList.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-blue-50 rounded-full">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#0066FF] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-xs">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
