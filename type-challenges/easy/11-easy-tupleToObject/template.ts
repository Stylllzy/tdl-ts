// type TupleToObject<T extends readonly any[]> = any

type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [K in T[number]]: K;
}

// keyof array -> 索引
// 遍历array 使用 T[number]


// js
// function tupleToObject(array) {
//   const obj = {};

//   array.forEach((val) => {
//     obj[val] = val;
//   });

//   return obj;
// }
