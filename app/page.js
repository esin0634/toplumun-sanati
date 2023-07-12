import React from 'react'
import Grass from './components/Grass'

const page = () => {
  return (
    <div className='font-raleway max-h-screen flex flex-col justify-center items-center space-y-5  '>
        <Grass />
        <h1 className="text-4xl text-stone-700"> <span className='italic text-stone-600'> toplumun </span> sanatı</h1>
        <p className='text-center font-mono text-sm text-stone-500'> Resim sanatı toplumun kendini ifade etme yollarından biridir, <br></br> belirli bir zümrenin belirli bir zümreye yaptığı bir iş değil. </p>
        <button className='rounded-2xl bg-stone-100 px-5 py-1 text-sm hover:bg-black hover:text-stone-100  '> başla </button>
    </div>
  )
}

export default page