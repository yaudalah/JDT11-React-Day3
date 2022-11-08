import { Button, Card } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

const ProductCard = ({
  productName,
  productPrice,
  productCategory,
  onClick,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <Card
        className="product-card"
        hoverable
        cover={<img alt="example" src={`https://picsum.photos/200`} />}
      >
        <Meta
          title={productName}
          description={
            <div>
              <div className="ant-card-meta-category">{productCategory}</div>
              <div className="ant-card-meta-price">Rp. {productPrice}</div>
            </div>
          }
        />
        <Button
          type="primary"
          onClick={() => navigate(`/detail-product/${onClick}`)}
        >
          Detail Product
        </Button>
      </Card>
    </>
  );
};

export default ProductCard;
