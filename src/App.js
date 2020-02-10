import React from "react";

import "font-awesome/css/font-awesome.min.css";
import "./App.css";

// Components
import Profile from "./Profile";

function App() {
  return (
    <div>
      <h1>HELLOO PEOPLE</h1>
      <Profile firstName="Laila" lastName="AlKandery" age={100} />
      <Profile firstName="Yousef" age={200} />
    </div>
  );
}

export default App;
