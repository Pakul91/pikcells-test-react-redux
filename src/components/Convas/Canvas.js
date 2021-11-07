import React from "react";
import { useDispatch } from "react-redux";

export const Canvas = (props) => {
  const dispatch = useDispatch();

  return (
    <section className="hidden-canvas">
      <canvas width="1140" height="760" hidden={true}></canvas>
    </section>
  );
};
