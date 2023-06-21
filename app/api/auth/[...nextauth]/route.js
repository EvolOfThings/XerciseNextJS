import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

import { connectToDB } from "@utils/database";

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
            await connectToDB();
        
        // check if user already exists


        //if not, create auser and save to db
        //we should create a model, based on which the doc of the user will be created 

            return true;
        } catch (error) {
            console.log(error);
            return false;
        }

    }
})

export{ handler as GET, handler as POST };