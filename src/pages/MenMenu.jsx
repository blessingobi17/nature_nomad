import { Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const MenMenu = () => {
  const { data } = useContext(DataContext);

  const datas = data.slice(0, 2);

  return (
    <main className="py-8 w-full lg:px-20 px-6 relative flex md:flex-row flex-col justify-between lg:gap-20 md:gap-0 gap-20">
      <aside className="flex justify-between lg:w-1/3 md:w-2/5 w-full ">
        <nav>
          <h2 className="pb-8 font-medium text-sm text-gray-500 font-ptSerif">
            Shop By
          </h2>
          <ul className="text-sm font-semibold flex flex-col gap-4">
            <li>
              <Link
                to="/newArrivalsMen"
                className="menuBtn relative dark:after:bg-white lg:hover:after:w-full hover:after:w-0"
              >
                New Arrivals
              </Link>
            </li>
            <li>
              <Link
                to="/men"
                className="menuBtn relative dark:after:bg-white lg:hover:after:w-full hover:after:w-0"
              >
                All Men's
              </Link>
            </li>
          </ul>
        </nav>
        <nav>
          <h2 className="pb-8 font-medium text-sm text-gray-500 font-ptSerif">
            Apparel + More
          </h2>
          <ul className="text-sm font-semibold flex flex-col gap-5">
            <li>
              <Link
                to="/mensTops"
                className="menuBtn relative dark:after:bg-white lg:hover:after:w-full hover:after:w-0"
              >
                Tops
              </Link>
            </li>
            <li>
              <Link
                to="/mensPants"
                className="menuBtn relative dark:after:bg-white lg:hover:after:w-full hover:after:w-0"
              >
                Pants
              </Link>
            </li>
            <li>
              <Link
                to="/mensJacket"
                className="menuBtn relative dark:after:bg-white lg:hover:after:w-full hover:after:w-0"
              >
                Sweatshirts & Jackets
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <section className="lg:w-3/5 md:w-3/6 w-full">
        <div className="flex gap-4 ">
          {datas.map((item) => (
            <article
              className="itemImg relative w-full flex flex-col items-center"
              key={item.id}
            >
              <img
                src={item.image}
                alt="Menu images"
                className="lg:h-96 md:h-72 w-full h-64 object-cover"
                loading="lazy"
              />
            </article>
          ))}
        </div>
        <Link to="/men">
          <p className="pt-4 font-medium text-sm underline">
            Summer's must-have fabric.
          </p>
        </Link>
      </section>
    </main>
  );
};

export default MenMenu;
