import React from "react";

import { updateCanvasLayer } from "../Convas/CanvasSlice";
import { handleItemCLick } from "../../data/dataSlice";

import { useDispatch } from "react-redux";
import { useEffect } from "react";

export const Item = (props) => {
  const dispatch = useDispatch();

  const { item, layer } = props;
  const index = item.order;
  const active = item.active;

  const imgSrc = `https://lab.pikcells.com/code-exercise/images/${item.imgSrc}`;

  const handleClick = () => {
    dispatch(handleItemCLick(layer, imgSrc, index));
  };

  useEffect(() => {
    if (active) {
      dispatch(updateCanvasLayer({ layer, imgSrc }));
    }
  }, []);

  return (
    <p
      className={`item btn  ${item.active ? "active" : ""} `}
      onClick={handleClick}
    >{`${item.name}`}</p>
  );
};
