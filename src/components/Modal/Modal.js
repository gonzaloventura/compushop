import React from 'react'
import './Modal.scss'

function Modal({children}) {
  return (
    <div className='modal__opt'>
            <h1>MODAL TITLE</h1>
            {children}
    </div>
  )
}

export default Modal