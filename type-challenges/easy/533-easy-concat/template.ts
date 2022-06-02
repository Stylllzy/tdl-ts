// 这个类型接受两个参数，返回的新数组类型应该按照输入参数从左到右的顺序合并为一个新的数组。
// type Result = Concat<[1], [2]> // expected to be [1, 2]

type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];


// js
// function Concat(arr1,arr2) {
//   // spread 操作符
  
//   return [...arr1,...arr2];
// }
