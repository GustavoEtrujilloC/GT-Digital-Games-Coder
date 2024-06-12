import React, { createContext, useState } from "react";

export const PriceContext = createContext();

export const PriceProvider = ({ children }) => {
  const [precioSeleccionado, setPrecioSeleccionado] = useState(0);

  return (
    <PriceContext.Provider
      value={{ precioSeleccionado, setPrecioSeleccionado }}
    >
      {children}
    </PriceContext.Provider>
  );
};
