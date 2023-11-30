import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Dir({
  files,
  user,
  setInfo,
  setShowFile,
  setChangeName,
}) {
  const params = useParams();
  const [dirFiles, setDirFiles] = useState([]);
  const nav = useNavigate();
  useEffect(() => {
    debugger;
    fetch("http://localhost:3000/files/" + user + "/" + params["*"])
      .then((data) => data.json())
      .then(setDirFiles);
  }, [params["*"]]);
  return (
    <div>
      {dirFiles.map((values, index) => (
        <div
          onClick={(e) => {
            e.stopPropagation();
            if (!values.is_dir) {
              nav(values.path.split("localhost:3000")[1]);
            } else {
              nav(values.path.split("/")[values.path.split("/").length - 1]);
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
                    setDirFiles((prev) => {
                      const copy = [...prev];
                      return copy.filter((file) => file.path !== values.path);
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
  );
}
