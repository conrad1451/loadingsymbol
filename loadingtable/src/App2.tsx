import { userAPI } from "./api/userAPI.jsx";
import { UserTable, LoadButton } from "./components/index.js";
// import { UserTable, LoadButton } from "./components/index.d.ts";
// import './app.css';
import { trackPromise } from "react-promise-tracker";

import "./App.css";

function App2() {
  return (
    <div>
      <LoadButton
        // onLoad={this.onLoadTables}
        onLoad={alert("dd")}
        title="Load user table with delay"
      />
    </div>
  );
}
export default App2;
