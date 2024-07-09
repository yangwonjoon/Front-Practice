import React from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
}

const App: React.FC = () => {
  const market: string[] = ['생선', '과일'];
  const fish: string[] = ['고등어', '갈치', '대게', '연어', '삼치'];
  const fishPrice: number[] = [1000, 2000, 3000, 4000, 2000];
  const fruit: string[] = ['사과', '멜론', '포도', '복숭아'];
  const fruitPrice: number[] = [2000, 3000, 6000, 2000];

  const createProductObj = (products: string[], prices: number[]): Product[] => {
    return products.map((product, index) => ({
      id: product, 
      name: product,
      price: prices[index]
    }));
  }

  const fishProducts: Product[] = createProductObj(fish, fishPrice);
  const fruitProducts: Product[] = createProductObj(fruit, fruitPrice);

  return (
    <div>
      <h1>생선</h1>
      {fishProducts.map((product) => (
        <div key={product.id}>
          {product.name} {product.price}원
        </div>
      ))}
      <h1>과일</h1>
      {fruitProducts.map((product) => (
        <div key={product.id}>
          {product.name} {product.price}원
        </div>
      ))}
    </div>
  );
}

export default App;