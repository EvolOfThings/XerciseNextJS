import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

import User from "@models/user";
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
     const sessionUser = await User.findOne({
        email: session.user.email
     })

     session.user.id = sessionUser._id.toString();
     return session;

    },
    async signIn({profile}) {
        try {
             //serverless route => it's a lambda function, that opens up only hwne it gets called. 
            // gets called, spins up a server an make connection to db
            

            await connectToDB();
        
        // check if user already exists
            const userExists = await User.findOne({
                email: profile.email
            });

        //if not, create auser and save to db
        //we should create a model, based on which the doc of the user will be created 
            if (!userExists) {
                await User.create({
                    email: profile.email,
                    username: profile.name.replace(" ", "").toLowerCase(),
                    image: profile.picture
                })
            }
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }

    }
})

export{ handler as GET, handler as POST };