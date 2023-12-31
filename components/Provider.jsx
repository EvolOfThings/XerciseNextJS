"use client"

//using browser's capabilities[session] so use client server

import { SessionProvider } from 'next-auth/react'



const Provider = ({children, session}) => {
  return (
    //HOC, wrap other compos with this so render children 
    <SessionProvider session={session}>
{children}
    </SessionProvider>
  )
}

export default Provider