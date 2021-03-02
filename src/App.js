import React from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import GlobalStyle from "./GlobalStyle";
import Home from "./components/Home";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Home />
    </Provider>
  );
}

export default App;
