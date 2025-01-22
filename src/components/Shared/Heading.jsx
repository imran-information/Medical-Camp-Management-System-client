import PropTypes from 'prop-types'
import { FaHeartbeat } from 'react-icons/fa'
const Heading = ({ title, subtitle, center }) => {
  return (
    <div className={`${center ? 'text-center' : 'text-start'} mb-8 md:px-[100px] lg:px-[250px] xl:px-[480px]`} >
      <div className='text-3xl font-bold text-[#1976d2]'>{title}</div>
      <p className="flex justify-center my-2">
        <FaHeartbeat className='text-2xl text-primary' />
      </p>
      <div className=' text-neutral-500 mt-2 font-normal text-base'>{subtitle}</div>
    </div >
  )
}

Heading.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  center: PropTypes.bool,
}

export default Heading
