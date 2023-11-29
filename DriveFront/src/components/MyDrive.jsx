import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "../mydrive.css";
import Info from "./Info";

const MyDrive = ({ setinfo, setChangename, setshowfile }) => {
  const nav = useNavigate();
  const [files, setFiles] = useState([
    {
      path: "../../public/user1/two.txt",
      name: "1",
      id: 1,
      size: 100,
      lastmodified: "2015-07-07T15:00:00Z",
    },
    {
      path: "../../public/user1/one.txt",
      name: "2",
      id: 2,
      size: 100,
      lastmodified: "2015-07-07T15:00:00Z",
    },
    {
      path: "../../public/user1/two.txt",
      name: "3",
      id: 3,
      size: 100,
      lastmodified: "2015-07-07T15:00:00Z",
    },
    {
      path: "../../public/user1/two.txt",
      name: "4",
      id: 4,
      size: 100,
      lastmodified: "2015-07-07T15:00:00Z",
    },
  ]);

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
              onClick={() => {
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
                  onClick={() => setinfo(values.id)}
                  className="info buttons--options--items"
                  to="info"
                  activeClassName="active"
                >
                  Info
                </NavLink>
                <NavLink
                  onClick={() => setChangename(values)}
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
