import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";

const Footer = () => {
  const today = new Date();

  return (
    <footer className="py-16 lg:px-20 px-6 flex md:flex-row flex-col justify-between w-full">
      <section className="md:w-5/12 w-full">
        <h1 className="pb-3 font-ptSerif lg:text-4xl text-3xl font-medium">
          Join The Team
        </h1>
        <p className="text-sm pb-6">
          Sign up for exclusive deals and early access to new products.
        </p>
        <form action="">
          <input
            type="text"
            placeholder="Email"
            className="bg-gray-100 dark:bg-gray-200 text-black py-3 px-3 w-full placeholder-black outline-none"
          />
          <div className="flex pt-6 justify-between w-full items-end">
            <fieldset>
              <legend className="font-ptSerif pb-5 lg:text-4xl text-2xl font-medium">
                Email preference:
              </legend>
              <div className="flex items-center pb-2 custom-radio">
                <input
                  type="radio"
                  name="emailPreference"
                  id="women"
                  className="h-4 w-4 "
                />
                <label htmlFor="women" className="pl-3 text-lg ">
                  Women
                </label>
              </div>
              <div className="flex items-center pb-2 ">
                <input
                  type="radio"
                  name="emailPreference"
                  id="men"
                  className="h-4 w-4"
                />
                <label htmlFor="men" className="pl-3 text-lg ">
                  Men
                </label>
              </div>
              <div className="flex items-center ">
                <input
                  type="radio"
                  name="emailPreference"
                  id="both"
                  className="h-4 w-4 "
                />
                <label htmlFor="both" className="pl-3 text-lg ">
                  Both
                </label>
              </div>
            </fieldset>
            <div>
              <button
                className="bg-black dark:bg-white text-white dark:text-black
                    hover:bg-gray-800 dark:hover:bg-slate-100 lg:px-10 px-4 py-3 rounded-full mt-6 text-sm"
              >
                Sign Up Now
              </button>
            </div>
          </div>
        </form>
      </section>
      <section className="md:w-2/5 w-full md:pt-0 pt-28">
        <nav className="">
          <ul className="grid grid-cols-2 justify-between w-full gap-8 text-sm font-semibold">
            <li>Fabrics</li>
            <li>Careers</li>
            <li>Shops</li>
            <li>Sustainability</li>
            <li>Events</li>
            <li>Accessibility</li>
            <li>Returns</li>
            <li>Privacy</li>
            <li>Help Center</li>
            <li>Terms</li>
          </ul>
        </nav>
        <div className="pt-12">
          <div className="flex items-center gap-8">
            <FaInstagram className="h-5 w-5" />
            <FaFacebookSquare className="h-5 w-5" />
            <FaTiktok className="h-5 w-5" />
            <FaSpotify className="h-5 w-5" />
          </div>
          <p className="text-sm font-semibold pt-4">
            &copy;{today.getFullYear()} Nature Nomad
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
