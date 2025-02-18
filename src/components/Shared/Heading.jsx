import PropTypes from 'prop-types'
import { FaHeartbeat } from 'react-icons/fa'
const Heading = ({ title, subtitle, center }) => {
  return (
    <div className={`${center ? 'text-center' : 'text-start'} mb-8 container mx-auto text-center max-w-2xl`} >
      <div className='text-4xl font-semibold text-primary '>{title}</div>
      <p className="flex justify-center my-3">
        <FaHeartbeat className='text-2xl text-primary' />
      </p>
      <div className=' text-lg text-gray-600 leading-relaxed mb-12'>{subtitle}</div>
    </div >
  )
}

Heading.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  center: PropTypes.bool,
}

export default Heading
