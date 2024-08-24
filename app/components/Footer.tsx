import Image from "next/image";
import whiteicon from '@/public/whiteIcon.png';
import { FaFacebook, FaWhatsapp, FaTwitter, FaInstagram, FaHome, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#204E3D] text-white flex flex-wrap py-12 px-12 md:px-12">
      <div className="w-full md:flex justify-between pb-3 mb-6 px-16">
        {/* Company Info Section */}
        <div className="mb-8 md:mb-0 flex-1">
          <div className="flex items-center mb-4">
            <Image src={whiteicon} alt="LCC Tea Collectors logo" className="w-14 md:w-16 mr-3" />
            <h3 className="text-xl md:text-2xl font-semibold">LCC Tea Collectors</h3>
          </div>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            Improve your leaf quality, and enjoy better rates and services. Reach out to our staff swiftly.
          </p>
          <div className="mt-5">
            <h1 className="text-lg font-semibold mb-4">Follow Us</h1>
            <div className="flex space-x-3">
              <a href="#" aria-label="Facebook" className="w-10 h-10 flex justify-center items-center bg-[#447261] rounded-full hover:bg-[#366150] transition-colors"><FaFacebook size={18} /></a>
              <a href="#" aria-label="WhatsApp" className="w-10 h-10 flex justify-center items-center bg-[#447261] rounded-full hover:bg-[#366150] transition-colors"><FaWhatsapp size={18} /></a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 flex justify-center items-center bg-[#447261] rounded-full hover:bg-[#366150] transition-colors"><FaTwitter size={18} /></a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 flex justify-center items-center bg-[#447261] rounded-full hover:bg-[#366150] transition-colors"><FaInstagram size={18} /></a>
            </div>
          </div>
        </div>

        {/* Company Information Section */}
        <div className="mb-8 md:mb-0 flex-1">
          <h1 className="text-lg font-semibold mb-4">Company Information</h1>
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 flex justify-center items-center bg-[#447261] rounded-full mr-4"><FaHome size={18} /></div>
            <div>
              <small className="block text-gray-400">Address</small>
              <address className="not-italic text-sm md:text-base">449 Mellawaththa Junction, Egalloya, Bulathsinhala.</address>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 flex justify-center items-center bg-[#447261] rounded-full mr-4"><FaPhone size={18} /></div>
            <div>
              <small className="block text-gray-400">Telephone</small>
              <h3 className="text-sm md:text-base">071 0927 005 / 071 1125 246</h3>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-10 h-10 flex justify-center items-center bg-[#447261] rounded-full mr-4"><FaEnvelope size={18} /></div>
            <div>
              <small className="block text-gray-400">Email</small>
              <h3 className="text-sm md:text-base">example@gmail.com</h3>
            </div>
          </div>
        </div>

        {/* Explore Section */}
        <div className="mb-8 md:mb-0 mr-32 ml-10">
          <h1 className="text-lg font-semibold mb-4">Explore</h1>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#home" className="hover:text-white transition-colors text-sm md:text-base">Home</a></li>
            <li><a href="#about" className="hover:text-white transition-colors text-sm md:text-base">About</a></li>
            <li><a href="#rates" className="hover:text-white transition-colors text-sm md:text-base">Rates</a></li>
            <li><a href="#services" className="hover:text-white transition-colors text-sm md:text-base">Services</a></li>
          </ul>
        </div>

        {/* Contact Form Section */}
        <div className="flex-1">
          <h1 className="text-lg font-semibold mb-4">Contact Us</h1>
          <form className="space-y-4">
            <textarea placeholder="Your Feedback" className="w-full p-3 rounded-md bg-[#2D6E59] text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm md:text-base" />
            <input type="email" placeholder="Your Email" className="w-full p-3 rounded-md bg-[#2D6E59] text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm md:text-base" />
            <button type="submit" className="w-full p-3 bg-[#008F0E] rounded-md hover:bg-[#257c2e] transition-colors text-sm md:text-base">Send</button>
          </form>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center justify-between mt-6 text-xs md:text-sm mx-16 border-white border-t pt-6">
        <h3 className="text-center md:text-left">© 2024 SyntaXage. All Rights Reserved</h3>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">Terms & Conditions</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
