import React from 'react'

export default function Tutorial () {
  interface StringArray {
    [index: string]: string | number;
  }

  let myArray: StringArray;
  myArray = {a: 1,b: '2'};
  console.log(myArray)
  return (
    <div> Hello TS </div>
  )
}