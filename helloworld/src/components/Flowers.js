import React from 'react';

function Flowers(){
    return(
      <div className = "container-fluid text-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <img className='img-fluid img-thumbnail' src="https://offloadmedia.feverup.com/secretmelbourne.com/wp-content/uploads/2021/10/16053943/best-places-to-see-flowers-in-melbourne-1024x683.jpg"/>
            </div>
            <div className="col-md-6">
              <img className='img-fluid img-thumbnail' src="https://plantsinformation.com/wp-content/uploads/lotus-flower-1200x800.jpg"/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img className='img-fluid img-thumbnail' src="https://www.thespruce.com/thmb/7NWCka3AajgMLS3JnULl5pcW-4o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1334256144-56a9ec37f06a418da37c39031cb2ec5e.jpg"/>
            </div>
            <div className="col-md-6">
              <img className='img-fluid img-thumbnail' src="https://cdn.cdnparenting.com/articles/2021/02/04133016/1012290292.jpg"/>
            </div>
          </div>
        </div>
        <p className='lead'>Some pretty flowers</p>
      </div>
    )
}

export default Flowers;