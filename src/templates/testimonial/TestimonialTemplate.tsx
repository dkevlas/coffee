import ButtonsSlider from '@/components/testimonials/ButtonsSlider';
import Testimonial from '@/components/testimonials/Testimonial';
import Layout from '@/Layout';
import { ReactNode, useState } from 'react';

export default function TestimonialTemplate(): ReactNode {
  const [changeLeft, setChangeLeft] = useState<number>(0);
  const changeLeftCurrent = (index: number): void => {
    setChangeLeft(index);
  };
  return (
    <div className="bg-pale-beige text-center py-16">
      <Layout as={'div'} className="text-dark-brown">
        <span className="text-[clamp(0.8125rem,_0.7375rem_+_0.3vw,_1rem)] font-playwriteindia">
          Come and join
        </span>
        <h3 className="text-[clamp(1.125rem,_0.875rem_+_1vw,_1.75rem)] font-opensans font-[500]">
          OUR HAPPY CUSTOMERS
        </h3>
        <div className="flex relative my-4 h-[690px] sm:h-[450px] lg:h-[250px] overflow-hidden">
          <Testimonial blockCurrent={changeLeft} />
        </div>
        <ButtonsSlider
          change={changeLeftCurrent}
          positionCurrent={changeLeft}
        />
      </Layout>
    </div>
  );
}
