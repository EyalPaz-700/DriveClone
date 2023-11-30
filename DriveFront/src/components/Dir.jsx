import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../dir.css";
import Resource from "./Resource";
export default function Dir({ user, setInfo }) {
  const params = useParams();
  const [dirFiles, setDirFiles] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/files/" + user + "/" + params["*"])
      .then((data) => data.json())
      .then(setDirFiles);
  }, [params["*"]]);
  return (
    <div className="dir">
      {dirFiles.map((values) => (
        <Resource
          key={values.path}
          values={values}
          setDirFiles={setDirFiles}
          dirFiles={dirFiles}
          params={params}
          user={user}
        />
      ))}
    </div>
  );
}
