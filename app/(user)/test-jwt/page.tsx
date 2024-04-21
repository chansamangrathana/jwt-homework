"use client";
import { error } from "console";
import React, { useState } from "react";
import { date } from "yup";

export default function TestJWT() {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState("");
  const [Authorized, setAuthorized] = useState(false);
  const [refreshToken, setRefreshToken] = useState("");

  const handleLogin = async () => {
    const email = "chansamangrathana@gmail.com";
    const password = "Na@@12345";

    fetch(process.env.NEXT_PUBLIC_API_URL + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        setAccessToken(data.accessToken);

        setUser(data.user);
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  const handleRefreshToken = async () => {
    fetch("http://localhost:3000/api/refresh", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Aurthorization: `Bearer ${refreshToken}`,
      },
      credentials: "include",
      body: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data from refresh token:", data);
        setAccessToken(data.accessToken);
      })
      .catch((error) => console.log(error));
  };

  const handleUpdate = async () => {
    const body = {
      name: "Update specific updated products",
    };
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DJANGO_API_URL}/api/products/${141}/`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(body),
      });
    
    if (response.status === 401) {
      setAuthorized(true);
    }
    const data = await response.json();
    console.log("data from update:", data);
  };

  return (
    <main className="h-screen grid place-content-center">
      <h1 className="text-5xl">Test handle Login</h1>
      <button
        onClick={handleLogin}
        className="p-2 bg-purple-600 rounded-xl text-2xl text-white my-5"
      >
        LOGIN
      </button>
      <button
        className="p-2 bg-purple-600 text-2xl  rounded-xl  text-white "
        onClick={handleUpdate}
      >
        Update
      </button>
      {Authorized && 
        <button
          className="p-2 bg-purple-600 text-2xl  rounded-xl  text-white my-5" onClick={handleRefreshToken}> Refresh</button>
      }
    </main>
  )
}
