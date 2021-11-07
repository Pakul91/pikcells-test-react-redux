import React from "react";

export function Image({ canvasLayer }) {
  return (
    <div className="img-container">
      <img
        className="img img-layer0"
        crossOrigin="anonymous"
        src={canvasLayer}
        alt="canvas layer"
      />
    </div>
  );
}
