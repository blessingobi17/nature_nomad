import Hero from "../components/Hero";
import ShopCollection from "../components/ShopCollection";
import ShopMenWomen from "../components/ShopMenWomen";
import Carousel from "../components/Carousel";

const Homepage = () => {
  return (
    <main>
      <Hero />
      <ShopCollection />
      <ShopMenWomen />
      <Carousel />
    </main>
  );
};

export default Homepage;
