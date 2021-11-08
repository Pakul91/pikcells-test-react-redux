import React, { useRef } from "react";
import {
  selectCanvasLayers,
  selectDrawCanvas,
  changeDrawCanvasState,
} from "./CanvasSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { downloadCanvas, drawCanvas } from "../../utilitties/helpers";

export const Canvas = () => {
  const dispatch = useDispatch();
  const canvasLayers = useSelector(selectCanvasLayers);
  const shouldDrawCanvas = useSelector(selectDrawCanvas);

  const canvasRef = useRef(null);
  const layer0 = useRef(null);
  const layer1 = useRef(null);
  const layer2 = useRef(null);

  useEffect(() => {
    if (shouldDrawCanvas) {
      drawCanvas(canvasRef, layer0, layer1, layer2);
      downloadCanvas(canvasRef.current);
      dispatch(changeDrawCanvasState(false));
    }
  }, [shouldDrawCanvas, canvasRef, dispatch]);

  return (
    <div>
      <section className="desigin-display-container">
        <div className="img-container">
          <img
            className="img img-layer0"
            ref={layer0}
            crossOrigin="anonymous"
            src={canvasLayers.layer0}
            alt="canvas layer"
          />
        </div>
        <div className="img-container">
          <img
            ref={layer1}
            className="img img-layer1"
            crossOrigin="anonymous"
            src={canvasLayers.layer1}
            alt="canvas layer"
          />
        </div>
        <div className="img-container">
          <img
            ref={layer2}
            className="img img-layer2"
            crossOrigin="anonymous"
            src={canvasLayers.layer2}
            alt="canvas layer"
          />
        </div>
      </section>
      <section className="hidden-canvas">
        <canvas width="1140" height="760" ref={canvasRef}></canvas>
      </section>
    </div>
  );
};
