import React,{useState, useEffect, useContext} from "react";
import Map from "./Components/Map";
import Store from "./Components/Store";
import "./Styles/App.scss"
import RobotCounterContext from "./Contexts/robotCounterContext.jsx";
import RobotPerSecond from "./Contexts/robotPerSecondContext.jsx";
import {addonObjContext} from "./Contexts/AddonObjContext.jsx";


export default function App(){
    const [robotCounter, setRobotCounter] = useState(0)
    const [rpsCounter, setRpsCounter] = useState(0)
    const [state,dispatch] = useContext(addonObjContext)
    
    useEffect(() => {
        const interval = setInterval(() => {

          gameTick();
        }, 1000);
        return () => clearInterval(interval);
      }, [state]);
    


    function gameTick(){
        setRobotCounter(prevrobotCounter => prevrobotCounter + rpsCounter);
        // console.log(state)
    };
    

    return <div className="gameWrapper">
        <RobotCounterContext.Provider value ={[robotCounter,setRobotCounter]}>
            <RobotPerSecond.Provider value = {[rpsCounter,setRpsCounter]}>
                        <Map/>
                        <Store/>          
            </RobotPerSecond.Provider>
        </RobotCounterContext.Provider>
    </div>
}