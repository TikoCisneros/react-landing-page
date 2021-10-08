import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ text, secondary }) => {
  return (
    <a className={`btn ${secondary ? 'btn-secondary' : 'btn-primary'}`} href="#">
      {text}
    </a>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  secondary: PropTypes.bool,
};

Button.defaultProps = { secondary: false };

export default Button;
