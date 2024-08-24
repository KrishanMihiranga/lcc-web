import Image, { StaticImageData } from "next/image";
import contactbg from '@/public/teagardenwp.png';
import pic from '@/public/pic.png';
import parami from '@/public/parami.jpg'; 
import { FaFacebook, FaWhatsapp, FaInstagram, FaTwitter, FaPhone } from "react-icons/fa";
import vecbg from '@/public/leavesvecbg.png';
import logoWhite from '@/public/lccLogoWhite.png';

const ContactCard = ({ name, role, phone, imgSrc }: { name: string, role: string, phone: string, imgSrc: StaticImageData }) => {
  return (
    <article className="bg-white max-w-[400px] p-8 rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 duration-300">
      <div className="relative w-32 h-32 mb-4 p-2">
        <Image src={imgSrc} alt={name} className="rounded-full object-cover" />
        <div className="absolute inset-0 rounded-full border-2 border-green-500 border-dashed"></div>
      </div>
      <h2 className="text-xl font-semibold text-[#04773B]">{name}</h2>
      <p className="text-sm text-gray-600 mb-2">{role}</p>
      <p className="text-gray-700 flex items-center gap-2 mb-4">
        <FaPhone className="text-green-500" /> {phone}
      </p>
      <hr className="w-full mb-4" />
      <div className="flex gap-4 text-gray-500 text-2xl">
        <FaFacebook className="hover:text-[#4267B2] cursor-pointer" />
        <FaWhatsapp className="hover:text-[#25D366] cursor-pointer" />
        <FaInstagram className="hover:text-[#C13584] cursor-pointer" />
        <FaTwitter className="hover:text-[#1DA1F2] cursor-pointer" />
      </div>
    </article>
  );
};

const Contact = () => {
  return (
    <>
      <section id='contact' className='bg-[#F5F6F6] relative'>
        <div className="relative">
          <Image src={contactbg} alt="Beautiful tea garden landscape" className="w-full object-cover max-h-[600px]" />
          <div className="bg-black absolute top-0 left-0 w-full h-full opacity-20"></div>
          <div className="text-center absolute top-1/2 transform -translate-y-1/2 w-full">
            <h1 className="text-white text-4xl font-bold">
              Meet Our Dedicated Team <br /> Ready to Assist You
            </h1>
          </div>
        </div>

        <div className="px-10 md:px-24 lg:px-48 relative -top-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ContactCard
            name="Ishan Ravindu"
            role="Manager"
            phone="071 112 5246"
            imgSrc={pic}
          />
          <ContactCard
            name="Parami Ashinsana"
            role="Assistant Manager"
            phone="071 112 5257"
            imgSrc={parami}
          />
          <ContactCard
            name="Kasun Jayasooriya"
            role="Customer Support"
            phone="071 112 5288"
            imgSrc={pic}
          />
        </div>
      </section>
      <section className="relative flex justify-center items-center bg-[#F5F6F6] pb-28">
        <Image src={vecbg} alt="Vector background" className="w-full object-cover" />
        <article className="absolute p-4 rounded-lg glassmorphism text-white max-w-3xl text-center">
          <div className="flex flex-col items-center border-white border-2 rounded-lg p-4">
            <div className="rounded-full overflow-hidden w-32 h-32 mb-4 border-4 border-white">
              <Image src={pic} alt="Portrait of G.V. Darmasiri" className="w-full h-full object-cover" />
            </div>
            <p className="text-lg mb-4">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
            </p>
            <h1 className="text-2xl font-bold mb-2">G.V. Darmasiri</h1>
            <h3 className="text-lg mb-1">Founder</h3>
            <h4 className="text-md mb-6">Lal Construction Contractors</h4>
            <Image src={logoWhite} alt="Lal Construction Contractors logo" className="w-20"/>
          </div>
        </article>
      </section>
    </>
  );
};

export default Contact;
