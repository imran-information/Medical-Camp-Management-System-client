import PropTypes from 'prop-types'
const Button = ({ label, onClick, disabled, outline, small, icon: Icon }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
          relative
          disabled:opacity-70
          disabled:cursor-not-allowed
          rounded-md
          hover:opacity-80
          transition 
          border-0
          px-4
          w-full
          ${outline ? 'bg-black' : 'bg-primary'}
          ${outline ? 'border-white' : 'border-lightBlue'}
          ${outline ? 'text-white' : 'text-white'}
          ${small ? 'text-sm' : 'text-md'}
          ${small ? 'py-1' : 'py-3'}
          ${small ? 'font-light' : 'font-semibold'}
          
        `}
    >
      {Icon && (
        <Icon
          size={24}
          className='
              absolute
              left-4
              top-3
            '
        />
      )}
      {label}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  small: PropTypes.bool,
  icon: PropTypes.elementType,
}

export default Button
