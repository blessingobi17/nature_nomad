import women from "../assets/images/shopWomen.png";
import men from "../assets/images/shopMen.png";
import { Link } from "react-router-dom";

const ShopMenWomen = () => {
  return (
    <main className="py-6 w-full lg:px-20 px-6 font-ptSerif">
      <section className="flex md:flex-row flex-col w-full  justify-between gap-6">
        <article className="md:w-1/2 w-full relative flex items-center justify-center  ">
          <img
            src={women}
            alt="Women Collection"
            className="lg:h-hero h-96 w-full object-cover"
            loading="lazy"
          />

          <h2 className="absolute text-4xl text-white font-bold cursor-pointer">
            <Link to="/womenMenu">Shop Women</Link>
          </h2>
        </article>
        <article className="md:w-1/2 w-full relative flex items-center justify-center">
          <img
            src={men}
            alt="Men Collection"
            className="lg:h-hero h-96 w-full object-cover"
            loading="lazy"
          />

          <h2 className="absolute text-4xl text-white font-bold cursor-pointer">
            <Link to="/menMenu">Shop Men</Link>
          </h2>
        </article>
      </section>
    </main>
  );
};

export default ShopMenWomen;
