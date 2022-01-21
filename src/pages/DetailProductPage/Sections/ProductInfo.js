import React, { useState, useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./ProductInfo.css";
import Clayful from "clayful/client-js";
import { Alert } from "react-bootstrap";

function ProductInfos({ detail }) {
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [show, setShow] = useState(false);
  const { isAuth } = useContext(AuthContext);

  const handleQuantityClick = (type) => {
    if (type === "plus") {
      setCount((prev) => prev + 1);
    } else {
      if (count === 1) return;
      setCount((prev) => prev - 1);
    }
  };

  const handleActionClick = (type) => {
    if (!isAuth) {
      alert("로그인이 필요합니다");
      navigate("/login");
      return;
    }

    let Cart = Clayful.Cart;

    let payload = {
      product: detail._id,
      variant: detail.variants[0]._id,
      quantity: count,
      shippingMethod: detail.shipping.methods[0]._id,
    };

    let options = {
      customer: localStorage.getItem("accessToken"),
    };

    Cart.addItemForMe(payload, options, function (err, result) {
      if (err) {
        // Error case
        console.log(err.code);
        return;
      }
      if (type === "cart") {
        setShow(true);
        setTimeout(() => {
          setShow(false);
        }, 3000);
      } else {
        setTimeout(() => {
          navigate("user/cart");
        }, 1000);
      }
    });
  };

  if (!detail) return;
  return (
    <div>
      {show && (
        <Alert variant="info">
          <Alert.Heading>상품이 장바구니에 담겼습니다.</Alert.Heading>
          <p>장바구니에서 확인해주세요.</p>
        </Alert>
      )}
      <p style={{ color: "#bf4800", marginBottom: 0 }}>New</p>
      <h1 style={{ marginBottom: 20 }}> {detail.name} 구입하기</h1>
      <h5>
        {detail.summary} 개별 판매 가격 {detail.price?.original.formatted}
      </h5>

      <div className="quantity">
        <p style={{ fontWeight: 600, marginBottom: 5 }}>수량</p>
        <button
          className="plus-btn"
          type="button"
          name="button"
          onClick={() => handleQuantityClick("plus")}
        >
          +
        </button>
        <input type="text" readOnly name="name" value={count} />
        <button
          className="minus-btn"
          type="button"
          name="button"
          onClick={() => handleQuantityClick("minus")}
        >
          -
        </button>
      </div>

      <br />
      <h3>총 상품 금액: {detail.price?.original.raw * count}원</h3>
      <br />

      <div
        className="product-info-action"
        onClick={() => handleActionClick("cart")}
      >
        장바구니에 담기
      </div>
      <div
        className="product-info-action"
        onClick={() => handleActionClick("paid")}
      >
        바로 구매
      </div>
    </div>
  );
}

export default ProductInfos;
