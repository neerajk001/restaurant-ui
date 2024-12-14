import React from 'react'
import G from '../assets/images/G.png'
import knife from '../assets/images/knife.png'

const AboutUS = () => {
  return (
    <div className='min-h-screen bg-black flex flex-col mt-20 md:flex-row'>
        <div className='text-orange-400 flex-1 md:justify-between ' >
            <h1 className='mx-48 text-6xl font-extrabold'>About us</h1>
            <h1 className='mx-16'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus molestias voluptatem voluptatibus nemo soluta pariatur amet voluptates sed officiis sit. Molestias labore neque quia explicabo. </h1>
            <div>
            <button className='bg-blue-200 px-2 py-1 rounded-sm mt-3 ml-52 text-purple-900 transition hover:bg-blue-700 hover:text-white  '>know more </button>
              </div>
            </div>
            
           
                <div className='flex w-72 mx-auto transition hover:'>
                <img className='h-96 mx-auto scale-120' src={knife} alt="" />
                </div>
            
           
           
            <div className='text-orange-400 bg-black min-h-screen '>
                <h1 className='text-4xl font-semibold mt-16 mx-48'>our history</h1>
                <br />
                
                <p className='mx-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, rerum nulla. Est repellendus unde doloribus eveniet fuga ab commodi eius quasi eos, ad excepturi delectus libero deserunt dicta, minus laudantium?</p>
              
                <div>
                <button className='bg-blue-200 px-2 py-1 rounded-sm mt-3 ml-52 text-purple-900 transition hover:bg-blue-700 hover:text-white  '>know more </button>
              </div>
                
            </div>
        
    </div>
  )
}

export default AboutUS