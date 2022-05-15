
// 第一种解法
// type First<T extends any[]> = T extends [] ? never : T[0]

// 第二种解法
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0]

// 第三种解法
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never

// 第四种解法
type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never

// 知识点
// 1. extends 类型判断
// 2. 获取tuple的第一个元素
// 3. extends union 判断规则
// 4. inter 使用

// js
// function firstOfArray(arr) {
//   // 判断数组是否为空，如果是空数组，返回 never
//   return arr[0];
// }
