import React from "react";
import { ThemeProvider } from "./ThemeContext";
import Header from "./Header";
import MainContent from "./MainContent";
import "./App.css";

const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
      <Header/>
        <div>
       
          <MainContent />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
