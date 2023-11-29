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
            />
          }
        ></Route>
        <Route path="/info" element={<Info info={info} />}></Route>
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
