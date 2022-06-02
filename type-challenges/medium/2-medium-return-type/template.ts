type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : any

/**
 * 复现ReturnType<T>，返回类型
 */
