import PropTypes from 'prop-types'

const Container = ({ children }) => {
  return (
    <div className="bg-gray-200">
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node,
}

export default Container
