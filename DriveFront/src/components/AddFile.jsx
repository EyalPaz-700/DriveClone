import React, { useState } from "react";

import "../addfile.css";
const AddFile = () => {
  const [inputs, setinputs] = useState({});
  const submit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };
  return (
    <>
      <form onSubmit={submit} className="addfile" method="post">
        <label htmlFor="namefile">
          <strong>Name of the File</strong>
        </label>
        <input
          className="items-addfile"
          type="text"
          name="namefile"
          value={inputs.namefile}
          onChange={(e) =>
            setinputs((prev) => ({ ...prev, namefile: e.target.value }))
          }
          placeholder="Name Of The File"
        />
        <label htmlFor="t_body">
          <strong>Body of the text</strong>
        </label>
        <textarea
          className="items-addfile"
          value={inputs.t_body}
          onChange={(e) =>
            setinputs((prev) => ({ ...prev, t_body: e.target.value }))
          }
          name="t_body"
          id=""
          cols="30"
          rows="10"
        ></textarea>

        <input className="items-addfile" type="submit" />
      </form>
    </>
  );
};

export default AddFile;
