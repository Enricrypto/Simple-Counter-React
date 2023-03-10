//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Counter from "./component/counter.jsx"

let counter = 0;
setInterval(() => {
    const cMillar = Math.floor(counter / 100000);
    const dMillar = Math.floor(counter / 10000);
    const uMillar = Math.floor(counter / 1000);
    const centenas = Math.floor(counter / 100);
    const decenas = Math.floor(counter / 10);
    const unidades = Math.floor(counter / 1);
    counter++; 
    
    ReactDOM.render(<Counter 
        unidades={unidades}
        decenas={decenas}
        centenas={centenas}
        uMillar={uMillar}
        dMillar={dMillar}
        cMillar={cMillar}
    />,
    document.querySelector("#app"));
}, 1000); 


