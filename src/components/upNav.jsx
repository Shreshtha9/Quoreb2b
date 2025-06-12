"use client";
import { FaLinkedinIn } from "react-icons/fa";

export default function UpNav() {
  return (
    <div className="w-full bg-[#2c2c2c] text-white text-sm py-6 px-8 flex justify-between items-center ">
      {/* Empty space on the left (matches your image) */}
      <div></div>

      {/* LinkedIn Icon on the right */}
      <a
        href="https://www.linkedin.com/company/quoreb2bmarketing/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-400 transition duration-300"
      >
        <FaLinkedinIn size={18} />
      </a>
    </div>
  );
}
