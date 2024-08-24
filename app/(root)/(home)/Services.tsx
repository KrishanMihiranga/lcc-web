import Image from 'next/image';
import timeImg from '@/public/time.png';
import fertilizerImg from '@/public/fertilizer.png';
import teaBagImg from '@/public/tea-bag.png';
import lorryImg from '@/public/lorry.png';

const ServiceCard = ({ imageSrc, title, description, additionalContent }: { imageSrc: any, title: string, description: string, additionalContent: any }) => {
  return (
    <article className="bg-white rounded-lg shadow-md  p-6 text-center  transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:border-[#04773B]">
      <Image src={imageSrc} alt={title} className="mx-auto mb-4 w-20 h-20" />
      <h3 className="text-2xl font-semibold text-[#04773B] mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {additionalContent && (
        <div className="text-gray-500 text-left mt-4">
          {additionalContent}
        </div>
      )}
    </article>
  );
};

const Services = () => {
  return (
    <section id="services" className="bg-[#F5F6F6] py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">Our <span className='text-[#04773B]'>Services</span></h1>
        <p className="text-gray-600">Providing exceptional support and products to enhance your tea business.</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        <ServiceCard
          imageSrc={timeImg}
          title="Money Advances"
          description="Access short-term financial support with our convenient money advance services, exclusive to our registered customers."
          additionalContent={undefined}
        />
        <ServiceCard
          imageSrc={fertilizerImg}
          title="Supply Fertilizers"
          description="Choose from a variety of fertilizer types to suit your tea plantation's needs."
          additionalContent={
            <ul className="mt-2 space-y-2">
              <li className="flex items-center space-x-2">
                <span className="block w-2.5 h-2.5 bg-[#04773B] rounded-full"></span>
                <span>T200 (1 year and below)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="block w-2.5 h-2.5 bg-[#04773B] rounded-full"></span>
                <span>T750 (1 year+)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="block w-2.5 h-2.5 bg-[#04773B] rounded-full"></span>
                <span>T709 (5 years+)</span>
              </li>
            </ul>
          }
        />
        <ServiceCard
          imageSrc={teaBagImg}
          title="Supply Tea Bags"
          description="Enhance your tea-drinking experience with our premium tea bag supply service."
          additionalContent={undefined}
        />
        <ServiceCard
          imageSrc={lorryImg}
          title="Transport Services"
          description="Reliable and timely tea leaf transportation, ensuring your product reaches its destination fresh and intact."
          additionalContent={undefined}
        />
      </div>
    </section>
  );
};

export default Services;
