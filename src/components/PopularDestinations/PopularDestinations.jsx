import Destination from "./Destination"
import popularDestinations from '../../data/destinations'

const PopularDestinations = () => {
  return (
    <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-10">
      <h2 className="text-2xl font-bold text-picton-blue-500">Popular destinations</h2>
      <p className="mt-2 text-gray-600">A selection of great work-friendly cities with lots to see and explore.</p>
      <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {popularDestinations.map((destination) => (
          <Destination destination={destination} key={destination.city} />
        ))}
      </div>
    </div>
  )
}

export default PopularDestinations
