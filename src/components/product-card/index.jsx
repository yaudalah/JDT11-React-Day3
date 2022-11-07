import { Card } from "antd";
import React from "react";

const { Meta } = Card;

const ProductCard = ({ random }) => {
  return (
    <Card
      className="product-card"
      hoverable
      cover={
        <img alt="example" src={`https://picsum.photos/200?random=${random}`} />
      }
    >
      <Meta
        title="Dji Samsoe"
        description={
          <div>
            <div className="ant-card-meta-category">Bahan Pangan</div>
            <div className="ant-card-meta-price">
              Rp. {Math.random(1000).toString().substring(2, 10)}
            </div>
          </div>
        }
      />
    </Card>
  );
};

export default ProductCard;
