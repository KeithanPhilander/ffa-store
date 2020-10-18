import React, { useContext } from "react";
import Product from "./Product";
import Design from "./Design";
import { ClothesContext } from "../ProductContext";

export default () => {
  const { productList, designs } = useContext(
    ClothesContext
  );

  const mensProducts = productList.filter((product) =>
    product.categories.includes("men")
  );
  const womensProducts = productList.filter((product) =>
    product.categories.includes("women")
  );
  const kidsProducts = productList.filter((product) =>
    product.categories.includes("kids")
  );
  return (
    <main>
      <div className="section-header">
        <h2 className="section-title">Our Products</h2>
        <p className="section-paragraph">
          High quality and biggest variety of T-Shirts
          online
        </p>
      </div>
      <div className="products">
        <div className="product-container">
          <h3>Men Products</h3>
          <div className="product-list">
            {mensProducts.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                imgUrls={product.imgUrls}
                price={product.price}
                inCart={product.inCart}
              />
            ))}
          </div>
        </div>

        <div className="product-container">
          <h3>Women Products</h3>
          <div className="product-list">
            {womensProducts.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                imgUrls={product.imgUrls}
                price={product.price}
                inCart={product.inCart}
              />
            ))}
          </div>
        </div>

        <div className="product-container">
          <h3>Kids Products</h3>
          <div className="product-list">
            {kidsProducts.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                imgUrls={product.imgUrls}
                price={product.price}
                inCart={product.inCart}
              />
            ))}
          </div>
        </div>

        <div className="designs-container">
          <h3>Our Designs</h3>
          <div className="designs-list">
            {designs.map((design) => (
              <Design
                key={design.id}
                id={design.id}
                title={design.title}
                imgUrls={design.imgUrls}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
