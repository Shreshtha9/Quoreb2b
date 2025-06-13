"use client";

import { useState } from "react";

export default function Cards() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <section className="w-full flex flex-col md:flex-row justify-center items-center gap-8 px-6 py-12 bg-white">
      {/* Card 1 */}
      <article className="flex-1 bg-[#232323] rounded-2xl shadow-2xl p-8 flex flex-col items-center min-h-[390px] max-w-[900px] w-full">
        <h2 className="text-white text-xl font-semibold text-center mb-15">Are You Ready?</h2>
        <h1 className="text-white text-4xl md:text-5xl font-bold text-center font-quicksand mb-15">
          Start a New Project
        </h1>

        {!isSubmitted ? (
          <form
            onSubmit={async (e) => {
              e.preventDefault();

              const formData = new FormData(e.target);
              formData.append("access_key", "a8fe8c95-167c-41a6-bd53-987b128dff69");
              formData.append("subject", "New Project Inquiry");

              try {
                const res = await fetch("https://api.web3forms.com/submit", {
                  method: "POST",
                  body: formData,
                });

                if (res.ok) {
                  setIsSubmitted(true);
                } else {
                  throw new Error("Submission failed");
                }
              } catch (error) {
                alert("Something went wrong. Please try again.");
              }
            }}
            className="w-full flex justify-center"
            aria-label="Project inquiry form"
          >
            <div className="flex flex-col sm:flex-row w-full max-w-xl gap-4">
              <input
                type="email"
                name="email"
                required
                placeholder="Enter Your Email Address"
                className="flex-1 rounded-full bg-[#444] text-white px-6 py-4 text-base outline-none border-none placeholder-gray-300"
                aria-required="true"
                aria-label="Your email address"
              />
              <button
                type="submit"
                className="rounded-full bg-[#444] text-white px-8 py-4 text-base font-semibold hover:bg-[#00d8a6] transition focus:outline-none focus:ring-2 focus:ring-[#00d8a6] focus:ring-opacity-50"
                aria-label="Submit project inquiry"
              >
                SUBMIT
              </button>
            </div>
          </form>
        ) : (
          <p className="text-green-400 text-lg mt-6 text-center" role="status">
            Thanks! We'll get in touch soon. 💌
          </p>
        )}
      </article>

      {/* Card 2 */}
      <article className="flex-1 bg-gradient-to-r from-[#00d8a6] to-[#c6e94a] rounded-2xl shadow-2xl p-8 flex flex-col items-center min-h-[390px] max-w-[900px] w-full">
        <h2 className="text-white text-xl font-semibold text-center mb-15">What Are You Waiting For?</h2>
        <h1 className="text-white text-4xl md:text-5xl font-bold text-center font-quicksand mb-15">
          Let's Talk About Work
        </h1>
        <button 
          className="rounded-full bg-black text-white px-10 py-4 text-base font-semibold hover:bg-[#00d8a6] transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          aria-label="Start work discussion"
        >
          Start Now
        </button>
      </article>
    </section>
  );
}