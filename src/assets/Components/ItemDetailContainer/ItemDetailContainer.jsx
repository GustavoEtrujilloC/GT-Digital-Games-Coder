import { useState, useEffect } from "react";
import { getProducts } from "../../../mock/fakeApi.js";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../../Services/firebase.js";
import Loader from "../Loader/Loader";
import "./ItemDetailContainer.css";
import { BiSolidMessageAltError } from "react-icons/bi";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(false);
  const [validateItem, setValidateItem] = useState(false);

  const { itemId } = useParams();

  /*     useEffect(() => {
        getProducts()
        .then((res)=> setProducto(res.find((item=> item.id === itemId))))
        .catch((error)=> console.error('Error al obtener productos:', error));
    },[]);
 */
  //FireBase

  useEffect(() => {
    setLoading(true);
    const collectionItem = collection(db, "products");
    const docRef = doc(collectionItem, itemId);
    getDoc(docRef)
      .then((res) => {
        if (res.data()) {
          setProducto({ id: res.id, ...res.data() });
        } else {
          setValidateItem(true);
        }
      })
      .catch((error) => console.error("Error al obtener productos:", error))
      .finally(() => setLoading(false));
  }, [itemId]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="ItemDetailContainer">
      {validateItem ? (
        <div className="productNotFoundContainer">
          <p className="productNotFound">Producto no encontrado</p>
          <BiSolidMessageAltError color="orange" fontSize={90} />
        </div>
      ) : (
        <ItemDetail producto={producto} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
