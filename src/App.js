import "./App.css";
import Image from "./component_profile/profile-photo";
import Name from "./component_profile/full-name";
import ADDRESS from "./component_profile/address";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="p">
      <div className="card" style={{ width: "18rem" }} >
<Image/>
        <div id="ch" className="card-body">
          <h1 className="card-title">
            <Name />
          </h1>
          <p className="card-text" />
          <ADDRESS />
          <p />
        </div>
      </div>
    </div>
  );
}

export default App;