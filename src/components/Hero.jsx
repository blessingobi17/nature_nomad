import hero1 from "../assets/images/hero_1.png";
import hero2 from "../assets/images/hero_2.png";
import hero3 from "../assets/images/hero_3.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <main className="py-6 w-full lg:px-20 md:px-6">
      <section className="grid md:grid-cols-3 grid-cols-2 w-full justify-between lg:gap-4 gap-2 pb-6">
        <img
          src={hero3}
          alt="Hero Image 1"
          className="lg:h-hero md:h-80 h-56 w-full object-cover"
          loading="lazy"
        />
        <img
          src={hero2}
          alt="Hero Image 2"
          className="lg:h-hero md:h-80 h-56 w-full object-cover"
          loading="lazy"
        />
        <img
          src={hero1}
          alt="Hero Image 3"
          className="lg:h-hero md:h-80 h-56 md:block hidden object-cover"
          loading="lazy"
        />
      </section>
      <section className="flex lg:flex-row flex-col justify-between w-full items-center">
        <article className="lg:text-start text-center lg:pb-0 pb-4">
          <h1 className="lg:text-4xl text-3xl font-semibold pb-2 font-ptSerif">
            Do it in style.
          </h1>
          <p className="lg:text-xl text-md ">
            All-purpose outfits for complete comfort.
          </p>
        </article>
        <Link to="newArrivalsMen">
          <button
            className="bg-black dark:bg-white text-white dark:text-black
            hover:bg-gray-800 dark:hover:bg-slate-100 px-10 py-3 rounded-full"
          >
            Shop now
          </button>
        </Link>
      </section>
    </main>
  );
};

export default Hero;
