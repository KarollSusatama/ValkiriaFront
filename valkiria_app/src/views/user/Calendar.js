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
      <div style={props.style}>
        <strong style = {{
          color: 'white',
          position:"absolute",
          left:`${props.index<10 ?"25%":"9%"}`,
          size:"12px"
        }}>{props.index+1}</strong>
      </div>
    </div>
  );
}

function RadialSeparators(props) {
  const turns = 1 / props.count;

  const days = props.todayDay;
  return _.range(props.count).map(index => {
    let color= "green";
    if(index<5){
      color = "orange"

    }else if(index>10 && index<16){
      color = "violet"

    }else if((index+1) === days){
      color = "blue"
    }
    
    const styles = 
    {
      background: "#fff",
      width: "20px",
      // This needs to be equal to props.strokeWidth
      height: `${8}%`,
      backgroundColor:`${color}`
    }
    return (
      <Cycle key={index} turns={index * turns} style={styles} index={index} />
    )
  } );
}

export default RadialSeparators;