import React, { useEffect, useState } from "react";
import "./ItemListContainer.scss";
import ItemProduct from "../ItemProduct/ItemProduct";
import products from "../../utils/products.mock.js";
import { Spinner } from "react-bootstrap";
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

function ItemListContainer({ section }) {
  const [listProducts, setListProducts] = useState([]);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 250);
  });

  useEffect(() => {
    getProducts
      .then((res) => {
        setListProducts(res);
      })
      .catch((err) => {
        console.log("la llamada falló");
      });
  }, []);

  return (
    <section className="productos__destacados">
      <h2>{section}</h2>
      <div className="row row-cols-4 mt-3 mb-5">
      {
        listProducts.length > 0 ? 
        (
          listProducts.map((product) => (
            <div className="col-12 col-lg-3 listProducts">
              <ItemProduct key={product.id} data={product} />
            </div>
          ))
        ) 
        : 
        (
            <Spinner animation="border" role="status" />
        ) 
      }
      </div>
    </section>
  );
}

export default ItemListContainer;