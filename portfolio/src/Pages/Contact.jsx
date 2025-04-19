import React from "react";
export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "219fc52f-b89b-4903-9f97-4276d7edf8b4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className=" max-w-screen-lg mx-auto flex flex-col items-start justify-start   p-4 md:items-center md:justify-center md:mt-10">
      <div>
        <h1 className=" text-2xl font-medium bg-gradient-to-r from-[#FFFFFF] via-[#9AA19D] to-[#696868] text-transparent bg-clip-text">
          GET IN TOUCH
        </h1>
        <p className=" text-gray-400 mt-2">
          I would love to hear from you! Feel free to reach out for any
          inquiries or collaborations.
        </p>
        <form onSubmit={onSubmit}>
          <div className="flex flex-col gap-4 mt-4">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className=" p-2 bg-[#222831] rounded-lg text-white border border-gray-700 focus:outline-none focus:border-blue-500"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className=" p-2 bg-[#222831] rounded-lg text-white border border-gray-700 focus:outline-none focus:border-blue-500"
              required
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              className=" p-2 bg-[#222831] rounded-lg text-white border border-gray-700 focus:outline-none focus:border-blue-500"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-300 cursor-pointer"
            >
              Send Message
            </button>
          </div>
        </form>
        <span className=" hidden">{result}</span>
      </div>
    </div>
  );
}
