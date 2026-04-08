import React from 'react'

function Home  ()  {
  return (
        <section className="min-h-[89vh] flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">

  <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
    Welcome to{" "}
    <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
      DA Store
    </span>
  </h1>

  <p className="text-slate-400 mt-4 max-w-xl">
    Discover premium shoes and stylish clothes crafted for your lifestyle
  </p>

  {/* Buttons */}
  <div className="mt-8 flex gap-4 flex-wrap justify-center">

    <button className=" px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition shadow-lg shadow-blue-500/30">
      Shop Now
    </button>



  </div>

</section>
  )
}

export default Home