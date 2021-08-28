import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ProductDetailes from "./ecommerce/productDetailes"
import Card from "./ecommerce/card";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className="text  body pt-4 pb-4">
      <ProductDetailes />
      <Card />
    </div>
  );
}
