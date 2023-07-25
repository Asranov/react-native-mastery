import { useEffect, useState } from 'react';

const useFetch = (url: string) => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, [url]);

  return data;
};

export default useFetch;