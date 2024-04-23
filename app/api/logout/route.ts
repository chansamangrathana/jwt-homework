import { cookies } from "next/headers";
import { NextResponse } from "next/server";

// Create a POST for Logout
export async function POST() {
    // Get the refresh token from the client-side cookies
    const cookieName = process.env.COOKIE_REFRESH_TOKEN_NAME || "refresh";
    const cookieStore = cookies();
    const credential = cookieStore.get(cookieName);

     // refresh token is not found, return an error message 
     if (!credential) {
        return NextResponse.json(
            {
                message: "Token not found",
            },
            {
                status: 400,
            }
        );
    }

    // get the refresh token value
    const refreshToken = credential.value;

    // refresh token exist, delete the refresh token
    if(refreshToken){
        cookieStore.delete(cookieName)

        return NextResponse.json(
            {
                message: "Logout successful",
            },
            {
                status: 200,
            }
        );
    }

     // If the refresh token is not found, return an error message 
     return NextResponse.json(
        {
            message: "Failed to logout",
        },
        {
            status: 400,
        }
    );

}
