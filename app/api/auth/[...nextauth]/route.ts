import { prismaClient } from "@/app/lib/db";
import { Provider } from "@prisma/client";
import NextAuth from "next-auth/next";
import Google from "next-auth/providers/google";
import GoogleProvider from "next-auth/providers/google";
// import { NextResponse } from "next/server";



const handler = NextAuth({
    providers: [
        GoogleProvider ({
            clientId: process.env.GOOGLE_ID ?? "",
            clientSecret: process.env.GOOGLE_SECRET ?? "",
        })
    ],
    callbacks:{
        async signIn(params){
            console.log(params)
            if(!params.user.email) return false;
            try{
                await prismaClient.user.create({
                    data:{
                        email: params.user.email,
                        provider: "Google",
                    }
                })
            }catch(e){
                console.log(e)
            }
            return true;
        }
    }
});


export { handler as GET, handler as POST };

// above explain in simple language
// export function GET() {
//     return NextResponse.json({
//         message:"hello"
//     })
// }
