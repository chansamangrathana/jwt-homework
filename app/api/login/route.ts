import { serialize } from "cookie";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(req:NextRequest){
  

const body = await req.json();
const { email, password } = body;

console.log("Email:",email)
console.log("Password:",password)

// Make a POST request to the Our API
const response = await fetch(
    `${process.env.DJANGO_API_URL}/api/user/login/`,
    {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });
    
    if (!response.ok) {
        return NextResponse.json(
            {
                message: "Failed to login",
            },
            {
                status: response.status,
            }
        );

    }
    const data = await response.json();
    const user = data?.user || null;
    const accessToken = data?.access_token || null;
    const refreshToken = data?.refresh_token || null;

    const cookieName = process.env.COOKIE_REFRESH_TOKEN_NAME || "refresh";
    const serialized = serialize(cookieName, refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        sameSite: "lax", // or "strict" or "none"
    });

    return NextResponse.json({
        accessToken: accessToken,
        user: user,
     }, {
        status: response.status,
        headers: {
            "Set-Cookie": serialized,
        },
    });
}



