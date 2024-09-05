import women from "../assets/images/shopWomen.png";
import men from "../assets/images/shopMen.png";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <section className="pt-14">
      <h2 className="text-2xl font-medium pb-2 text-center">
        Not sure where to start ?
        <span className="block pt-1 pb-10">
          Check out Best Sellers for Men and Women.
        </span>
      </h2>
      <div className="flex md:flex-row flex-col w-full justify-between gap-6">
        <article className="md:w-1/2 w-full relative flex items-center justify-center  ">
          <img src={women} alt="" className="h-96 w-full object-cover" />
          <button className="bg-white text-black px-10 py-3 rounded-full mt-6 absolute">
            <Link to="/womenMenu">Shop Women</Link>
          </button>
        </article>
        <article className="md:w-1/2 w-full relative flex items-center justify-center">
          <img src={men} alt="" className=" h-96 w-full object-cover" />
          <button className="bg-white text-black px-10 py-3 rounded-full mt-6 absolute">
            <Link to="/menMenu">Shop Men</Link>
          </button>
        </article>
      </div>
    </section>
  );
};

export default EmptyCart;
