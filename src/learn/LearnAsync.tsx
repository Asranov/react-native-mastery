import React, { useEffect } from 'react';

function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: 'John', age: 30 });
    }, 1000);
  });
}

function LearnAsync() {
  useEffect(() => {
    (async () => {
      console.log("Before await");

      const userData = await fetchUserData();

      console.log("After await");
      console.log(userData);
    })();
  }, []);

  return <></>;
}

export default LearnAsync;
