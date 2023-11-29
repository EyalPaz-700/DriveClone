import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "../mydrive.css";
import Info from "./Info";

const MyDrive = ({ setinfo, setChangename, setshowfile, files, setfiles }) => {
  const nav = useNavigate();

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
            <div
              onClick={(e) => {
                e.stopPropagation();
                setshowfile(values);
                nav("/showfile");
              }}
              key={index}
              className="file files"
            >
              <div className="file--name">Name: {values.name}</div>
              <div className="buttons--options">
                <NavLink
                  className="delete buttons--options--items"
                  to="delete"
                  activeClassName="active"
                >
                  Delete
                </NavLink>
                <NavLink
                  onClick={(e) => {
                    e.stopPropagation();
                    setinfo(values.name);
                  }}
                  className="info buttons--options--items"
                  to={`${values.path.split("/")[4]}/info`}
                  activeClassName="active"
                >
                  Info
                </NavLink>
                <NavLink
                  onClick={(e) => {
                    e.stopPropagation();

                    setChangename(values);
                  }}
                  className="rename buttons--options--items"
                  to="renamefile"
                  activeClassName="active"
                >
                  Rename File
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyDrive;
