"use client";
import CardProduct from "@/component/card/CardProduct";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ENDPOINT = "https://store.istad.co/api/products/?page=1&page_size=40";

export default function Home() {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch(ENDPOINT)
      .then((res) => res.json())
      .then((data) => setProducts(data.results));
  }, []);
  return (
	
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-center m-36 mx-20 mb-28 mt-14">
      
      {products.map((product: any, index) => (
        <CardProduct
          onClick={() => router.push(`/home/${product.id}`)}
          key={index}
          name={product.name}
          image={product.image}
          price={product.price}
        />
      ))}
    </div>
	
  );
}
