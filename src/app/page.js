// pages/index.js
import Head from 'next/head';
import Header from './(components)/Header';
import FeaturedProducts from './(components)/FeaturedProducts';
import Navbar from './(components)/Navbar/page';

const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Description for Product 1.',
    price: 29.99,
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description for Product 2.',
    price: 39.99,
  },
  // Add more products as needed
];

const Home = () => {
  return (
    <div>
    <Navbar/>
      <main className="container mx-auto my-8 dark:bg-purple-700 ">
        <FeaturedProducts products={products} />
      </main>
    </div>
  );
};

export default Home;
