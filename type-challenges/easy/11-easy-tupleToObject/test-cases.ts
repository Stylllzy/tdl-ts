import type { Equal, Expect } from '@type-challenges/utils'
import { JsxEmit } from 'tsd/libraries/typescript';

// as const 讲里面元素固定为常量
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>, 
      { 
        tesla: 'tesla'; 
        'model 3': 'model 3'; 
        'model X': 'model X'; 
        'model Y': 'model Y' 
      }
    >
  >,
]

// @ts-expect-error
// 希望下面这个样例报错
type error = TupleToObject<[[1, 2], {}]>

// const let -> Js
// type interface -> Ts
// typeof 非类型世界js -> 类型世界ts
