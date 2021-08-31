import React, { createContext, useContext, useReducer, useState } from 'react';
import RobotCounterContext from "../Contexts/robotCounterContext.jsx";
import RobotPerSecondContext from "../Contexts/robotPerSecondContext.jsx";
import {addonObjContext} from "../Contexts/AddonObjContext.jsx";

import imgCloud from "../resources/cloud.png";
import forest from "../resources/Forest.png";
import mines from "../resources/mining.png";
import factory from "../resources/fabric.png";
import water from "../resources/water.png";
import dinoButton from "../resources/dinosaur-button.png"
import farmingButton from "../resources/farming-button.png"
import windmill from "../resources/windmill_faster.gif";
import tippi from "../resources/tippi.png";



export default  function AddOnButton() {
    const [ robotCounter, setRobotCounter ] = useContext(RobotCounterContext);
    const [ rpsCounter, setRpsCounter ] = useContext(RobotPerSecondContext);
    const  [state,dispatch] = useContext(addonObjContext)

    //  rpsCounter = rpsCounter + amount *robotspersecond
    
    
    function Click(type,name){
      if(robotCounter >= name.cost ){
        dispatch(type);
        setRobotCounter(robotCounter - name.cost)
        console.log(robotCounter)
        setRpsCounter(()=> rpsCounter + name.rps)
        } 
      }


       
    return (
      <div>
        
        <button onClick={() => Click({type: 'WATER_INCREMENT'},state.water)} className="water btn"><h2>WATER</h2><img className="addOnicon" src={water}/><div className="stats"><div>Amount:{state.water.amount}</div> <div>Cost:{state.water.cost}</div> <div>Rps: {state.water.rps}</div></div></button>
        <button onClick={() => Click({type: 'VEGETATION_INCREMENT'},state.veg)} className="veg btn"><h2>VEGETATION</h2><img className="addOnicon" src={forest}/><div className="stats"><div>Amount: {state.veg.amount} </div> <div>Cost:{state.veg.cost}</div> <div>Rps: {state.veg.rps}</div></div></button>
        <button onClick={() => Click({type: 'HOUSING_INCREMENT'},state.house)} className="housing btn"><h2>HOUSING</h2><img className="addOnicon" src={tippi}/><div className="stats"><div>Amount: {state.house.amount} </div> <div>Cost:{state.house.cost}</div> <div>Rps: {state.house.rps}</div></div></button>
        <button onClick={() => Click({type: 'DINOS_INCREMENT'},state.dinos)} className="dinos btn"><h2>DINOS</h2><img className="addOnicon" src={dinoButton}/><div className="stats"><div>Amount: {state.dinos.amount} </div> <div>Cost:{state.dinos.cost}</div> <div>Rps: {state.dinos.rps}</div></div></button>
        <button onClick={() => Click({type: 'ENERGY_INCREMENT'},state.energy)} className="energy btn"><h2>ENERGY</h2><img className="addOnicon" src={windmill}/><div className="stats"><div>Amount: {state.energy.amount} </div> <div>Cost:{state.energy.cost}</div> <div>Rps: {state.energy.rps}</div></div></button>
        <button onClick={() => Click({type: 'FACTORY_INCREMENT'},state.factory)} className="factory btn"><h2>FACTORY</h2><img className="addOnicon" src={factory}/><div className="stats"><div>Amount: {state.factory.amount} </div> <div>Cost:{state.factory.cost}</div> <div>Rps: {state.factory.rps}</div></div></button>
        <button onClick={() => Click({type: 'FARMING_INCREMENT'},state.farming)} className="farm btn"><h2>FARMING</h2><img className="addOnicon" src={farmingButton}/><div className="stats"><div>Amount: {state.farming.amount} </div> <div>Cost:{state.farming.cost}</div> <div>Rps: {state.farming.rps}</div></div></button>
        <button onClick={() => Click({type: 'MINING_INCREMENT'},state.mining)} className="mine btn"><h2>MINING</h2><img className="addOnicon" src={mines}/><div className="stats"><div>Amount: {state.mining.amount} </div> <div>Cost:{state.mining.cost}</div> <div>Rps: {state.mining.rps}</div></div></button>
       
      </div>
    );
  };
  

