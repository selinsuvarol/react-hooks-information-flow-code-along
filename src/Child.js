import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({childColorr,color }) {
  return (
  <div 
  className="child" 
  style={{ backgroundColor: color }}
  onClick={childColorr} />);
}

export default Child;
