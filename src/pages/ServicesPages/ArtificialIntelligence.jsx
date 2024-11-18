import React from "react";
import img1 from "../../assets/services-details/ai1.jpg";
import img2 from "../../assets/services-details/ai2.jpeg";
import { allServices } from "../../constants";

const ArtificialIntelligence = () => {
  const details = allServices[3];

  return (
    <div className="flex flex-col gap-10">
      <img
        data-aos="fade-up"
        src={img1}
        loading="lazy"
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="ai"
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
          From developing machine learning models to creating AI-powered
          chatbots, we assist you in automating processes, enhancing customer
          experiences, and gaining deeper insights into your operations. Our
          solutions enable you to make smarter, data-driven decisions,
          positioning you ahead in the competitive landscape.
        </p>
        <img
          data-aos="fade-up"
          src={img2}
          loading="lazy"
          className="h-[25rem] object-cover rounded-3xl object-center my-4"
          alt="ai"
        />
        <p data-aos="fade-up" className="description">
          AI development has a wide range of applications across various
          domains. In healthcare, AI is being used to diagnose diseases, develop
          new treatments, and personalize patient care. In finance, AI-powered
          systems are used for fraud detection, risk assessment, and algorithmic
          trading. In manufacturing, AI is driving automation, improving
          efficiency, and enhancing product quality.
          <br />
          <br />
          One of the most significant trends in AI development is the emergence
          of natural language processing (NLP). NLP enables machines to
          understand, interpret, and generate human language, leading to
          advancements in chatbots, virtual assistants, and language
          translation. Another exciting area of AI development is computer
          vision, which allows machines to process and understand visual
          information, enabling applications in image recognition, autonomous
          vehicles, and augmented reality.
          <br />
          <br />
          However, the development of AI also raises ethical concerns. Issues
          such as bias, privacy, and job displacement must be carefully
          considered. Ensuring that AI is developed and used responsibly is
          crucial to harnessing its benefits while mitigating its potential
          risks.
          <br />
          <br />
          As AI continues to evolve, it is essential to invest in research and
          development to push the boundaries of what is possible. By fostering
          collaboration between academia, industry, and governments, we can
          create a future where AI is used to benefit humanity and address
          global challenges.
        </p>
      </div> */}
    </div>
  );
};

export default ArtificialIntelligence;
