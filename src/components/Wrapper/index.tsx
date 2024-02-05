import image from "../../assets/khizar.png";
import { porfolios } from "./constant";
import Profile from "../Profile";

const Wrapper = () => {
  return (
    <section className="bg-dark-grey max-w-[90vw] mx-auto rounded-md mt-24 p-8 md:max-w-[24rem]">
      <figure className="mx-auto w-20 h-20 mb-4 cursor-pointer overflow-hidden">
        <img
          className="w-full h-full object-cover rounded-full transition-all ease-linear delay-300"
          alt="khizar_kamal"
          src={image}
          loading="lazy"
        ></img>
      </figure>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl text-white font-bold text-center">
          Khizar Kamal
        </h1>
        <p className="text-primary-green text-center text-md flex gap-1 justify-center items-center my-2">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
          </span>
          Pakistan, Lahore
        </p>
        <p className="text-center text-xs text-white">
          "Experienced Front-end Developer proficient in React.js, Tailwind CSS,
          TypeScript, and Next.js, showcasing excellence in these technologies."
        </p>
      </div>
      <div>
        <ul className="flex flex-col gap-4 mt-6">
          {porfolios.map((item) => {
            return <Profile key={item.id} {...item}></Profile>;
          })}
        </ul>
      </div>
    </section>
  );
};

export default Wrapper;
