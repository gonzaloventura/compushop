import React, { useEffect, useState } from "react";
import "./ItemListContainer.scss";
import ItemProduct from "../ItemProduct/ItemProduct";
import products from "../../utils/products.mock.js";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

function ItemListContainer({ section, data }) {
  const { category } = useParams();
  const { brand } = useParams();
  const [listProducts, setListProducts] = useState([]);

  const listCategory = products.filter(product => product.category_slug === category);

  const getProducts = new Promise((resolve, reject) => {
    if (category){
      setTimeout(() => {
      resolve(listCategory)
      }, 250);
    } else {
    setTimeout(() => {
      resolve(products);
    }, 250);
    }
  });

  useEffect(() => {
    getProducts
      .then((res) => {
        setListProducts(res);
      })
      .catch((err) => {
        console.log("la llamada falló");
      });
  } , [category, listProducts]);

  return (
    <section className="productos__destacados">
      <h2>{section}</h2>
      <div className="row row-cols-4 mt-3 mb-5">
      {
        listProducts.length > 0 ? 
        (
          listProducts.map((product) => (
              <ItemProduct key={product.id} data={product} />
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