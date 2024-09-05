import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <main className="w-full text-center">
      <h2 className="text-2xl font-semibold font-ptSerif">Item not found</h2>
      <p className="text-sm py-2">Well, that's disappointing</p>
      <Link to="/">
        <p className="underline">Visit Our Homepage</p>
      </Link>
    </main>
  );
};

export default Missing;
