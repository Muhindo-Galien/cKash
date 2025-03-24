"use client";

import { Sora } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
});

const faqs = [
  {
    question: "Lorem ipsum dolor sit amet consectetur.",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur.",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur.",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur.",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur.",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`py-20 bg-[#ffff] ${sora.className}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:gap-16 lg:items-start">
          {/* Left Column - Content */}
          <div className="lg:w-2/4 mb-12 lg:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/hero-icon.svg"
                alt="Hero Icon"
                width={40}
                height={60}
                className="object-contain"
              />
              <p className="text-[#0066FF] text-sm  font-medium ">
                HAPPY CUSTOMERS
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0066FF] leading-tight mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-sm mb-8">
              Real stories from real users — see how our seamless app payment
              solution is transforming the way people transact globally
            </p>
            <button className="hidden sm:bock bg-[#0066FF] text-white px-8 py-3 rounded-md text-base font-medium hover:bg-[#0052CC] transition-colors">
              Download App
            </button>
          </div>

          {/* Right Column - FAQs */}
          <div className="lg:w-2/4">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 last:border-b-0"
                >
                  <button
                    className="w-full flex items-center justify-between py-4 text-left focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="text-[#0066FF] text-base font-medium">
                      {faq.question}
                    </span>
                    <FiChevronDown
                      className={`w-6 h-6 text-[#0066FF] transition-transform ${
                        openIndex === index ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="pb-4">
                      <p className="text-gray-600 text-sm">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
