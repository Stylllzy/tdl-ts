// type MyPick<T, K> = any

// extends 约束
// keyof lookup 查阅该接口的所有类型
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
}


// js 版本
// 返回一个对象 
// 遍历
// todo[key] 取值
// 判断 key 是否在 todo 中
// function MyPick(todo, keys) {
//   const obj = {};

//   keys.forEach((key) => {
//     if (key in todo) {
//       obj[key] = todo[key];
//     }
//   });

//   return obj;
// }
