"use client";

const DashboardButton = () => {
  const scrollToContacts = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      className='bg-[#FFA200] w-[200px] h-[50px] rounded-lg mt-3 text-white text-lg cursor-pointer hover:bg-[#FFA200]/80 duration-300'
      onClick={scrollToContacts}
    >
      Contact Us
    </button>
  );
};

export default DashboardButton;
