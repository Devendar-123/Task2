import React, { createContext } from 'react'
import Child1 from './Child1';
const details = createContext();
const MainComponent = () => {
    const userData = "https://jsonplaceholder.typicode.com/users"

  return (
    <div>
      <details.Provider value={{userData:userData}}>
        <Child1/>
      </details.Provider>
    </div>
  )
}

export default MainComponent
export {details}