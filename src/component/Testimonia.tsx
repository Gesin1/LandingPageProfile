import { testimonials } from "@/lib/constants";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { companies } from "@/lib/constants";
import Image from "next/image";

const Testimonia = () => {
  return (
    <div className="pt-2 pb-20" id="testimonials">
      <h1 className="heading">
        Kind words from <span className="text-purple">satisfied clients</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10 mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
      <div className="pt-8 lg:pb-8">
        <h4 className="font-bold text-2xl md:text-4xl text-center">My Stack</h4>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 max-lg:mt-10 lg-mt-10">
        {companies.map(({ id, name, img, nameImg }) => (
          <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
            <Image
              width={0}
              height={0}
              src={img}
              alt={name}
              className="md:w-10 w-5"
            />
            <Image
              width={0}
              height={0}
              src={nameImg}
              alt={name}
              className="md:w-24 w-20"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonia;
