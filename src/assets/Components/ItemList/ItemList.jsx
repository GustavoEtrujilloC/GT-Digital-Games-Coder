import React, { useState } from "react";
import Item from "../../Components/Item/Item";
import "../ItemList/ItemList.css";

const ItemList = ({ productos }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // Calcular los índices de los productos a mostrar en la página actual
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productos.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Cambiar a la siguiente página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="storeContainer">
      <div className="cardContainer">
        {currentProducts.map((producto) => (
          <Item key={producto.id} producto={producto} />
        ))}
      </div>
      <h1 className="title_pages">Paginas</h1>
      <div className="pagination">
        {Array.from({
          length: Math.ceil(productos.length / productsPerPage),
        }).map((_, index) => (
          <button
            class="button_pagination"
            key={index}
            onClick={() => paginate(index + 1)}
          >
            <div class="button-box">
              <span class="button-elem">{index + 1}</span>
              <span class="button-elem_after">{index + 1}</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default ItemList;
