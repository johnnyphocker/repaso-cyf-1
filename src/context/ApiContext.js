import React, { createContext } from 'react';
import { useFetch } from '../hooks/useFetch';

export const Context = createContext();

console.log(Context)

const ApiContext = ({ children }) => {
  let data = useFetch('https://rickandmortyapi.com/api/character');
  let saludo = 'hola mundo';
  let nombre = 'JP';
  return (
    <Context.Provider value={{data, saludo, nombre}}>
      { children }
    </Context.Provider>
  )
};

export default ApiContext;