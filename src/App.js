import React from 'react';
import Product from './Product';

function App() {
  return (
    <div className="app">
      <h1>Hello World</h1>

      <Product name="Amazon Echo" description="Your AI Assistant" price={59.99} />
      <Product name="Google Home" description="Google Home" price={99.99} />
      <Product name="Iphone Pro Max" description="The new phone" price={559.99} />
      <Product name="Amazon Echo" description="Your AI Assistant" price={59.99} />
      {/* Product, name, description price */}
      {/* Product, name, description price */}
      {/* Product, name, description price */}
      {/* Product, name, description price */}
    </div>
  )
}
export default App;
