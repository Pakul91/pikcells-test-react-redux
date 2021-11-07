import React from "react";
import logo from "./logo.svg";
import { Layer } from "./components/Layer/Layer";
import { Canvas } from "./components/Convas/Canvas";

import "./App.css";
import { loadData, selectItemLayers } from "./data/dataSlice";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const itemLayers = useSelector(selectItemLayers);

  useEffect(() => {
    dispatch(loadData());
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Welcome to our quick design app!</h1>
        <h2>
          Our quick design app allows you to check some of the projects that our
          top designers prepared for you! You may find something you like, or it
          may inspire you to create your own custom made project of your dream
          kitchen!
        </h2>
      </header>
      <main>
        <h2>Take your kitchen desing into your own hands!</h2>
        <p>
          Each layer represents a different aspect of your kitchen. Play around
          with the options presented to you to see what incredible design you
          can create on your own!
        </p>

        <section className="design-selection-container">
          {itemLayers &&
            itemLayers.map((layer) => (
              <Layer key={layer.order} layer={layer} />
            ))}
        </section>

        <Canvas />

        <section className="buttons-container">
          <div className="button-container">
            <h3>Not inspired yet?</h3>
            <p className="btn new-items-btn">Load new designs!</p>
          </div>
          <div className="button-container">
            <h3>Satysfied?</h3>
            <p className="btn save-design-btn">Save your design!</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
