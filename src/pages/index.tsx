// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

import TemperatureConverter from "./components/temperature";
import ProductList from "./components/sortProducts/product";
import CondeRenderHome from "./solncomps/condRenderRefactored/condRenderHome";

export default function Home() {
  return (
    <div>
      <TemperatureConverter />
      <ProductList />
      <CondeRenderHome />
    </div>
  );
}
