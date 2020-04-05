import React from 'react';
import "./App.scss";
import {LoanProvider} from "./contexts/LoanContext";
import InputFormComponent from "./components/InputFormComponent/InputFormComponent";
import LoanDisplayComponent from './components/loanDisplayComponent/LoanDisplayComponent';

function App() {
  return (
    <div className="app">
      <LoanProvider>
        <InputFormComponent />
        <LoanDisplayComponent />
      </LoanProvider>
    </div>
  );
}

export default App;
