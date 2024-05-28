import ItemList from "../../Components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import "../ItemListContainer/ItemListContainer.css";
import { useProducts } from "../../../Context/ProductosContext";
function ItemListContainer({ greeting }) {
  const { productos, loading } = useProducts();
  const { categoryId } = useParams();

  const filteredProducts = categoryId
    ? productos.filter((prod) => prod.category === categoryId)
    : productos;

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="container_store">
      {categoryId ? (
        <h1 className="Title">
          {categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}
        </h1>
      ) : (
        <h1 className="Title">{greeting}</h1>
      )}

      <ItemList productos={filteredProducts} />
    </section>
  );
}

export default ItemListContainer;
