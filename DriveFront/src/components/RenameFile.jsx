import React, { useState } from "react";
import "../renamefile.css";
const RenameFile = ({ changename }) => {
  const [newname, setnewname] = useState({});
  console.log(newname);
  const submit = (e) => {
    e.preventDefault();
    console.log(changename.path);
    //server req with newname
  };
  return (
    <>
      <h2>Change Name For: {changename.id}</h2>
      <div className="form--container">
        <form onSubmit={submit} className="form--rename" action="">
          <label htmlFor="newname">New Name</label>
          <input
            value={newname.name}
            onChange={(e) =>
              setnewname((prev) => ({ ...prev, newname: e.target.value }))
            }
            name="newname"
            placeholder="Type New Name"
            type="text"
          />
          <input name="submit" type="submit" />
        </form>
      </div>
    </>
  );
};

export default RenameFile;
