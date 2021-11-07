import React from "react";

import { Item } from "../Item/Item";

export const Layer = ({ layer }) => {
  return (
    <div className="layer-container" data-layer="0">
      <h3>{`Layer ${layer.order + 1}`} </h3>

      {layer.items.map((item, i) => (
        <Item key={i} item={item} layer={layer.order} />
      ))}
    </div>
  );
};
