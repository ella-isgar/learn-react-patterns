// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
<<<<<<< Updated upstream
// import CondeRenderHome from "./solncomps/condRenderRefactored/condRenderHome";
import TemperatureConverter from "./components/temperature";
import SortedProducts from './solncomps/sortProducts/product'
=======

// import CondeRenderHome from "./solncomps/condRenderRefactored/condRenderHome";
import TemperatureConverter from "./components/temperature";
import StrategyPicker from "./components/sortProducts/product";
import SortedProductList from "./components/sortProducts/product";
import ProductList from "./components/sortProducts/product";
>>>>>>> Stashed changes

export default function Home() {
  return (
    <div>
      <TemperatureConverter />
<<<<<<< Updated upstream
      <SortedProducts />
=======
      <ProductList />
>>>>>>> Stashed changes
    </div>
  );
}
