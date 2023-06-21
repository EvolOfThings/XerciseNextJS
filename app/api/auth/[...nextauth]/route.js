import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

console.log(`process.env.GOOGLE_ID: ${process.env.GOOGLE_ID}, process.env.GOOGLE_CLIENT_SECRET: ${process.env.GOOGLE_CLIENT_SECRET}`)

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clients: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }
        )
    ],
    async session({session}){
        try {
            //serverless route => it's a lambda function, that opens up only hwne it gets called. 
            // gets called, spins up a server an make connection to db
            
        } catch (error) {
            
        }

    },
    async signIn({profile}) {
        try {
            
        } catch (error) {
            
        }

    }
})

export{ handler as GET, handler as POST };