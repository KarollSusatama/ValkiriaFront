import React from "react";
import _ from "lodash";

function Cycle(props) {
  return (
    <div
      style={{
        position: "absolute",
        height: "100%",
        transform: `rotate(${props.turns}turn)`,
        left: `${50}%`
      }}
    >
      <div style={props.style} />
    </div>
  );
}

function RadialSeparators(props) {
  const turns = 1 / props.count;
  return _.range(props.count).map(index => (
    <Cycle key={index} turns={index * turns} style={props.style} />
  ));
}

export default RadialSeparators;