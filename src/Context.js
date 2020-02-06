import React, { useState, useEffect } from "react";
const Context = React.createContext();

const ContextProvider = props => {
  const [photos, setPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then(res => res.json())
      .then(data => setPhotos(data));
  }, []);

  function toggleFavorite(id) {
    const updatedArr = photos.map(photo => {
      if (photo.id === id) {
        return {
          ...photo,
          isFavorite: !photo.isFavorite
        };
      }
      return photo;
    });
    setPhotos(updatedArr);
  }

  function addToCart(newItem) {
    setCartItems(prevItems => [...prevItems, newItem]);
  }

  function removeFromCart(id) {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  }

  function emptyCart() {
    setCartItems([]);
  }

  console.log(cartItems);

  return (
    <Context.Provider
      value={{
        photos,
        toggleFavorite,
        addToCart,
        removeFromCart,
        cartItems,
        emptyCart
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
export { ContextProvider, Context };
