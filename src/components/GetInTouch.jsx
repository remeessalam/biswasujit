import React, { useState } from "react";
import { clientDetails } from "../constants";
// import { toast, ToastContainer } from "react-toastify";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const GetInTouch = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
    // company: "",
  });
  const [spinner, setSpinner] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    trigger,
  } = useForm({ mode: "onChange", reValidateMode: "onBlur" });

  const onSubmit = async (data) => {
    setSpinner(true);

    const emailBody = `
      Name: ${data.name}\n
      Email: ${data.email}\n
      Subject: ${data.subject}\n
      Message: ${data.message}\n
      Phone: ${data.phone || "Not provided"}
    `;

    const payload = {
      to: clientDetails.email,
      subject: "You have a new message from biswasujit",
      body: emailBody,
    };

    try {
      const response = await fetch(
        "https://smtp-api-tawny.vercel.app/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        toast.success("Email sent successfully");
        reset();
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "Failed to send email");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setSpinner(false);
    }
  };
  return (
    <div id="contact" className="py-[5rem] relative">
      <div className="blurred-red-circle h-[25rem] w-[25rem] bottom-[2rem] right-3 -z-10"></div>
      <div className="blue-bg-shape bottom-[-2rem] left-[-2rem] -z-10 rotate-[-45deg]"></div>
      <div className="wrapper grid grid-cols-1 lg:grid-cols-2 justify-items-center lg:justify-items-stretch items-center gap-7">
        <div data-aos="fade-right" className="flex flex-col gap-5">
          <h1 className="heading text-center lg:text-start">
            Ready to Lead with Innovation? <br /> Let’s Start Your Project
          </h1>
          <p className="description text-center lg:text-start">
            Reach out to discover how our tech solutions can propel your
            business forward.
          </p>
        </div>
        <div data-aos="fade-left" className="flex flex-col items-start gap-3">
          <p className="gradient-text uppercase">Let's connect</p>
          <div className="bg-gradient-to-b text-white from-[#5B3E9A] to-[#30284D] rounded-2xl w-fit p-7">
            <h2 className="text-3xl font-medium">
              Connect With Our Team to Get Started!
            </h2>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 gap-3 mt-3"
            >
              <div className="grid lg:grid-cols-2 gap-3">
                <div className="">
                  <label htmlFor="">Name*</label>
                  <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    className="w-full outline-none p-3 rounded-lg text-black"
                    placeholder="Enter your name"
                    autoComplete="off"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="">
                  <label htmlFor="">Email*</label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email",
                      },
                    })}
                    className="w-full outline-none p-3 rounded-lg text-black"
                    placeholder="Enter your email"
                    // autoComplete="off"
                    onBlur={() => trigger("email")}
                    // onChange={(e) => {
                    //   trigger("email");
                    // }}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid lg:grid-cols-2 gap-3">
                <div className="">
                  <label htmlFor="">Subject*</label>
                  <input
                    type="text"
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                    className="w-full outline-none p-3 rounded-lg text-black"
                    placeholder="Enter subject"
                    autoComplete="off"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm">
                      {errors.subject.message}
                    </p>
                  )}
                </div>
                <div className="">
                  <label htmlFor="">Phone Number</label>
                  <input
                    type="tel"
                    {...register("phone", {
                      pattern: {
                        value: /^[0-9]{7,15}$/,
                        message: "Enter a valid phone number",
                      },
                    })}
                    className="w-full outline-none p-3 rounded-lg text-black"
                    placeholder="Enter your phone number"
                    autoComplete="off"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="">
                <label htmlFor="">Message*</label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  rows="4"
                  className="w-full outline-none p-3 rounded-lg text-black"
                  placeholder="Enter your message here"
                  autoComplete="off"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <button className="mt-4 bg-white text-[#433d99] px-5 py-3 rounded-full hover:bg-[#5B3E9A] hover:text-white hover:-translate-y-1 duration-300 transition-all">
                {spinner ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
