import Image from "next/image";
import greenIcon from '@/public/greenIcon.png';

const LoadingPage = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="flex items-center justify-center">
        <Image 
          src={greenIcon} 
          alt="Company Logo" 
          className="w-32 h-32 heartbeat" 
        />
      </div>
    </div>
  );
};

export default LoadingPage;
