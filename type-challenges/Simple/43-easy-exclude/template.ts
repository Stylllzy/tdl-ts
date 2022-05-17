type MyExclude<T, U> = T extends U ? never : T


// Js

// function MyExclude(T, U) {
//   // 遍历T数组和U数组，如果U数组中的元素在T数组中存在，则剔除该元素
//   const result = [];
//   for (let i = 0; i < T.length; i++) {
//     const t = T[i];
//     // let boo =false;
//     // for (let j = 0; j < U.length; j++) {
//     //   const u = U[j];
//     //   if (t === u) {
//     //     boo = true;
//     //   }
//     // }
//     // if (!boo) {
//     //   result.push(t);
//     // }

//     if (!U.includes(t)) {
//       result.push(t);
//     }
//   }
//   return result;
// }

// const r =MyExclude(['a', 'b', 'c'], ['a', 'b']);
