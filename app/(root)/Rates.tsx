import Image from "next/image";
import gradeA from '@/public/gradeA.png';
import gradeB from '@/public/gradeB.jpg';
import gradeC from '@/public/gradeC.jpg';
import clockImg from '@/public/clock.png';
import leafImg from '@/public/leaf.png';

const Rates = () => {
  return (
    <section id="rates">
      <header>
        <h1>Our Rates</h1>
        <p><small>(Last Month)</small></p>
      </header>
      <div>
        <article>
          <Image src={gradeA} alt="Grade A quality tea leaves" />
          <h2>Grade A</h2>
          <p>Grade A leaves are carefully cultivated and handpicked by skilled workers, selecting only the finest, tender buds and topmost leaves.</p>
          <div>
            <div>
              <Image src={clockImg} alt="Duration for Grade A leaves" />
              <small>7 Days</small>
            </div>
            <div>
              <Image src={leafImg} alt="2 Leaves per stem for Grade A" />
              <small>2 Leaves</small>
            </div>
          </div>
          <h1>LKR 210</h1>
        </article>

        <article>
          <Image src={gradeB} alt="Grade B quality tea leaves" />
          <h2>Grade B</h2>
          <p>Grade B leaves are carefully selected, focusing on the most promising leaves for plucking.</p>
          <div>
            <div>
              <Image src={clockImg} alt="Duration for Grade B leaves" />
              <small>7-10 Days</small>
            </div>
            <div>
              <Image src={leafImg} alt="3 Leaves per stem for Grade B" />
              <small>3 Leaves</small>
            </div>
          </div>
          <h1>LKR 200</h1>
        </article>

        <article>
          <Image src={gradeC} alt="Grade C quality tea leaves" />
          <h2>Grade C</h2>
          <p>Grade C leaves, though not as selective as higher grades, are still chosen with care.</p>
          <div>
            <div>
              <Image src={clockImg} alt="Duration for Grade C leaves" />
              <small>10-13 Days</small>
            </div>
            <div>
              <Image src={leafImg} alt="5+ Leaves per stem for Grade C" />
              <small>5+ Leaves</small>
            </div>
          </div>
          <h1>LKR 195</h1>
        </article>
      </div>
    </section>
  );
}

export default Rates;
