import React,{useReducer} from "react";
import cloud from "../resources/cloud_rain.png";
import river from "../resources/river.png";
import forest from "../resources/Forest.png";
import tippi from "../resources/tippi.png";
import skyscrapers from "../resources/skyscrapers.png";
import dinos from "../resources/dinosaur-button.png";
import windmill from "../resources/windmill_faster.gif";
import fabric from "../resources/fabric.png";
import farm from "../resources/farming-button.png";
import pickaxe from "../resources/mining.png";

const addonObjects = {

    water: {
       amount: 0,
       rps:1,
       cost:10,
       imgSrc: [cloud, river]
    },
    veg: {
       amount:0,
       rps:4,
       cost:50,
       imgSrc: [forest]
     },
    house: {
      amount:0,
      rps:8,
      cost: 10,
      imgSrc: [tippi, skyscrapers ]
    },
    dinos: {
      amount: 0,
      rps: 16,
      cost: 15,
      imgSrc: [dinos]
    },
    energy: {
      amount: 0,
      rps: 20,
      cost: 23,
      imgSrc: [windmill]
    },
    factory: {
      amount: 0,
      rps: 30,
      cost: 30,
      imgSrc: [fabric]

    },
    farming: {
      amount: 0,
      rps: 35,
      cost: 35,
      imgSrc: [farm]
    },

    mining: {
      amount: 0,
      rps: 40,
      cost: 40,
      imgSrc: [pickaxe ]

    },
   };
   



export const addonObjContext = React.createContext()


function AddonContextProvider(props){
    
    const reducer = (state, action) => {
        switch (action.type) {
          case 'WATER_INCREMENT':
           return {
                ...state,
               water: {
                 ...state.water,
                 amount: state.water.amount + 1,
                 
                   
            }
           };
          
    
          case 'VEGETATION_INCREMENT':
            return {
               ...state,
               veg: {
                 ...state.veg,
                 amount: state.veg.amount + 1
                  }
            };
          
       
          case 'HOUSING_INCREMENT':
              return {
                ...state,
                house: {
                  ...state.house,
                  amount: state.house.amount + 1
                }
               
           };


          case 'DINOS_INCREMENT':
          return {
            ...state,
           dinos: {
             ...state.dinos,
             amount:state.dinos.amount + 1
           }
           
          };
             
           
          case 'ENERGY_INCREMENT':
              return {
                ...state,
                energy: {
                  ...state.energy,
                  amount:state.energy.amount + 1
                }
              
              };
           
          
 
          case 'FACTORY_INCREMENT':
              return {
                ...state,
                factory: {
                  ...state.factory,
                  amount:state.factory.amount + 1
                }
              };
            
          
 
          case 'FARMING_INCREMENT':
              return {
                ...state,
                farming: {
                  ...state.farming,
                  amount:state.farming.amount + 1
                }
              };
          
          
 
          case 'MINING_INCREMENT':
              return {
                ...state,
                mining: {
                  ...state.mining,
                  amount:state.mining.amount + 1
                }
              };
            default:
            return state;
       }
      };  
   
      const [state, dispatch] = useReducer(reducer, addonObjects);
    return(
        <addonObjContext.Provider value={[state,dispatch]}> {props.children} </addonObjContext.Provider>
    )
}


export default AddonContextProvider