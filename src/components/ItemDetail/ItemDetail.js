import React, { useState } from "react";
import "./ItemDetail.scss";
import ItemCount from "./../ItemCount/ItemCount";
import {useListContext} from "../../context/CartContext";

const ItemDetail = ({ img, title, price, description, id }) => {

  const {addItemCart} = useListContext()
  const [count, setCount] = useState()

  function onAdd(countComp) {
    setCount(countComp);
  }

  return (
    <>
      <section className="ficha">
        <img src={img} alt="foto producto" />
        <div className="fichaDatos">
          <div className="info">
            <h3>{title}</h3>
            <p>{description}</p>
            <p className="price">{`$${price}`}</p>
          </div>
          <ItemCount onAdd={onAdd}>
            <button className='addToCart' onClick={() => addItemCart ({img: img, description: description, title: title, id: id, price: price, count: count})}>agregar al carrito {count} {count === 1 ? `item` : `items`}</button>
          </ItemCount>
        </div>
      </section>
    </>
  );
};

export default ItemDetail;
