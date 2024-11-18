import React from "react";
import img1 from "../../assets/services-details/app-development1.jpg";
import img2 from "../../assets/services-details/app-development2.jpeg";
import { allServices } from "../../constants";

const AppDevelopment = () => {
  const details = allServices[1];

  return (
    <div className="flex flex-col gap-10">
      <img
        data-aos="fade-up"
        src={img1}
        loading="lazy"
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="app development"
      />
      <div className="flex flex-col gap-4 md:px-5">
        {/* Service Title */}
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          {details.title}
        </h2>

        {/* Service Description */}
        <p data-aos="fade-up" className="description">
          {details.description}
        </p>

        {/* Points List */}
        <div data-aos="fade-up" className="pt-4">
          <h3 className="text-xl font-semibold">{details.points.heading}</h3>
          <ul className="w-full flex flex-wrap justify-between gap-3  sm:pl-6 mt-5">
            {details.points.list.map((item, index) => (
              <li
                key={index}
                className="text-base w-full rounded-lg  bg-primary hover:bg-opacity-30 p-6 hover:scale-105 transition-all duration-700"
              >
                <h3 className="text-lg font-semibold">{item.heading}</h3>
                <p> {item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <div className="mt-3 flex flex-col gap-4 md:px-5">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          What We Provide
        </h2>
        <p data-aos="fade-up" className="description">
          Whether you require a customer-facing app, an internal tool, or an
          enterprise-level solution, we develop mobile apps that deliver
          seamless user experiences, enhance customer engagement, and
          significantly boost retention rates. We emphasize the user experience,
          ensuring our applications not only captivate users but also streamline
          workflows and maximize performance.
        </p>
        <img
          data-aos="fade-up"
          src={img2}
          loading="lazy"
          className="h-[25rem] object-cover rounded-3xl object-center my-4"
          alt="app development"
        />
        <p data-aos="fade-up" className="description">
          Performance is another critical factor in mobile app development. With
          limited processing power and battery life, mobile devices demand
          optimized apps that run smoothly and efficiently. Developers must
          carefully consider factors such as memory usage, network connectivity,
          and power consumption to ensure a positive user experience.
          <br />
          <br />
          The user interface (UI) of a mobile app must be designed to fit the
          smaller screens and unique characteristics of mobile devices. This
          requires a focus on intuitive navigation, clear layouts, and
          responsive design that adapts to different screen sizes and
          orientations. Additionally, mobile apps must be designed to
          accommodate touch-based interactions, such as gestures and swipes.
          <br />
          <br />
          Connectivity is another challenge that mobile app developers must
          address. Mobile devices may operate in environments with limited or
          intermittent network connectivity. Therefore, apps must be designed to
          function effectively both online and offline, incorporating features
          such as caching, offline synchronization, and graceful degradation.
          <br />
          <br />
          The development process for mobile apps typically involves several
          stages, including ideation, design, development, testing, and
          deployment. During the ideation phase, developers must define the
          app's purpose, target audience, and key features. The design phase
          involves creating wireframes, prototypes, and the app's overall user
          interface. The development phase entails writing the code using
          appropriate programming languages and development tools.
        </p>
      </div> */}
    </div>
  );
};

export default AppDevelopment;
