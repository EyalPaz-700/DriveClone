import { useState } from "react";

import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { Login } from "./components/Login";
import MyDrive from "./components/MyDrive";
import Info from "./components/Info";
import RenameFile from "./components/RenameFile";
import Showfile from "./components/Showfile";
import AddFile from "./components/AddFile";
function App() {
  const [info, setinfo] = useState();
  const [changename, setChangename] = useState();
  const [showfile, setshowfile] = useState();
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
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MyDrive
              setinfo={setinfo}
              setshowfile={setshowfile}
              setChangename={setChangename}
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
          path="/renamefile"
          element={<RenameFile changename={changename} />}
        ></Route>
        <Route
          path="/showfile"
          element={<Showfile showfile={showfile} />}
        ></Route>
        <Route path="/addnewfile" element={<AddFile />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
