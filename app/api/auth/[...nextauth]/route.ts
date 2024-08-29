import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
// import { NextResponse } from "next/server";



const handler = NextAuth({
    providers: [
        GoogleProvider ({
            clientId: process.env.GOOGLE_ID ?? "",
            clientSecret: process.env.GOOGLE_SECRET ?? "",
        })
    ],
});


export { handler as GET, handler as POST };

// above explain in simple language
// export function GET() {
//     return NextResponse.json({
//         message:"hello"
//     })
// }
