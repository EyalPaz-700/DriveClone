import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    fetch(`http://localhost:3000/files/${user}`)
      .then((data) => data.json())
      .then((data) => setFiles(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="containar--main">
        <div className="text-con">
          <h1 className="myfiles--text">My files</h1>
        </div>

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
