import React, { useState } from "react";
import "../info.css";
const Info = ({ info }) => {
  const [files, setFiles] = useState([
    {
      path: "../../public/user1/1.txt",
      name: "1",
      id: 1,
      size: 100,
      lastmodified: "2015-07-07T15:00:00Z",
    },
    {
      path: "../../public/user1/2.txt",
      name: "2",
      id: 2,
      size: 100,
      lastmodified: "2015-07-07T15:00:00Z",
    },
    {
      path: "../../public/user1/3.txt",
      name: "3",
      id: 3,
      size: 100,
      lastmodified: "2015-07-07T15:00:00Z",
    },
    {
      path: "../../public/user1/4.txt",
      name: "4",
      id: 4,
      size: 100,
      lastmodified: "2015-07-07T15:00:00Z",
    },
  ]);
  const filterd = files.filter((parm) => parm.id === info)[0];
  console.log(filterd.path);
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
