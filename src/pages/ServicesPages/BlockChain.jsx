import React from "react";
import img1 from "../../assets/services-details/blockchain1.jpeg";
import img2 from "../../assets/services-details/blockchain2.jpeg";
import { allServices } from "../../constants";

const BlockChain = () => {
  const details = allServices[2];

  return (
    <div className="flex flex-col gap-10">
      <img
        data-aos="fade-up"
        src={img1}
        loading="lazy"
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="blockchain"
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
          As a cutting-edge technology, blockchain offers a decentralized and
          immutable ledger system that can revolutionize various industries. We
          specialize in providing comprehensive blockchain development services,
          tailored to meet your specific needs.
        </p>
        <img
          data-aos="fade-up"
          src={img2}
          loading="lazy"
          className="h-[25rem] object-contain rounded-3xl object-center my-4"
          alt="blockchain"
        />
        <p data-aos="fade-up" className="description">
          Custom Blockchain Development: We create bespoke blockchain solutions
          that align with your business goals and requirements. From
          cryptocurrency platforms to supply chain management systems, we can
          develop blockchain applications that address your unique challenges.
          <br />
          <br />
          Smart Contract Development: Smart contracts are self-executing
          contracts with terms directly written into code. We develop secure and
          efficient smart contracts that automate processes, reduce
          intermediaries, and ensure transparency.
          <br />
          <br />
          Blockchain Consulting: Our expert consultants can provide guidance on
          blockchain technology, its potential applications, and the best
          approach to implement it in your organization. We help you assess your
          needs, identify opportunities, and navigate the complexities of
          blockchain development.
          <br />
          <br />
          Blockchain Integration: We integrate blockchain solutions with your
          existing systems and infrastructure to ensure seamless
          interoperability. Our team has experience integrating blockchain with
          various technologies, including databases, APIs, and cloud platforms.
          <br />
          <br />
          Blockchain Security: Security is a paramount concern in blockchain
          development. We employ robust security measures to protect your
          blockchain network and data from vulnerabilities and attacks. Our
          services include security audits, vulnerability assessments, and
          implementation of best practices.
        </p>
      </div> */}
    </div>
  );
};

export default BlockChain;
