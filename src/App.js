import React from 'react';
import { Header } from './Components/Header';
import { Balance } from './Components/Balance';
import { Incomeexpenses } from './Components/Incomeexpenses';
import { Transcationlist } from './Components/Transcationlist';
import { AddTranscation} from './Components/AddTranscation';

import { GlobalProvider } from './context/GlobalState';

import './App.css';


function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <Incomeexpenses />
        <Transcationlist />
        <AddTranscation />
      </div>
    </GlobalProvider>
  );
}
  

export default App;
