import Header from "../components/Header";
import CatCard from "../components/CatCard";
import Newsletter from "../components/Newsletter";
import ProductSlider from "../components/ProductSlider";
import { categories } from "../data/data";
import "../styles/home.css";

/*
  The homepage contains the hero slider, category cards which link to products category pages, banner, bestseller slider, and a newsletter section.
*/
const Home = () => {
  return (
    <div>
      <Header />
      <section className="cat-container">
        {categories.map((cat) => (
          <CatCard
            path={cat.path}
            src={cat.src}
            alt={cat.alt}
            category={cat.category}
            key={cat.id}
          />
        ))}
      </section>
      <Newsletter />
      <ProductSlider />
    </div>
  );
};

export default Home;
