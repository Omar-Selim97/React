import React from "react";
import { Wave } from "react-animated-text";

const exampleStyle = {
  display: "inline-block",
  width: "100%",
  fontSize: "25px"
};


export const Wave1 = () => (
  <div style={exampleStyle}>
    <Wave text="By Omar Selim   &copy;2021 " effect="fadeOut" effectChange={1.0} />
    
  </div>
);
