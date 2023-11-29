import React from "react";

const Showfile = ({ showfile }) => {
  const file = "" + showfile.name;
  return <div>File: {file}</div>;
};

export default Showfile;
