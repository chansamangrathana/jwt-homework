import { serialize } from "cookie";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export async function POST(req:NextRequest){
    

const body = await req.json();
const { email, password } = body;

// Make a POST request to the Our API
const response = await fetch(
    `${process.env.DJANGO_API_URL}/api/user/login/`,
    {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email:"chansamangrathana1607@gmail.com", password:"Na@@12345" }),
    });
    const data = await response.json();
    console.log("data from django api ",data)
}

