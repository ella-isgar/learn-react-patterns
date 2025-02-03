// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

import CondeRenderHome from "./solncomps/condRenderRefactored/condRenderHome";
import TemperatureConverter from "./components/temperature";

export default function Home() {
  return (
    <div>
      <CondeRenderHome />
      <TemperatureConverter />
    </div>
  );
}
