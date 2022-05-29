import { Equal } from "@type-challenges/utils"

export type Includes<T extends readonly any[], U> = T extends [
  infer First, 
  ...infer Rest
] ? Equal<First, U> extends true
    ? true : Includes<Rest, U> : false


// js

/**
 * for 循环
 */
// function include(list, key) {
//   for (let i = 0; i < list.length; i++) {
//     const item = list[i];
//     if (item === key) return true;
//   }
//   return false;
// }

/**
 * 递归
 */
// function Includes(list, key) {
//   function _(list, key) {
//     if(list.length === 0) return false

//     const [first, ...rest] = list

//     if(first === key) {
//       return true
//     }else {
//       return _(rest, key)
//     }
//   }

//   return _(list, key)
// }
