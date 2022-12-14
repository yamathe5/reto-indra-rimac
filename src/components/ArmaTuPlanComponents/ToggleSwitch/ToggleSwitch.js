
import React from "react";

import plus from "../../../images/plus.png"
import less from "../../../images/less.png"
 
import "./toggle-switch.scss"

export default function ToggleSwitch({ handleOnClickChangePrice, checked }){
  return (
    <>
      <label className="switch">
        <input checked={checked} readOnly onClick={handleOnClickChangePrice} type="checkbox"/>
        <span className={`slider round`}></span>
      </label>

      <label className="switch-desktop">
        <input checked={checked} readOnly onClick={handleOnClickChangePrice} type="checkbox"/>
        {checked ? <span className="font-700 purple-500"><img src={less} alt="Less icon"/>QUITAR</span>: 
                    <span className="font-700 purple-500"><img src={plus} alt="Plus icon"/>AGREGAR</span>}
      </label>
    </>
  );
}