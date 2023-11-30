import React, { useState } from "react";
import "../info.css";
const Info = ({ info, files }) => {
  console.log("files :", files);
  console.log("info :", info);
  const name = info.split("/").at(-1);
  const path = info;
  // const filterd = files.filter((parm) => parm.path === info)[0];
  const filterd = files.filter(
    (parm) => parm.path.split("/").at(-1) === name
  )[0];
  console.log("filterd :", filterd);
  return (
    <>
      <h1 className="myfiles--text">Info</h1>
      <div className="info--items">
        <div className="info--item">Name: {name}</div>
        <div className="info--item">Path: {path}</div>
        <div className="info--item">Size: {filterd.size}</div>
        <div className="info--item">LastModified: {filterd.lastmodified}</div>
        <div className="info--item">is dir: {"" + filterd.is_dir}</div>
      </div>
    </>
  );
};

export default Info;
