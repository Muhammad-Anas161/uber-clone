import React from 'react'

const LocationPanel = (props) => {

  const locations = [
    "24, near coffee cafe, Karachi, Pakistan",
    "25, near coffee cafe, Karachi, Pakistan",
    "26, near coffee cafe, Karachi, Pakistan"
  ];
  return (
    <div>
      
      {
        locations.map((location, index) => (
          <div key={index} onClick={()=>{
            props.setVehiclePanel(true)
            props.setPanelOpen(false);
          }} className='flex items-center justify-start my-4 gap-4'>
        <h2 className='bg-[#eee] h-8 flex items-center justify-center w-8 rounded-full'><i className='ri-map-pin-fill'></i></h2>
        <h4 className='font-medium'>{location}</h4>
      </div>
        ))
      }

    </div>
  )
}

export default LocationPanel
