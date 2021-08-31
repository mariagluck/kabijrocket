import ReactDOM  from "react-dom";
import App from "./App.jsx"
import AddonContextProvider from "./Contexts/AddonObjContext.jsx";


ReactDOM.render(
        <AddonContextProvider>
                 <App></App>
        </AddonContextProvider> 
,
document.getElementById("root")
)