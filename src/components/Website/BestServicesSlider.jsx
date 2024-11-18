import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import cardItemBg from "../../assets/service-slider-item-bg.png";
import webDevIcon from "../../assets/slider-item-webdev-icon.png";
import appDevIcon from "../../assets/slider-item-appdev-icon.png";
import aiIcon from "../../assets/slider-item-ai-icon.png";
import webDevCardImg from "../../assets/slider-item-webdev.png";
import appDevCardImg from "../../assets/slider-item-appdev.png";
import aiCardImg from "../../assets/slider-item-ai.png";
import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiArrowUpRight,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const cardItems = [
  {
    id: 1,
    title: "Data Science Services",
    icon: appDevIcon,
    img: appDevCardImg,
    description:
      "Unlock the power in your data with our full-spectrum data science solutions. We help transform raw information into valuable insights by building predictive models, performing advanced analytics, and visualizing data in ways that make sense.",
    link: "/services/data-science",
  },
  {
    id: 2,
    title: "Cloud Migration Services",
    icon: webDevIcon,
    img: webDevCardImg,
    description:
      "Accelerate your digital transformation with our seamless cloud migration services. From planning and strategy to implementation and ongoing support, we handle the entire migration process with minimal downtime.",
    link: "/services/cloud-migration",
  },
  {
    id: 3,
    title: "Blockchain Solutions",
    icon: aiIcon,
    img: aiCardImg,
    description:
      "Step into the future with our innovative blockchain solutions. We help businesses embrace blockchain’s potential, creating solutions that enhance transparency, security, and efficiency.",
    link: "/services/blockchain",
  },
  {
    id: 4,
    title: "Game Development",
    icon: appDevIcon,
    img: appDevCardImg,
    description:
      "With our game development services, we bring engaging concepts to life. Our creative team builds immersive games that captivate audiences across platforms.",
    link: "/services/game-development",
  },
  {
    id: 5,
    title: "Artificial Intelligence Solutions",
    icon: webDevIcon,
    img: webDevCardImg,
    description:
      "Harness the potential of AI to drive smarter operations and deeper customer engagement. From intelligent automation to predictive analysis, we create tailored AI solutions.",
    link: "/services/artificial-intelligence",
  },
  {
    id: 6,
    title: "Web & Mobile Development",
    icon: aiIcon,
    img: aiCardImg,
    description:
      "Your digital experience starts with a solid foundation. We design and develop custom web and mobile apps that perform reliably and look great.",
    link: "/services/web-mobile-development",
  },
];

const BestServicesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    breakpoints: {
      "(min-width: 600px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: { perView: 1 },
  });

  return (
    <section className="py-[5rem] relative">
      <div className="blurred-red-circle h-[25rem] w-[25rem] top-[-10rem] left-[-10rem] -z-10"></div>
      <div className="wrapper text-center">
        <p className="gradient-text uppercase mb-3">our top services</p>
        <h1 className="heading capitalize mb-8">we provide best service</h1>
        <div className="flex items-center gap-3 md:gap-10">
          <button
            onClick={() => instanceRef.current?.prev()}
            className="text-primary text-5xl hover:-translate-y-1 hover:text-primary/90 transition-all duration-300"
          >
            <FiArrowLeftCircle />
          </button>
          <div data-aos="fade-up" ref={sliderRef} className="keen-slider">
            {cardItems.map(
              ({ description, title, link, icon, id, img }, index) => (
                <Link to={link} key={id} className="relative pb-[2rem]">
                  <div
                    className="keen-slider__slide flex flex-col items-center p-8 rounded-lg bg-[#eaf6fd]"
                    style={{ backgroundImage: `url(${cardItemBg})` }}
                  >
                    <div className="absolute flex justify-center items-center left-1/3 top-[1.3rem] rounded-full bg-white w-[3rem] h-[3rem]">
                      <img
                        loading="lazy"
                        src={icon}
                        className="w-[2rem] object-contain"
                        alt=""
                      />
                    </div>
                    <img
                      loading="lazy"
                      src={img}
                      className="w-[90%] object-contain"
                      alt=""
                    />
                    <h3 className="text-[1.5rem] font-semibold my-5 leading-tight">
                      {title}
                    </h3>
                    <p className="text-sm font-light text-gray-500">
                      {description}
                    </p>
                  </div>
                  <Link
                    to={link}
                    className="absolute left-1/2 -translate-x-1/2 bottom-[0.5rem] z-20 text-[2rem] bg-white text-primary h-[3rem] w-[3rem] rounded-full border-2 border-primary flex items-center justify-center"
                  >
                    <FiArrowUpRight />
                  </Link>
                </Link>
              )
            )}
          </div>
          <button
            onClick={() => instanceRef.current?.next()}
            className="text-primary text-5xl hover:-translate-y-1 hover:text-primary/90 transition-all duration-300"
          >
            <FiArrowRightCircle />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestServicesSlider;
