import React from 'react';
export default function Contact() {
  return (
    <div id='contact' className="bg-black h-screen">
      <h2 className="text-white text-[40px] font-extrabold text-center py-30">
        Contact <span className="text-color">Me !</span>
      </h2>
      <form action="#" method="POST" className="flex flex-col items-center space-y-4">
        <div className="flex flex-col w-[90%] md:flex-row space-y-4 md:space-x-4 md:space-y-0 md:w-[80%]">
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full p-2 rounded-md bg-[#323946]"
          />
          <input
            type="email"
            placeholder="E-Mail Address"
            required
            className="w-full p-2 rounded-md bg-[#323946]"
          />
        </div>
        <div className="flex flex-col w-[90%] md:flex-row space-y-4 md:space-x-4 md:space-y-0 md:w-[80%]">   
          <input
            type="number"
            placeholder="Mobile Number"
            required
            className="w-full p-2 rounded-md bg-[#323946]"
          />
          <input
            type="text"
            placeholder="E-Mail Subject"
            required
            className="w-full p-2 rounded-md bg-[#323946]"
          />
        </div>
        <textarea
          placeholder="Your Message"
          className="w-[90%] p-2 rounded-md h-32 md:w-[80%] bg-[#323946]"
        ></textarea>
        <input
          type="submit"
          value="Send Message"
          className=" w-[90%] p-2 rounded-md bg-color text-white cursor-pointer hover:bg-[red] md:w-[80%] md:py-3 md:text-[25px] "
        />
      </form>
    </div>
  );
}
