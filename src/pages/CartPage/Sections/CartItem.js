import React from "react";
import "./CartItem.css";

function CartItem({ item, buttonHandler, index, deleteItemHandler }) {
  if (!item.product) return null;
  return (
    <div className="item">
      <div className="image">
        <img
          style={{ height: "100%" }}
          src={item.product.thumbnail.url}
          alt={item.product.name}
        />
      </div>

      <div className="description">
        <span>{item.product.name}</span>
        <span>Ball High</span>
        <span>White</span>
      </div>

      <div className="quantity">
        <button
          className="plus-btn"
          type="button"
          name="button"
          onClick={() => buttonHandler("plus", index)}
        >
          +
        </button>
        <input type="text" readOnly name="name" value={item.quantity.raw} />
        <button
          className="minus-btn"
          type="button"
          name="button"
          onClick={() => buttonHandler("minus", index)}
        >
          -
        </button>
      </div>

      <div className="total-price">₩{item.price.original.raw}</div>
      <div className="buttons">
        <span
          className="delete-btn"
          onClick={() => deleteItemHandler(item._id, item.price.original.raw)}
        >
          X
        </span>
      </div>
    </div>
  );
}

export default CartItem;
