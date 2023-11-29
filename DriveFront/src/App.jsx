import { useEffect, useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import MyDrive from "./components/MyDrive";
import Info from "./components/Info";
import RenameFile from "./components/RenameFile";
import Showfile from "./components/Showfile";
import AddFile from "./components/AddFile";
import FileComp from "./components/FileComp";
import Dir from "./components/Dir";
function App() {
  const [info, setInfo] = useState();
  const [changeName, setChangeName] = useState();
  const [showFile, setShowFile] = useState();
  const [files, setFiles] = useState([]);
  const [user, setUser] = useState("eyal");

  useEffect(() => {
    fetch(`http://localhost:3000/files/${user}`)
      .then((data) => data.json())
      .then((data) => setFiles(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MyDrive
              setInfo={setInfo}
              setShowFile={setShowFile}
              setChangeName={setChangeName}
              setFiles={setFiles}
              files={files}
            />
          }
        ></Route>
        <Route
          path="/info"
          element={<Info info={info} files={files} />}
        ></Route>
        <Route
          path={`${user}/*`}
          element={<FileComp user={user} files={files} />}
        ></Route>
        <Route
          path={`directories/${user}/*`}
          element={
            <Dir
              setInfo={setInfo}
              setShowFile={setShowFile}
              setChangeName={setChangeName}
              user={user}
              files={files}
            />
          }
        ></Route>
        <Route
          path="/renamefile"
          element={<RenameFile changename={changeName} />}
        ></Route>
        <Route
          path="/showfile"
          element={<Showfile showfile={showFile} />}
        ></Route>
        <Route path="/addnewfile" element={<AddFile />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
