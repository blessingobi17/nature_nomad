import Navbuttons from "./Navbuttons";
import { Link } from "react-router-dom";

const Content = ({ setReqType, setDropdown }) => {
  return (
    <main className="flex lg:flex-row flex-col gap-6">
      <Link
        to="/womenMenu"
        className="navBtn relative dark:after:bg-white lg:hover:after:w-full hover:after:w-0"
      >
        <Navbuttons
          buttonText="women"
          setReqType={setReqType}
          setDropdown={setDropdown}
        />
      </Link>
      <Link
        to="/menMenu"
        className="navBtn relative dark:after:bg-white lg:hover:after:w-full hover:after:w-0"
      >
        <Navbuttons
          buttonText="men"
          setReqType={setReqType}
          setDropdown={setDropdown}
        />
      </Link>
    </main>
  );
};

export default Content;
