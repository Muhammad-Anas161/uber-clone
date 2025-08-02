import React, { useRef, useState } from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationPanel from "../components/LocationPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const vehicleFoundRef = useRef(null)
  const WaitingForDriverRef = useRef(null)
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [ConfirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [WaitingForDriver, setWaitingForDriver] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(function() {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        display: "block",
        duration: 0.5,
        height: "70%",
        ease: "power2.inOut",
        padding: "1rem",
      });
      gsap.to(panelCloseRef.current, {
        display: "block",
        duration: 0.5,
        opacity: 1,
        ease: "power2.inOut",
      });
    }else {
      gsap.to(panelRef.current, {
        display: "none",
        duration: 0.5,
        height: "0%",
        ease: "power2.inOut",
        padding: "0rem",
      });
      gsap.to(panelCloseRef.current, {
        display: "none",
        duration: 0.5,
        opacity: 0,
        ease: "power2.inOut",
      });
  }}, [panelOpen]);

  useGSAP(function() {
    if(vehiclePanel){
      gsap.to(vehiclePanelRef.current, {
      duration: 0.5,
      transform: "translateY(0)",
      ease: "power2.inOut",
    })
    }else {
      gsap.to(vehiclePanelRef.current, {
      duration: 0.5,
      transform: "translateY(100%)",
      ease: "power2.inOut",
    });
}
  }, [vehiclePanel]);

  useGSAP(function() {
    if(ConfirmRidePanel){
      gsap.to(confirmRidePanelRef.current, {
      duration: 0.5,
      transform: "translateY(0)",
      ease: "power2.inOut",
    })
    }else {
      gsap.to(confirmRidePanelRef.current, {
      duration: 0.5,
      transform: "translateY(100%)",
      ease: "power2.inOut",
    });
}
  }, [ConfirmRidePanel]);
  
  useGSAP(function() {
    if(vehicleFound){
      gsap.to(vehicleFoundRef.current, {
      duration: 0.5,
      transform: "translateY(0)",
      ease: "power2.inOut",
    })
    }else {
      gsap.to(vehicleFoundRef.current, {
      duration: 0.5,
      transform: "translateY(100%)",
      ease: "power2.inOut",
    });
}
  }, [vehicleFound]);
  useGSAP(function() {
    if(WaitingForDriver){
      gsap.to(WaitingForDriverRef.current, {
      duration: 0.5,
      transform: "translateY(0)",
      ease: "power2.inOut",
    })
    }else {
      gsap.to(WaitingForDriverRef.current, {
      duration: 0.5,
      transform: "translateY(100%)",
      ease: "power2.inOut",
    });
}
  }, [WaitingForDriver]);

  return (
    <div className="h-screen relative">
      <img
        className="h-12 m-2 absolute"
        src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png"
        alt=""
      />
      <div className="h-screen w-screen flex items-center justify-center">
        <img
          className="h-full w-full object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVfQOuDDr8Dfz5RTx77oLAVHNIItJo1HzwFw&s"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-end h-screen top-0 absolute w-full">
        <div className="bg-white p-5 h-[30%] relative">
          <h5 ref={panelCloseRef} onClick={()=>{
            setPanelOpen(false);
          }} className="absolute opacity-0 top-5 right-5 text-gray-500 text-2xl">
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h1 className="text-2xl font-semibold">Find a Trip?</h1>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 top-[45%] left-7 bg-gray-600 rounded-full"></div>
            <input
              type="text"
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              onClick={() => {
                setPanelOpen(true);
              }}
              className="bg-[#eee] w-full pl-5 p-2 mt-5 rounded-lg"
              placeholder="Add a Pickup Location"
            />
            <input
              type="text"
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              onClick={() => {
                setPanelOpen(true);
              }}
              className="bg-[#eee] w-full pl-5 p-2 mt-5 rounded-lg"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="bg-white h-[0%] font-semibold rounded-lg w-full text-lg placeholder:text-base hidden">
          <LocationPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />
        </div>
      </div>

      <div ref={vehiclePanelRef} className="bg-white fixed z-10 bottom-0 px-3 py-10 pt-14 w-full translate-y-full">
        <VehiclePanel setVehiclePanel={setVehiclePanel} setConfirmRidePanel={setConfirmRidePanel} />
      </div>
      <div ref={confirmRidePanelRef} className="bg-white fixed z-10 bottom-0 px-3 py-10 pt-14 w-full translate-y-full">
        <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
      </div>
      <div ref={vehicleFoundRef} className="bg-white fixed z-10 bottom-0 px-3 py-10 pt-14 w-full translate-y-full">
        <LookingForDriver setVehicleFound={setVehicleFound}/>
      </div>
      <div ref={waitingForDriverRef} className="bg-white fixed z-10 bottom-0 px-3 py-10 pt-14 w-full translate-y-full">
        <WaitingForDriver WaitingForDriver={WaitingForDriver} />
      </div>
    </div>
  );
};

export default Home;
