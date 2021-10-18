import React, { useContext } from 'react';
import { Context } from '../context/ApiContext';

const Home = () => {
  let {data, saludo, nombre} = useContext(Context);
  return (
    <>
      <div>Personajes de Rick y morty</div>
      <br />
      <div>{saludo}</div>
      <div>{nombre}</div>
      <br />
      {
        data.results && data.results.length && data.results.map((character) => {
          return (
            <div key={character.id}>
              {character.name}
            </div>
          )
        })
      }
    </>
  )
};

export default Home;