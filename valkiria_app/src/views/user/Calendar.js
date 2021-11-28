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
  console.log(props.count);
  console.log(turns);
  const days = props.todayDay;
  return _.range(props.count).map(index => {
    const styles = 
    {
      background: "#fff",
      width: "20px",
      // This needs to be equal to props.strokeWidth
      height: `${8}%`,
      backgroundColor:`${index<days?"red":"white"}`
    }
    console.log(styles);
    return (
      <Cycle key={index} turns={index * turns} style={styles} />
    )
  } );
}

export default RadialSeparators;