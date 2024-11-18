import React from "react";
import img1 from "../../assets/services-details/rpa1.jpg";
import img2 from "../../assets/services-details/rpa2.jpeg";
import { allServices } from "../../constants";

const RPA = () => {
  const details = allServices[4];

  return (
    <div className="flex flex-col gap-10">
      <img
        data-aos="fade-up"
        src={img1}
        loading="lazy"
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="rpa"
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
          At tempus aenean sapien torquent sed diam class efficitur mus morbi
          eros dictum quam augue ac laor eet ligula libero mi commodo nibh hac
          fermentum orci ad pharetra consequat justo duis turpis lorem elit dui
          consectetur magnis lacinia odio per placerat vestibulum volutpat
          mauris mollis primis imperdiet posu ere ex enim gravida cras congue
        </p>
        <img
          data-aos="fade-up"
          src={img2}
          loading="lazy"
          className="h-[25rem] object-cover rounded-3xl object-center my-4"
          alt="rpa"
        />
        <p data-aos="fade-up" className="description">
          Process Assessment and Analysis: We identify processes that are
          suitable for automation, evaluate their complexity, and assess the
          potential benefits of RPA implementation.
          <br />
          <br />
          RPA Solution Design: Our experts design and develop customized RPA
          solutions that align with your specific business requirements and
          objectives.
          <br />
          <br />
          RPA Implementation: We deploy and configure RPA software robots to
          automate the identified processes, ensuring seamless integration with
          your existing systems.
          <br />
          <br />
          Ongoing Management and Support: We provide ongoing maintenance,
          monitoring, and support for your RPA implementation, ensuring optimal
          performance and addressing any issues that may arise.
          <br />
          <br />
          Training and Knowledge Transfer: We offer training programs to equip
          your team with the skills and knowledge needed to effectively manage
          and utilize RPA technology.
        </p>
      </div> */}
    </div>
  );
};

export default RPA;
