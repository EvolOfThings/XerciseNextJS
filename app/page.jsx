//nxtjs metadata apis to manage metadat
//static md and dynamic md


export const metadata = {
  title: "Home"
}

//OUTPUT STATIC:
// <head>
//  <title>
//   Home
//  </title>
//</head> 

//export default function Page() {
//  return <h1>Next.js Page with Static metadata</h1>
//}



//DYNAMIC METADATA
//export async function generateMetada({params, searchParams}) {
//  const product = await.getProduct(params.id);
//  return {title: product.title};
//}

//OUTPUT DYNAMIC:
// <head>
//  <title>
//   My Unique Product
//  </title>
//</head> 

//Dynamic metada api helps SEOs tremendously



// export default function Page() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
//         <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//           Home&nbsp;
//         </p>

//       </div>

     

     
//     </main>
//   )
// }


export const Home = () => {
  return (
    <div>page</div>
  )
}

export default Home

