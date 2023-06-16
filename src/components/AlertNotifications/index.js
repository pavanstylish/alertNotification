// Write your code here

import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => (
  <div>
    <h1>Alert Notifications</h1>
    <Notification>
      <AiFillCheckCircle className="success icon" />
      <div>
        <h1 className="success">Success</h1>
        <p>You can access all the files in the folder</p>
      </div>
      {/* <GrFormClose /> */}
    </Notification>
    <Notification>
      <RiErrorWarningFill className="success icon" />
      <div>
        <h1 className="success">Error</h1>
        <p>Sorry, you are not authorized to have access to delete the file</p>
      </div>
      {/* <GrFormClose /> */}
    </Notification>
    <Notification>
      <MdWarning className="success icon" />
      <div>
        <h1 className="success">Warning</h1>
        <p>Viewers of this file can see comments and suggestions</p>
      </div>
      {/* <GrFormClose /> */}
    </Notification>
    <Notification>
      <MdInfo className="success icon" />
      <div>
        <h1 className="success">Info</h1>
        <p>Anyone on the internet can view these files</p>
      </div>
    </Notification>
  </div>
)
export default AlertNotifications
