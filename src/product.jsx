import React from "react";

const product = (props) => {
  const { product, selectGroup, setProduct } = props;
  const productDelete = (productId) => {
    console.log(productId);
    const filteredProduct = [...product];
    setProduct(filteredProduct.filter((p) => p.id !== productId));
  };
  return (
    <ul>
      {product
        .filter((product) => product.groupName === selectGroup)
        .map((product) => (
          <div key={product.id} className="product-item">
              <li key={product.id}>
                {product.productName}
              </li>
              <button
                onClick={() => productDelete(product.id)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
        ))}
    </ul>
  );
};

export default product;
