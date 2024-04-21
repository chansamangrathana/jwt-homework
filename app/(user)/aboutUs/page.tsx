"use client";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex justify-center items-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              className="h-96 w-96 rounded-2xl mt-16 "
              src="https://i.pinimg.com/564x/35/61/4a/35614ae1abb36d1a2c05c1b24954b75e.jpg"
              alt="Your Shop"
            />
          </motion.div>
          {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            
          </div> */}
        </div>
        <div>
          <h2 className="text-5xl font-bold mt-20 text-purple-900">About Our Shop</h2>
          <p className="text-lg mt-10 leading-7 m-10 text-blue-900">
            Welcome to JINA, where style meets elegance! Step into a world of
            exquisite fashion, curated with care and passion. Our shop offers a
            delightful array of clothing and accessories, perfect for every
            occasion and every style.
          </p>
          <p className="text-lg mb-14 leading-7  text-blue-900 m-10">
            From chic and sophisticated dresses to casual and comfortable
            everyday wear, we have something for everyone. Explore our
            collection of premium fabrics, flattering cuts, and trendy designs
            that are sure to make you stand out in any crowd. At JINA, we
            believe that fashion is not just about what you wear, but how it
            makes you feel. That is why our team of fashion experts is always on
            hand to help you find the perfect outfit that not only looks great
            but also makes you feel confident and beautiful. Whether youre
            looking for the perfect outfit for a special occasion or simply want
            to refresh your wardrobe, JINA is your ultimate destination
            for all things fashion. Come visit us today and discover the joy of
            shopping at JINA 
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 m-10 mb-32">
        <div className="relative">
          <img
            className="h-full w-auto rounded-lg"
            src="https://i.pinimg.com/564x/f7/46/c0/f746c01c0deaba960d5d9cf6c4526371.jpg"
            alt="Image 1"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
            Woman
          </div>
        </div>
        <div className="relative">
          <img
            className="h-full w-auto rounded-lg"
            src="https://i.pinimg.com/564x/fa/8f/c0/fa8fc044d1d44218cad20e45be575634.jpg"
            alt="Image 2"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
            Man
          </div>
        </div>
        <div className="relative">
          <img
            className="h-full w-auto rounded-lg"
            src="https://i.pinimg.com/564x/86/b2/c6/86b2c60da6f9a156941e0a24ab5a4456.jpg"
            alt="Image 3"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
            Kid
          </div>
        </div>
        <div className="relative">
          <img
            className="h-full w-auto rounded-lg"
            src="https://i.pinimg.com/564x/3b/51/17/3b51175c4c911a61add070379d1f2e7f.jpg"
            alt="Image 4"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
            Shoes
          </div>
        </div>
      </div>
    </>
  );
}
