import "./App.css";
import "../reset.css";
import NavBar from "/src/assets/Components/NavBar/NavBar";
import Cart from "./assets/Components/Cart/Cart";
import "./assets/Components/ItemCount/ItemCount.css";
import ItemListContainer from "./assets/Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./assets/Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Checkout from "./assets/Components/Checkout/Checkout";
import AddGames from "../AddGames/AddGames";
import Loader from "./assets/Components/Loader/Loader";
import { useState, useEffect } from "react";
import Login from "./assets/Components/Login/Login";
import Faq from "./assets/Components/Faq/Faq";
import Home from "./assets/Components/Home/Home";
import Contacto from "./assets/Components/Contacto/Contacto";
import "./mediaQuerys.css";
import "@mantine/core/styles.css";
import { Affix, MantineProvider } from "@mantine/core";
import Footer from "./assets/Components/Footer/Footer";
import AffixButton from "./assets/Components/AffixButton/AffixButton";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <MantineProvider>
      <CartProvider>
        {loading ? (
          <Loader />
        ) : (
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/categories/:categoryId"
                element={<ItemListContainer greeting="Categoria:" />}
              />
              <Route
                path="/store"
                element={<ItemListContainer greeting="Juegos Digitales" />}
              />
              <Route path="/item/:itemId" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route
                path="/faq"
                element={<Faq greeting="Preguntas Frecuentes" />}
              />
              <Route
                path="/contacto"
                element={<Contacto greeting="Contacto" />}
              />
              <Route path="/login" element={<Login />} />
              <Route path="/addgames" element={<AddGames />} /> // Solo usar
              para la actualizacion de Juegos en la base de datos
            </Routes>
            <Footer />
            <AffixButton />
          </BrowserRouter>
        )}
      </CartProvider>
    </MantineProvider>
  );
}

export default App;
