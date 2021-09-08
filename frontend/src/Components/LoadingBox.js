import React from 'react'

function LoadingBox() {
    return (
        <div >
              {/* <i className="fa fa-spinner fa-spin"></i>  */}
              <div class="spinner-border m-5 text-primary" role="status">
                             <span class="sr-only"></span>
                </div>
              Loading...
        </div>
    )
}

export default LoadingBox
