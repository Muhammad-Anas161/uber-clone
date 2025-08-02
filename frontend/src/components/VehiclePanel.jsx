import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
      <h5 className="p-1 text-center w-[93%] absolute top-0" onClick={()=>{
        props.setVehiclePanel(false);
        props.setPanelOpen(true);
      }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
        <h3 className="text-center text-lg font-semibold">Select a Vehicle</h3>
        <div className=" flex items-center rounded-xl border-2 active:border-black justify-between p-3 rounded-t-lg shadow-lg w-full">
          <img className="w-15" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1743773253/assets/5e/8ce23d-35fa-425d-a7d2-08a2826d04bc/original/UberBlackXL.png" alt="" />
          <div className="w-1/2" onClick={() => {
            props.setConfirmRidePanel(true);
          }}>
            <h4 className="font-medium text-base">Uber GO <span><i className="ri-user-3-fill"></i>4</span></h4>
            <h2 className="font-medium text-sm">2 mins away</h2>
            <p className="font-light text-xs text-gray-600">Affordable, compact rides</p>
          </div>
          <h2 className="font-semibold text-xl">193</h2>
        </div>
    </div>
  )
}

export default VehiclePanel
