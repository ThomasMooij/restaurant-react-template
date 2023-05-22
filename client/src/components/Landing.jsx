import React from 'react'

const Landing = () => {
  return (
    <section id='Inicio' className="banner w-screen h-screen md:w-2/3 px-7 mx-auto relative flex items-center justify-evenly">
         
    <div className="w-full md:w-1/2 p-3 flex flex-col gap-8">
    <h1 className='text-3xl '>Welcome to the best colombian restaurant in town</h1>
        <h2 className="mb-6 text-4xl font-bold text-black">
            About us
        </h2>
        <p className="font-semibold text-lg text-red-600 py-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, cumque.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, cumque.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, cumque.
        </p>
        <div className="btn-container">
            <button>Reserve a table</button>
            <a href="/menu" className="text-yellow-400 hover:text-yellow-500 font-bold text-decoration-line px-3">
                See Menu
            </a>
        </div>
    </div>
    <div className="banner-image w-full md:w-1/2 p-3 flex justify-end">
        Slider
    </div>
</section>    
  )
}

export default Landing