import React from 'react';

function Products() {
  const products = [
    {
      id: 1,
      name: 'Fresh Apples',
      price: '₹120/kg',
      image: 'https://i.postimg.cc/1XtKbQL9/apples.jpg'
    },
    {
      id: 2,
      name: 'Milk Packet',
      price: '₹50/litre',
      image: 'https://i.postimg.cc/Kv4RcdFv/milk.jpg'
    },
    {
      id: 3,
      name: 'Basmati Rice',
      price: '₹90/kg',
      image: 'https://i.postimg.cc/FH5p3pCL/rice.jpg'
    },
    {
      id: 4,
      name: 'Tomatoes',
      price: '₹40/kg',
      image: 'https://i.postimg.cc/4dGgQJdF/tomato.jpg'
    }
  ];

  return (
    <section className="products-section">
      <h1>Our Products</h1>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
