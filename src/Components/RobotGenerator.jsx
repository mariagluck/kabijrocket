import { useContext } from "react";
import robotCounterContext from "../Contexts/robotCounterContext.jsx"
import rpsContext from "../Contexts/robotPerSecondContext"
import "../Styles/Map.scss";
import robot from "../resources/robot.png" 

export default function RobotGenerator() {
    const robotCounter = useContext(robotCounterContext)
    const [robotCount,setRobotCount] = robotCounter
    const [rpsCounter] = useContext(rpsContext)
   
    function createRobots(){
        setRobotCount(robotCount+1)
    }


    return (
        <div className="robotGeneratorWrapper">
           
            <button onClick={createRobots} className="rocket">
                 
            </button> 
            <img src={robot} className="robot"/>
            <div className="counter">
                <h3>Robots: {robotCount}</h3>
                <h3>Rps: {rpsCounter}</h3>
                
            </div>
            
            
                
        </div>
    )


};