import { useState } from 'react';

interface MyHookParams {
  id: number;
  name: string;
}

const useMyHook = (params: MyHookParams) => {
  const [id, setId] = useState(params.id);
  const [name, setName] = useState(params.name);


  return {
    id,
    name,
  };
};

export default useMyHook;
