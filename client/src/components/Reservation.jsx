

const Reservation = () => {
  return (
    <section className="flex flex-col justify-evenly items-center">

        
       <h1 className="text-2xl bg-[#969287] rounded-full p-5 font-light text-white">Reserveer uw tafel</h1> 
  

    <div className="flex justify-evenly items-center w-full">
      {/* TEXT */}
      <div> 
        <h2>Komt bij ons eten !</h2>
        <p>Het is hier altijd leuk en gezellig</p>
      </div>

      {/* RESERVATION WIDGET */}
      <div id="Reservation" className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="text-3xl font-bold mb-6">Uw gegevens</h1>
      <form className="w-64 bg-white rounded-lg shadow-lg p-6">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Naam:</label>
          <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Datum:</label>
          <input type="date" id="date" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="time" className="block text-gray-700 font-bold mb-2">Tijd:</label>
          <input type="time" id="time" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="guests" className="block text-gray-700 font-bold mb-2">Aantal Gasten:</label>
          <input type="number" id="guests" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
        </div>
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Reserveren
        </button>
      </form>
    </div>
    </div>

  </section>
  )
}

export default Reservation