import { projects } from "@/lib/constants";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

const Project = () => {
  return (
    <div className="py-24" id="project">
      <h1 className="heading">
        Some selected <span className="text-purple">project I work on</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map(
          ({ id, title, des, img, iconLists, liveLink, sourceLink }) => (
            <div
              key={id}
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            >
              <PinContainer title={liveLink} href={liveLink}>
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <Image src="/bg.png" alt="bg-img" height={0} width={0} />
                  </div>
                  <Image
                    src={img}
                    alt={title}
                    width={464}
                    height={300}
                    className="z-10 absolute bottom-0"
                  />
                </div>
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {title}
                </h1>
                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {des}
                </p>
                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {iconLists.map((icon, index) => (
                      <div
                        key={icon}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <Image
                          src={icon}
                          alt={icon}
                          width={464}
                          height={300}
                          className="p-2"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between mt-5 mb-3">
                  <div className="flex justify-center items-center border rounded-xl py-2 px-[18px] transition-all duration-700 ease-in-out  hover:shadow-1xl hover:shadow-black hover:bg-white ">
                    <Link
                      href={sourceLink}
                      className="flex lg:text-lg md:text-xs sm:text-sm text-xs text-purple"
                    >
                      Sources Code
                      <FaLocationArrow className="ms-3" color="#CBACF9" />
                    </Link>
                  </div>
                  <div className="flex justify-center items-center border rounded-xl py-2 px-3 transition-all duration-700 ease-in-out  hover:shadow-1xl hover:shadow-black hover:bg-white ">
                    <Link
                      href={liveLink}
                      className="flex lg:text-lg md:text-xs sm:text-sm text-xs text-purple"
                    >
                      Check Live Site
                      <FaLocationArrow className="ms-3" color="#CBACF9" />
                    </Link>
                  </div>
                </div>
              </PinContainer>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Project;
