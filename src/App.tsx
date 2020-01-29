import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/configureStore";
import HomePage from "./components/HomePage";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
};

export default App;
