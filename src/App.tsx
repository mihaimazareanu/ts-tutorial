import React, {FC, createContext} from 'react';
import './App.css';
import { Person } from './components/Person';
import { HairColor } from './Enums';
import { AppContextInterface } from './Interfaces';



const AppContext = createContext<AppContextInterface | null>(null)

const App: FC = () => {

  /*const name: string = "Mihai";
  const age: number = 42;
  const isMarried: boolean = false;

  const getName = (name: string): number => {
    if (name === "Mihai") {
    return age;
    } else {
      return 0;
    }
  }*/

  const contextValue: AppContextInterface = {
    name: "Mihai",
    age: 42,
    country: "Romania"
  }

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <Person name="Mihai" age={42} email="mihai.mazareanu@gmail.com" hairColor={HairColor.Brown} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
