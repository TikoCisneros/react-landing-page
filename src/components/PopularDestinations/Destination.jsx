import PropTypes from 'prop-types'

const Destination = ({ destination }) => {
  const { imageUrl, imageAlt, city, averagePrice, propertyCount } = destination;

  return (
    <div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
      <img className="h-32 w-32 flex-shrink-0" src={imageUrl} alt={imageAlt} />
      <div className="px-6 py-4">
        <h3 className="text-lg font-semibold text-gray-800">{city}</h3>
        <p className="text-gray-600">${averagePrice} / night average</p>
        <div className="mt-4">
          <a href="#" className="text-picton-blue-600 hover:text-picton-blue-500 font-semibold text-sm">
            Explore {propertyCount} properties
          </a>
        </div>
      </div>
    </div>
  )
}

Destination.propTypes = {
  destination: PropTypes.arrayOf(PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    averagePrice: PropTypes.number.isRequired,
    propertyCount: PropTypes.number.isRequired,
  })).isRequired,
}

export default Destination
