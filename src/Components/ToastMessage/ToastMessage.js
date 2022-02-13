import React, { useState } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import { hideMessageInChannel, deleteMessageFromUser, auth } from '../../firebase';

const ToastMessage = (props) => {

  const [showToast, setShowToast] = useState(true)
  const toggleShowToast = () => setShowToast(!showToast)

  const handleClose = (messageID) => {
    // const responseProp = {
    //   hide: true
    // }
    hideMessageInChannel(props.user, messageID, true)
  }

  if (!props.message[1].hide || !props.message[1].hide[props.user.uid]) {
    return (
      <Toast style={{ width: '100%' }} show={showToast} onClose={() => handleClose(props.message[0])}>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">{props.message[1].displayName}</strong>
          <small className="text-muted">{props.message[1].time}</small>
        </Toast.Header>
        <Toast.Body>{props.message[1].message}</Toast.Body>
      </Toast>
    )
  } else {
    return null;
  }
}

export default ToastMessage;