import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../mydrive.css";
import Info from "./Info";

const MyDrive = ({ setInfo, setChangeName, files, setFiles }) => {
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
                if (!values.is_dir) {
                  nav(values.path.split("localhost:3000")[1]);
                } else {
                  nav("directories" + values.path.split("localhost:3000")[1]);
                }
              }}
              key={values.url}
              className="file files"
            >
              <div className="file--name">
                {" "}
                {values.path.split("/")[values.path.split("/").length - 1]}
              </div>
              <div className="buttons--options">
                <Link
                  className="delete buttons--options--items"
                  activeClassName="active"
                  onClick={async (e) => {
                    e.stopPropagation();
                    try {
                      let data = fetch(
                        `http://localhost:3000/files${
                          values.path.split("localhost:3000")[1]
                        }`,
                        { method: "DELETE" }
                      );
                      if (Object.keys(await data).length === 0) {
                        setFiles((prev) => {
                          const copy = [...prev];
                          return copy.filter(
                            (file) => file.path !== values.path
                          );
                        });
                      }
                    } catch (err) {
                      console.log(err);
                    }
                  }}
                >
                  Delete
                </Link>
                <Link
                  onClick={(e) => {
                    e.stopPropagation();
                    setInfo(values.id);
                  }}
                  className="info buttons--options--items"
                  activeClassName="active"
                >
                  Info
                </Link>
                <Link
                  onClick={(e) => {
                    e.stopPropagation();

                    setChangeName(values);
                  }}
                  className="rename buttons--options--items"
                  to="renamefile"
                  activeClassName="active"
                >
                  Rename File
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyDrive;
