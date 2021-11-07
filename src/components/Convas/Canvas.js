import React from "react";
import { Image } from "../Image/Image";
import { selectCanvasLayers } from "./CanvasSlice";

import { useSelector } from "react-redux";

export const Canvas = () => {
  const canvasLayers = useSelector(selectCanvasLayers);
  const canvasKeys = Object.keys(canvasLayers);

  return (
    <div>
      <section className="desigin-display-container">
        {canvasLayers &&
          canvasKeys.map((key) => (
            <Image key={key} canvasLayer={canvasLayers[key]} />
          ))}
      </section>
      <section className="hidden-canvas">
        <canvas width="1140" height="760" hidden={true}></canvas>
      </section>
    </div>
  );
};
