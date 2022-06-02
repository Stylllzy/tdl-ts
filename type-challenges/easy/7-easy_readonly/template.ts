// type MyReadonly<T> = any

// 遍历接口 使用keyof
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
}


// js版本
// 遍历全部加上readonly

// function readonly(obj) {
//   const newObj = {};
  
//   for (const key in obj) {
//     newObj["readonly" + key] = obj[key];
//   }

//   return newObj;
// }
