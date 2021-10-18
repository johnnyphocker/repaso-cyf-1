import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState({});

  const getData = async () => {
    let res = await fetch(url);
    let data2 = await res.json();
    setData(data2);
  };

  useEffect(() => {
    getData();
  }, []);

  return data;
};