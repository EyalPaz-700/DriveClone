import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function FileComp({ files, user }) {
  const params = useParams();
  const [content, setContent] = useState("");
  useEffect(() => {
    if (params["*"].endsWith("txt")) {
      fetch("http://localhost:3000/" + user + "/" + params["*"])
        .then((data) => data.text())
        .then(setContent);
    }
  }, []);

  return (
    <div>
      {content ? (
        content
      ) : (
        <img src={"http://localhost:3000/" + user + "/" + params["*"]} />
      )}{" "}
    </div>
  );
}
