import React, { useRef } from 'react';

const Search = () => {
  const input = useRef();

  const changeInput = () => {
    input.current.value = 'Hola mundo';
    input.current.style.color = 'red';
  };

  return (
    <>
      <button onClick={changeInput}>Cambiar el value del input</button>
      <input ref={input} type="text" />
    </>
  )
};

export default Search;