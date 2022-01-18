import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Clayful from "clayful/client-js";
import { Col, Row } from "react-bootstrap";
import ProductInfo from "./Sections/ProductInfo";

function DetailProductPage() {
  const params = useParams();
  const productId = params.productId;

  const [item, setItem] = useState({});

  useEffect(() => {
    let Product = Clayful.Product;
    let options = {};

    Product.get(productId, options, function (err, result) {
      if (err) {
        // Error case
        console.log(err.code);
        return;
      }

      let data = result.data;
      // console.log(data);

      setItem(data);
    });
  }, [productId]);
  return (
    <div className="pageWrapper">
      <Row>
        <Col md>
          <div>
            <img
              style={{ width: "100%" }}
              src={item.thumbnail?.url}
              alt={item.name}
            />
          </div>
        </Col>
        <Col md>
          <ProductInfo detail={item} />
        </Col>
      </Row>

      <div dangerouslySetInnerHTML={{ __html: item.description }} />
    </div>
  );
}

export default DetailProductPage;
