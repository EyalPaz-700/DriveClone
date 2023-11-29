import React, { useState } from "react";
import "../info.css";
const Info = ({ info, files }) => {
  const filterd = files.filter((parm) => parm.name === info)[0];
  console.log("filterd :", filterd.path);

  return (
    <>
      <h1 className="myfiles--text">Info</h1>
      <div className="info--items">
        <div className="info--item">Name: {filterd.name}</div>
        <div className="info--item">Path: {filterd.path}</div>
        <div className="info--item">Size: {filterd.size}</div>
        <div className="info--item">LastModified: {filterd.lastmodified}</div>
      </div>
    </>
  );
};

export default Info;
