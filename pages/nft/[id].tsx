import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
import React from 'react'

function NftDropPage() {

// Auth
   const connectWithMetamask = useMetamask();
   const address = useAddress();
   const  disconnect = useDisconnect();
// ----------

console.log(address)


  return (
    <div className='flex h-screen flex-col lg:grid
     lg:grid-cols-10'>

        {/* let side */}
       

<div className='lg:col-span-4 bg-gradient-to-br
 from-cyan-700 to-rose-500'>

<div className='flex flex-col items-center
 justify-center py-2 lg:min-h-screen'>
<div className=' rounded-xl bg-gradient-to-br from-purple-900 to-black
 p-2 '>
<img className='w-44 rounded-xl 
object-cover lg:h-65 lg:w-65'
 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6uGOmPcqeA00vsFy9IJ8gAGTcI30CQZiOotbzu2dnmaBQgIgiICxehtSG_f23LW-e5ZA&usqp=CAU" alt="" />
</div>
 <div className='space-y-2 p-5 text-center'>

     <h1 className='text-4xl font-bold
      text-white'>DarkLord</h1>
     <h2 className='text-xl text-gray-300'>Image of the darklord morningstar before banaishment</h2>
 </div>
</div>

</div>


{/* Right side */}
<div className='flex flex-1 flex-col p-12 lg:col-span-6 
 '>

<header className='flex items-center justify-between 
 '>

  <h1 className='w-52 cursor-pointer text-xl
   font-extralight sm:w-80'>Nft {' '} <span className=' font-extrabold
    font-serif italic underline decoration-black/50 '>
     Darklord
     </span  > {' '}  Project Market Place </h1>
  <button onClick={() => ( address ? disconnect() : connectWithMetamask() )} className='rounded-full bg-gradient-to-br from-purple-700 
  to-black
  text-white text-xs font-bold px-4 py-2 
  lg:px-5 lg:py-3 lg:text-base
'

>{address ? 'Sign out' : 'Sign in'}
</button>


</header>

<hr className='my-2 border'/>

{address && (
<p className="text-center text-sm text-rose-400">You're Logged in with your Wallet {address.substring (

  0, 4)}...{address.substring(address.length -2 )}</p>

)}
{/* content */}

<div className='mt-10 flex flex-1 flex-col items-center
 space-y-6 text-center lg:space-y-0 lg:justify-center'>

  <img className='w-80 object-cover pb-10 lg:h-40' src="https://i.ebayimg.com/images/g/uLcAAOSwOOVgtJoV/s-l400.jpg" alt="" />
   
   <h1 className=' text-3xl font-bold blur-lg:text-5xl 
   lg:font-extrabold '>NFT Project Website Darklord/Arc-lord</h1>

   <p className=' pt-2 text-xl text-green-500' >Nft claimed</p>

</div>



{/* mint button */} 

<button className='h-16 bg-black w-full text-white
 rounded-full font-bold'>Mint nft</button>


</div>
    </div>
  )
}

export default NftDropPage