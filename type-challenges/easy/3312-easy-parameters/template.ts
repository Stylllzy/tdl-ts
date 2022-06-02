type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never;

// 推断使用该类型时所传入的参数或参数类型
// 若规定参数类型，则返回类型；若传的是具体值，则返回具体值
