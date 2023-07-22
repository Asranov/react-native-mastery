import React from 'react'

function TestLearn() {
  (() => {
    const privateVar = "This is private"
    console.log(privateVar);
  })()

  const myModule = (() => {
    console.log("Hello my module")
  })();

  (() => {
    console.log("This anonim function does not work");
  });

  ((a: number, b: number) => {
    console.log("a + b = ", a + b)
  })(5, 3)

  return (
    <>
    </>
  )
}

export default TestLearn