import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childColor, setChildColor] = useState("#FFF");

  function handleChangeColor() {
    const newColor = getRandomColor();
    setColor(newColor);
  };
  function handleChildColor() {
    const newChildColor = getRandomColor();
    setChildColor(newChildColor);
  };

  return (
    <div 
    className="parent" 
    style={{ backgroundColor: color }}
    onClick={handleChangeColor}>
      <Child 
      color={childColor}
      childColorr={handleChildColor} />
      <Child 
      color={childColor}
      childColorr={handleChildColor}/>
    </div>
  );
}

export default Parent;
