import React from 'react'

function MessageBox(props) {
    return (
        <div className={`alert `}>
            {props.children}
        </div>
    )
}

export default MessageBox
