import React, { useState } from "react";
import "../renamefile.css";
const RenameFile = ({ changename }) => {
  const [newname, setnewname] = useState();

  const submit = (e) => {
    e.preventDefault();
    console.log(changename.path);
    const user = JSON.parse(localStorage.getItem("currentUser"));
    fetch(`http://localhost:3000/files/${user}`)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      })
      .then((data) => {
        const path = data[0].path;
        console.log("path :", path);
        const filename = path.split("/")[3];
        fetch(`http://localhost:3000/files/${user}/${filename}`, {
          method: "PUT",
          body: JSON.stringify({ name: newname }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      });

    //server req with newname
  };
  return (
    <>
      <h2>Change Name For: {changename.id}</h2>
      <div className="form--container">
        <form onSubmit={submit} className="form--rename" action="">
          <label htmlFor="name">New Name</label>
          <input
            value={newname}
            onChange={(e) => setnewname(e.target.value)}
            name="name"
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
