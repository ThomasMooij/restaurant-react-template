

const Reservation = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
    <h1 className="text-3xl font-bold mb-6">Tafel Reservering</h1>
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
  )
}

export default Reservation