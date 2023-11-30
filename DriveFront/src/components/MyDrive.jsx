import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../mydrive.css";
import Resource from "./Resource";

const MyDrive = ({ setInfo, user, files, setFiles }) => {
  const nav = useNavigate();
  const [inputToggle, setInputToggle] = useState(false);
  const [rename, setRename] = useState("");
  const handleInfoClick = (fileId) => {
    // Perform any additional logic here if needed
    nav({
      pathname: `/info/${fileId.id}`,
    });
  };

  return (
    <>
      <div className="containar--main">
        <div className="text-con">
          <h1 className="myfiles--text">My files</h1>
        </div>
        <button
          onClick={() => {
            nav("/addnewfile");
          }}
        >
          Add File
        </button>
        <div className="user--files">
          {files.map((values, index) => (
            <Resource
              key={values.path}
              values={values}
              setInfo={setInfo}
              setDirFiles={setFiles}
              dirFiles={files}
              user={user}
              inDir={false}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MyDrive;
