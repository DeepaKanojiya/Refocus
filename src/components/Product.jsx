import React from "react";
import Button from "./Button";

export default function Product({ val , mover , count }) {

  return (
    <div className="w-full py-20 h-[23rem] text-white">
      <div onMouseEnter={()=>{mover(count)}} className="max-w-screen-xl  mx-auto flex item-center justify-between">
        <h1 className="text-7xl capitalize font-medium">{val.title}</h1>
        <div className="dets w-1/3">
          <p className="m-10">{val.description}</p>
          <div className="flex item-center gap-5">
            {val.live && <Button />}
            {val.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
}
