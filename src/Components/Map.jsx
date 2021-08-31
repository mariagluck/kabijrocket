import React, { useState, useContext } from "react";
import RobotGenerator from "./RobotGenerator";
import robotCounterContext from "../Contexts/robotCounterContext.jsx";
import { addonObjContext } from "../Contexts/AddonObjContext.jsx";
import QuoteGenerator from "./QuoteGenerator";
import "../Styles/Map.scss";

import mountains from "../resources/mountains3.png";

export default function Map() {
  const [state] = useContext(addonObjContext);

  const robotCounter = useContext(robotCounterContext);
  const [robotCount] = robotCounter;

  return (
    <div className="map">
      <RobotGenerator />

      {state.water.amount > 0 && (
        <img src={state.water.imgSrc[0]} className="cloud" alt="cloud" />
      )}

      {state.water.amount > 5 && (
        <img src={state.water.imgSrc[1]} className="river" alt="river" />
      )}

      {state.veg.amount > 0 && (
        <img src={state.veg.imgSrc[0]} className="forest" alt="forest" />
      )}

      {state.house.amount > 0 && (
        <img src={state.house.imgSrc[0]} className="tippi" alt="tippi" />
      )}

      {state.house.amount > 5 && (
        <img src={state.house.imgSrc[1]} className="skyscrapers" alt="" />
      )}

      {state.dinos.amount > 0 && (
        <img src={state.dinos.imgSrc[0]} className="dinos" alt="dinos" />
      )}

      {state.energy.amount > 0 && (
        <img src={state.energy.imgSrc[0]} className="windmill" alt="windmill" />
      )}

      {state.factory.amount > 0 && (
        <img src={state.factory.imgSrc[0]} className="fabric" alt="fabric" />
      )}

      {state.farming.amount > 0 && (
        <img src={state.farming.imgSrc[0]} className="farm" alt="farm" />
      )}

      {state.mining.amount > 0 && (
        <img src={state.mining.imgSrc[0]} className="pickaxe" alt="pickaxe" />
      )}

      {robotCount >= 0 && <div className="planetBrown"></div>}

      {robotCount >= 100 && <div className="planetPartlyGreen"></div>}

      {robotCount >= 1000 && <div className="planetTotalGreen"></div>}

      {robotCount >= 50000 && <div className="planetGlobalWarming"></div>}
      <img src={mountains} className="mountains" alt="" />
    </div>
  );
}
