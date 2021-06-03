// Must be the first import
if (process.env.NODE_ENV !== "production") {
  // Must use require here as import statements are only allowed
  // to exist at the top of a file.
  require("preact/debug");
}

import "./style/index.css";
import App from "./components/app";

export default App;
