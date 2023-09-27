import React from "react";
import Draggable from "react-draggable";
import { useState } from "react";

export default function TestReactDraggable() {
    const [p,setP]=useState({x:0,y:0})
    const handleOnDrag = (e,data)=>{
        console.log(data)

        
    }
  return (
    <Draggable>
      <div style={{ width: "50px", height: "50px", background: "black" }}
    //   onDrag ={()=>{handleOnDrag(e,data)}}
      ></div>
    </Draggable>
  );
}
