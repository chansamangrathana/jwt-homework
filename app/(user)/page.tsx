import React from "react";
import Home from "./home/page";

export default function HomePage() {
  return (
    <main>
      <section className="bg-center bg-no-repeat bg-[url('https://i.pinimg.com/564x/62/49/51/62495193570ef330fa05a2ce172369e0.jpg')] bg-slate-500 bg-blend-multiply h-screen  bg-cover  ">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Discover amazing products and services tailored just for you.
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Whether you hare looking for fashion, electronics, home essentials,
            or gifts, we have got you covered. Start exploring now and make your
            online shopping experience unforgettable
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="/home"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-slate-500 hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              view all our products
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            {/* <a
            href="#"
            className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
          >
            Learn more
          </a> */}
          </div>
        </div>
      </section>
      <h3 className=" text-xl font-extrabold tracking-tight leading-none text-slate-800 md:text-2xl lg:text-5xl text-center p-10 ">
        My All Product for you
      </h3>

      <Home />
    </main>
  );
}
