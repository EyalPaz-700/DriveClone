import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../mydrive.css";
import Info from "./Info";

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
        <button
          onClick={() => {
            nav("/addnewfile");
          }}
        >
          Add File
        </button>
        <div className="user--files">
          {files.map((values) => (
            <div
              onClick={(e) => {
                e.stopPropagation();
                if (!values.is_dir) {
                  nav(values.path.split("localhost:3000")[1]);
                } else {
                  nav("directories" + values.path.split("localhost:3000")[1]);
                }
              }}
              key={values.path}
              className="file files"
            >
              <div className="file--name">
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
                    setInfo(e.target.href);
                  }}
                  className="info buttons--options--items"
                  to={`/info/${user}/${values.path.split("/").at(-1)}`}
                  activeClassName="active"
                >
                  Info
                </Link>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setInputToggle((prev) => !prev);
                  }}
                  className="rename buttons--options--items"
                >
                  Rename File
                </button>
                {inputToggle && (
                  <>
                    <input
                      type="text"
                      onInput={(e) => {
                        e.stopPropagation();
                        setRename(e.target.value);
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    ></input>
                    <button
                      onClick={async (e) => {
                        e.stopPropagation();
                        try {
                          debugger;
                          let data = await fetch(
                            `http://localhost:3000/files/` +
                              user +
                              "/" +
                              values.path.split("/").slice(-1),
                            {
                              method: "PUT",
                              headers: {
                                "Content-Type": "application/json",
                              },
                              body: JSON.stringify({
                                name: rename,
                              }),
                            }
                          );
                          data = await data.json();
                          if (data) {
                            const copy = [...files];
                            const currentElement = copy.find(
                              (file) => file.path === values.path
                            );
                            currentElement.path =
                              currentElement.path.split("/");
                            currentElement.path[
                              currentElement.path.length - 1
                            ] = rename;
                            currentElement.path = currentElement.path.join("/");
                            setFiles(copy);
                          } else {
                            console.error("error");
                          }
                        } catch (err) {
                          console.log(err);
                        }
                      }}
                      className="rename buttons--options--items"
                    >
                      Submit
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyDrive;
