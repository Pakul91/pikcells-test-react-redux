import React from "react";

export const Error = ({ error }) => {
  return (
    <div className="error">
      <h3>Something went wrong! :(</h3>
      <p>{error}</p>
    </div>
  );
};
