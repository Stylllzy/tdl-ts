type MyAwaited<T extends Promise<unknown>>= T extends Promise<infer x> 
  ? x extends Promise<unknown> 
    ? MyAwaited<x> : x
  : T;

// infer 
// 只能在条件类型里面使用
// 设置一个未知数，变量x

