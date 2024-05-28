type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false
type Includes<T extends readonly any[], U> = T extends [infer L, ...infer R]
  ? Equal<L, U> extends true
    ? true
    : Includes<R, U>
  : false

// type Includes<T extends readonly any[], U> = U extends T[number] ? true : false

// 对于联合类型来说，extends 的意思是用前者的每一个类型去试每一个后者的类型，返回所有结果的联合类型，所以你这样返回的就是一堆 true + 一堆 false 的联合类型，也就是 boolean
