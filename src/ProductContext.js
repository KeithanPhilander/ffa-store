import React, { useState, createContext } from "react";

export const ClothesContext = createContext({
  products: []
});

export default (props) => {
  const [products, setProducts] = useState({
    productList: [
      {
        id: 1,
        categories: ["men", "women", "kids"],
        title: "T-Shirt G",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
        price: 130,
        inCart: false,
        imgUrls: ["/images/tshirtgrey.png"]
      },
      {
        id: 2,
        categories: ["men", "women"],
        title: "Hoody B",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
        price: 180,
        inCart: false,
        imgUrls: ["/images/hoodyblack.png"]
      },
      {
        id: 3,
        categories: ["kids"],
        title: "Hoody B",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
        price: 130,
        inCart: false,
        imgUrls: ["/images/hoodyblackjr.png"]
      },
      {
        id: 4,
        categories: ["kids"],
        title: "Hoody B2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
        price: 130,
        inCart: false,
        imgUrls: ["/images/hoodyblackjr2.png"]
      },
      {
        id: 5,
        categories: ["men", "women", "kids"],
        title: "T Shirt B",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
        price: 130,
        inCart: false,
        imgUrls: ["/images/tshirtblack.png"]
      },
      {
        id: 6,
        categories: ["kids"],
        title: "T-Shirt G",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
        price: 110,
        inCart: false,
        imgUrls: ["/images/tshirtgrey.png"]
      },
      {
        id: 7,
        categories: ["kids"],
        title: "Tutu Set (Own Print)",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
        price: 200,
        inCart: false,
        imgUrls: ["/images/tshirtgrey.png"]
      }
    ],
    designs: [
      {
        id: 1,
        title: "Design 1",
        imgUrls: ["/images/Design01.svg"]
      },
      {
        id: 2,
        title: "Design 2",
        imgUrls: ["/images/Design02.svg"]
      },
      {
        id: 3,
        title: "Design 3",
        imgUrls: ["/images/Design03.svg"]
      },
      {
        id: 4,
        title: "Design 4",
        imgUrls: ["/images/Design04.svg"]
      },
      {
        id: 5,
        title: "Design 5",
        imgUrls: ["/images/Design05.svg"]
      },
      {
        id: 6,
        title: "Design 6",
        imgUrls: ["/images/Design06.svg"]
      },
      {
        id: 7,
        title: "Design 7",
        imgUrls: ["/images/Design07.svg"]
      },
      {
        id: 8,
        title: "Design 8",
        imgUrls: ["/images/Design08.svg"]
      },
      {
        id: 9,
        title: "Design 9",
        imgUrls: ["/images/Design09.svg"]
      },
      {
        id: 10,
        title: "Design 10",
        imgUrls: ["/images/Design10.svg"]
      },
      {
        id: 11,
        title: "Design 11",
        imgUrls: ["/images/Design11.svg"]
      }
    ]
  });
  return (
    <ClothesContext.Provider
      value={{
        productList: products.productList,
        designs: products.designs
      }}
    >
      {props.children}
    </ClothesContext.Provider>
  );
};
