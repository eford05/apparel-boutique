import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../data/data";
import "../styles/products.css";

/*
  Display products according to the selected category
*/
const Products = () => {
  const cat = useParams();

  return (
    <main className="products">
      {cat.id === "clothing" &&
        products
          .filter((product) => product.category !== "shoes")
          .map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              src={product.src}
              alt={product.alt}
              sale={product.sale}
              price={product.price}
              salePrice={product.salePrice}
              title={product.title}
              desc={product.desc}
            />
          ))}
      {products
        .filter(
          (product) =>
            cat.id === product.category ||
            (cat.id === "new" && product.new) ||
            (cat.id === "best" && product.best) ||
            (cat.id === "sale" && product.sale)
        )
        .map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            src={product.src}
            alt={product.alt}
            sale={product.sale}
            price={product.price}
            salePrice={product.salePrice}
            title={product.title}
            desc={product.desc}
          />
        ))}
    </main>
  );
};

export default Products;
