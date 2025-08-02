import React from "react";

const ConfirmRide = () => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
          props.setVehiclePanel(false);
          props.setPanelOpen(true);
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-center text-lg font-semibold">Confirm Your Ride.</h3>
      <div className="flex flex-col items-center justify-center mt-5">
        <img
          className="h-20"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1743773253/assets/5e/8ce23d-35fa-425d-a7d2-08a2826d04bc/original/UberBlackXL.png"
          alt=""
        />
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">Karachi, Pakistan</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">Karachi, Pakistan</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">193</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash</p>
            </div>
          </div>
        </div>
        <button  onClick={()=>{
            props.setVehicleFound(true);
            props.setVehiclePanel(false);
            props.setConfirmRidePanel(false);
        }}  className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-full">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmRide;
