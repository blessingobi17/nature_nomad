import collection1 from "../assets/images/collection_1.png";
import collection2 from "../assets/images/collection_2.png";
import { Link } from "react-router-dom";

const ShopCollection = () => {
  return (
    <main className="py-14 w-full lg:px-40 px-6">
      <section className="flex md:flex-row flex-col w-full items-center lg:gap-14 md:gap-8 gap-4 lg:pb-0 pb-16">
        <img
          src={collection1}
          alt="First Collection Image"
          className="md:h-hero h-96 lg:w-auto md:w-1/2 w-full object-cover"
          loading="lazy"
        />
        <article className="text-center">
          <h1 className="text-3xl font-semibold pb-2 font-ptSerif">
            Essential pieces always remain stylish.
          </h1>
          <p className=" text-md ">That's something to smile about, right? ​</p>
          <Link to="/men">
            <button
              className="bg-black dark:bg-white text-white dark:text-black
                  hover:bg-gray-800 dark:hover:bg-slate-100 px-10 py-3 rounded-full mt-6"
            >
              Shop now
            </button>
          </Link>
        </article>
      </section>
      <section className="flex md:flex-row-reverse flex-col w-full items-center lg:gap-14 md:gap-8 gap-4">
        <img
          src={collection2}
          alt="Second Collection Image"
          className="md:h-hero h-96 lg:w-auto md:w-1/2 w-full object-cover"
          loading="lazy"
        />
        <article className="text-center">
          <h1 className="text-3xl font-semibold pb-2 font-ptSerif">
            Our Signature Styles Are Back.
          </h1>
          <p className=" text-md ">
            Time to bring back the classics, don’t you think? ​ ​
          </p>
          <Link to="/women">
            <button
              className="bg-black dark:bg-white text-white dark:text-black
                   hover:bg-gray-800 dark:hover:bg-slate-100 px-10 py-3 rounded-full mt-6"
            >
              Shop now
            </button>
          </Link>
        </article>
      </section>
    </main>
  );
};

export default ShopCollection;
