import React, { useState } from 'react';
import CSS from './products.module.css';
import plane from '../../assets/plane.png';
import { ProductsData } from '../../data/products';
{/*import { useAutoAnimate } from '@formkit/auto-animate';*/}

const Products = () => {
  const [Menuproducts, setMenuproducts] = useState(ProductsData);

  const filter = (type) => {
    const filteredProducts = ProductsData.filter((product) => product.type === type);
    setMenuproducts(filteredProducts);
  };

  const handleShopNowClick = (product) => {
    const successMessage = `${product.name} ${product.price}$ added to cart successfully!`;
    alert(successMessage);
  };

  return (
    <div className={CSS.container}>
      <img src={plane} alt="" />
      <h1>Our Featured Product</h1>

      <div className={CSS.products}>
        <ul className={CSS.menu}>
          <li onClick={() => setMenuproducts(ProductsData)}>All</li>
          <li onClick={() => filter("skin care")}>Skin Care</li>
          <li onClick={() => filter("conditioner")}>Conditioner</li>
          <li onClick={() => filter("foundation")}>Foundation</li>
        </ul>

        <div className={CSS.list}>
          {Menuproducts.map((product, i) => (
            <div className={CSS.product} key={i}>
              <div className="left-s">
                <div className="name">
                  <span>{product.name}</span>
                  <span>{product.detail}</span>
                </div>
                <span>{product.price}$</span>
                <button onClick={() => handleShopNowClick(product)}>Shop Now</button>
              </div>
              <img src={product.img} alt="" className='img-p'/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
