import React from "react";
import PageBanner from "../components/Website/PageBanner";
import Header from "../components/Website/Header";
import Footer from "../components/Website/Footer";
import img1 from "../assets/aboutus-1.jpg";
import img2 from "../assets/aboutus-2.png";
import img3 from "../assets/aboutus-3.jpeg";
import { Link } from "react-router-dom";
import Testimonials from "../components/Testimonials";
import ClientsLogoSlider from "../components/Website/ClientsLogoSlider";

const AboutUs = () => {
  return (
    <>
      <Header />
      <PageBanner title={"About Us"} />
      <section className="py-[5rem] wrapper grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col">
          <h1 data-aos="fade-right" className="heading">
            Your Trusted Partner in Digital Transformation and Next-Generation
            Technology Solutions
          </h1>
          <p data-aos="fade-right" className="description mt-4">
            At BISWASUJIT, we harness the power of technology to fuel your
            business growth. Based in the heart of [location], we are at the
            forefront of delivering innovative, scalable, and results-driven
            solutions across a range of cutting-edge technologies. Our mission
            is simple: to empower businesses like yours to succeed in an
            ever-evolving digital landscape. In today’s fast-paced, tech-driven
            world, staying ahead of the curve is not just a competitive
            advantage—it’s a necessity. We believe that embracing the right
            technologies can completely transform how businesses operate, engage
            customers, and achieve success. That’s why we work closely with our
            clients to create tailor-made digital strategies that leverage
            innovation to drive tangible results. We recognize that navigating
            the complexities of the digital landscape can be both challenging
            and exhilarating. As your trusted partner, we empower you to harness
            the transformative power of technology, turning challenges into
            opportunities and aspirations into realities. Based in [location],
            we stand at the intersection of innovation and strategy, committed
            to helping businesses like yours thrive in a fast-paced environment.
          </p>
        </div>
        <img
          data-aos="fade-left"
          loading="lazy"
          src={img1}
          alt="about us"
          className="w-full rounded-lg h-[40vh] lg:h-full object-cover"
        />
      </section>

      <section className="wrapper">
        <h1 data-aos="fade-right" className="heading">
          Who Are We?
        </h1>
        <p data-aos="fade-right" className="description mt-4">
          At BISWASUJIT, we believe technology transcends mere tools—it is the
          cornerstone of sustainable growth and long-lasting success. Nestled in
          [location], our team comprises passionate innovators and seasoned
          industry experts dedicated to delivering pioneering, future-ready
          solutions. Our mission is unequivocal: to empower businesses of every
          size to flourish in the digital age, leveraging innovation as a
          catalyst for transformation and advancement.
        </p>
        <img
          data-aos="fade-right"
          loading="lazy"
          src={img2}
          alt="about us"
          className="w-full rounded-lg h-[40vh] sm:h-[70vh] object-cover mt-7"
        />
      </section>

      <section className="wrapper my-[5rem]">
        <div
          data-aos="fade-up"
          className="py-[5rem] px-4 rounded-md text-white bg-[#17012C8A] flex flex-col items-center gap-2 text-center"
        >
          <h1 className="heading">Be the First With Us</h1>
          <p className="description">
            There are many reasons to feel overwhelmed and discouraged about
            your situation, but at BISWASUJIT, we believe every challenge is an
            opportunity for growth and transformation. Together, we can overcome
            obstacles and turn setbacks into stepping stones toward a brighter
            future.
          </p>
          <Link
            to="/contact-us"
            className="rounded-sm transition-all duration-300 hover:-translate-y-1 bg-[#734D88] hover:bg-[#734D88]/90 px-10 py-3 w-fit mt-5"
          >
            Get Started
          </Link>
        </div>
      </section>

      <section className="pb-[5rem] wrapper text-center">
        <h1 data-aos="fade-up" className="heading">
          Innovative Alliances
        </h1>
        <div className="grid lg:grid-cols-2 gap-7 mt-7">
          <div data-aos="fade-right" className="">
            <h2 className="text-2xl font-semibold">
              "Brands We Collaborate With"
            </h2>
            <p className="description mt-4 text-start">
              At BISWASUJIT, we believe in the power of collaboration. By
              forming innovative alliances with industry leaders, technology
              providers, and thought partners, we bring the best solutions to
              the table. These strategic partnerships help us deliver
              cutting-edge technology, foster creative problem-solving, and
              drive exceptional results for our clients. Our commitment to
              building strong, forward-thinking alliances allows us to stay
              ahead of the curve, ensuring that your business always benefits
              from the latest advancements in the digital landscape.
            </p>
            <ul className="flex flex-col gap-2 list-disc text-start mt-5 ml-5 description">
              <li>
                <strong>Strategic Partnerships:</strong> Collaborating with key
                players in the industry to elevate BISWASUJIT’s impact in
                delivering advanced digital solutions.
              </li>
              <li>
                <strong>Shared Vision:</strong> Working hand-in-hand with
                innovative partners to create groundbreaking solutions that
                reshape industries and drive progress.
              </li>
              <li>
                <strong>Industry Expertise:</strong> Leveraging our extensive
                industry knowledge and experience to address complex challenges
                and deliver effective, tailored solutions.
              </li>
              <li>
                <strong>Mutual Growth:</strong> Building long-term, mutually
                beneficial relationships that fuel collective success and
                strengthen BISWASUJIT’s position in the digital landscape.
              </li>
            </ul>
          </div>
          <img
            data-aos="fade-left"
            loading="lazy"
            src={img3}
            alt="about us"
            className="w-full rounded-lg h-[50vh] lg:h-full object-cover object-center mt-7"
          />
        </div>
      </section>
      <Testimonials />
      {/* <ClientsLogoSlider /> */}
      <Footer />
    </>
  );
};

export default AboutUs;
