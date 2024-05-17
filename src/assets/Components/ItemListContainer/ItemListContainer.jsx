import { useState, useEffect } from "react";
import { getProducts } from "../../../mock/fakeApi";
import ItemList from "../../Components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../Services/firebase";
import "../ItemListContainer/ItemListContainer.css";

function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  /*     useEffect(()=>{
        setLoading(true)
        getProducts()
        .then((res)=> {
            if (categoryId){
                setProductos(res.filter((prod)=>prod.category === categoryId))
            }else{
                setProductos(res)
            }
        })
        .catch((error)=> console.error('Error al obtener productos:', error))
        .finally(()=> setLoading(false))

    },[categoryId])
 */
  //Firebase

  useEffect(() => {
    setLoading(true);
    const itemcollection = categoryId
      ? query(collection(db, "products"), where("category", "==", categoryId))
      : collection(db, "products");
    getDocs(itemcollection)
      .then((res) => {
        const list = res.docs.map((products) => {
          return {
            id: products.id,
            ...products.data(),
          };
        });
        setProductos(list);
      })
      .catch((error) => console.error("Error al obtener productos:", error))
      .finally(() => setLoading(false));
  }, [categoryId]);

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

      <ItemList productos={productos} />
    </section>
  );
}

export default ItemListContainer;
