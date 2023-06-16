import './index.css'
import {GrFormClose} from 'react-icons/gr'

const Notification = props => {
  const {children} = props
  console.log(props)
  return (
    <div>
      <div>{children}</div>
      <GrFormClose />
    </div>
  )
}

export default Notification
