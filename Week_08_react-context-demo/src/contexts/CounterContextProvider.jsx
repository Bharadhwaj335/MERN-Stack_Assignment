import { useState } from 'react'
import { CounterContext } from './CounterContext'
function CounterContextProvider({children}) {
    //state
    const [counter1, setCounter1] = useState(1);
    const [counter2, setCounter2] = useState(1);
    //function to modify state
    const changeCounter1 = () => {
        setCounter1(counter1 + 1);
    };
    const changeCounter2 = () => {
        setCounter2(counter2 + 1);
    };

    return (
        <CounterContext.Provider value={{counter1, counter2, changeCounter1, changeCounter2}}>
            {children}
        </CounterContext.Provider>
        
  );
}

export default CounterContextProvider