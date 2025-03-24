"use client";

import { Sora } from "next/font/google";
import Image from "next/image";
import Slider from "react-slick";
import { RiDoubleQuotesL } from "react-icons/ri";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
});

const testimonials = [
  {
    name: "Galien Codes",
    position: "Blockchain Developer",
    image: "/gaga.jpeg",
    quote:
      "This app has completely changed the way I handle cross-border payments! I can now send and receive money instantly, with low fees and no hidden charges. Highly recommend!",
  },
  {
    name: "Elias",
    position: "Freelancer",
    image: "/Herzron.png",
    quote:
      "As a freelancer working with international clients, this app has been a game-changer. I can receive crypto payments and convert them to fiat seamlessly. The process is smooth and secure!",
  },
  // Add more testimonials as needed
];

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/90 hover:bg-white/20 transition-colors"
  >
    <FiChevronRight className="w-6 h-6 text-blue-900" />
  </button>
);

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/90 hover:bg-white/20 transition-colors"
  >
    <FiChevronLeft className="w-6 h-6 text-blue-900" />
  </button>
);

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <section
      className={`py-20 ${sora.className}`}
      style={{
        background: "linear-gradient(rgba(0, 37, 134, 1), rgba(0, 60, 214, 1))",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Image
              src="/hero-icon.svg"
              alt="Hero Icon"
              width={40}
              height={60}
              className="object-contain"
            />
            <p className="text-gray-100 text-sm font-normal">HAPPY CUSTOMERS</p>
            <Image
              src="/left-icon.svg"
              alt="Hero Icon"
              width={40}
              height={60}
              className="object-contain"
            />
          </div>
          <h2 className="text-3xl font-bold text-white leading-tight mb-6">
            Customer's Testimonial
          </h2>
          <p className="text-white/80 font-normal text-base">
            Real stories from real users — see how our seamless app payment
            <br /> solution is transforming the way people transact globally
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto relative sm:px-12">
          <div className="absolute -left-4 -top-16 z-10 text-[120px] hidden sm:block leading-none text-[#0066FF]">
            <RiDoubleQuotesL />
          </div>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <div className="bg-white rounded-lg p-8 relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-base">{testimonial.quote}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Carousel Navigation Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          <div className="flex space-x-2">
            {[...Array(testimonials.length)].map((_, i) => (
              <button
                key={i}
                className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/50 transition-colors"
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
