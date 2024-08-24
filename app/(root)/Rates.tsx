import Image from "next/image";
import gradeA from '@/public/gradeA.png';
import gradeB from '@/public/gradeB.jpg';
import gradeC from '@/public/gradeC.jpg';
import clockImg from '@/public/clock.png';
import leafImg from '@/public/leaf.png';

const Rates = () => {
  return (
    <section id="rates" className="px-48 py-24 flex items-center justify-center flex-col">
      <header className="flex flex-col items-center justify-center">
        <h1 className=" font-bold text-5xl">Our <span className="text-[#04773B]">Rates</span></h1>
        <p className="text-black font-semibold text-lg"><small>(Last Month)</small></p>
      </header>
      <div className="flex flex-row items-start justify-between mt-5 gap-20">
        <article className="max-w-sm w-full bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:border-[#04773B]">
          <Image
            src={gradeA}
            alt="Grade A quality tea leaves"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-[#04773B] mb-2">Grade A</h2>
            <p className="text-gray-700 mb-4">
              Grade A leaves are cultivated, skilled hands delicately pluck only the finest, tender buds and topmost leaves.
            </p>
            <div className="flex gap-4 mb-4">
              <div className="flex items-center space-x-2">
                <Image src={clockImg} alt="Duration for Grade A leaves" className="w-6 h-6" />
                <small className="text-gray-600">7 Days</small>
              </div>
              <div className="flex items-center space-x-2">
                <Image src={leafImg} alt="2 Leaves per stem for Grade A" className="w-6 h-6" />
                <small className="text-gray-600">2 Leaves</small>
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#04773B]">LKR 210</h3>
          </div>
        </article>


        <article className="max-w-sm w-full bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:border-[#04773B]">
          <Image
            src={gradeB}
            alt="Grade B quality tea leaves"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-[#04773B] mb-2">Grade B</h2>
            <p className="text-gray-700 mb-4">
              Grade B leaves are carefully selected, focusing on the most promising leaves for plucking.
            </p>
            <div className="flex gap-4 mb-4">
              <div className="flex items-center space-x-2">
                <Image src={clockImg} alt="Duration for Grade A leaves" className="w-6 h-6" />
                <small className="text-gray-600">7-10 Days</small>
              </div>
              <div className="flex items-center space-x-2">
                <Image src={leafImg} alt="2 Leaves per stem for Grade A" className="w-6 h-6" />
                <small className="text-gray-600">3 Leaves</small>
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#04773B]">LKR 200</h3>
          </div>
        </article>


        <article className="max-w-sm w-full bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:border-[#04773B]">
          <Image
            src={gradeC}
            alt="Grade B quality tea leaves"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-[#04773B] mb-2">Grade C</h2>
            <p className="text-gray-700 mb-4">
            Grade B leaves are ,Though not as selective as the harvesting process for higher grades.
            </p>
            <div className="flex gap-4 mb-4">
              <div className="flex items-center space-x-2">
                <Image src={clockImg} alt="Duration for Grade A leaves" className="w-6 h-6" />
                <small className="text-gray-600">10-13 Days</small>
              </div>
              <div className="flex items-center space-x-2">
                <Image src={leafImg} alt="2 Leaves per stem for Grade A" className="w-6 h-6" />
                <small className="text-gray-600">5+ Leaves</small>
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#04773B]">LKR 195</h3>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Rates;
