type Concat<T extends readonly unknown[], U extends readonly unknown[]> = [...T, ...U]
const tuple = [1] as const

// 1. any类型
// any 类型在 TypeScript 中是一种表示任何类型的类型，它可以用来表示任何类型的值，可以对值做任何操作，而不会触发类型检查或编译时错误。

// let x: any = 10;
// x = 'hello'; // 不会触发类型错误
// x.foo(); // 不会触发类型错误
// 1
// 2
// 3
// any 类型通常在需要处理不确定类型的值，或者在从 JavaScript 代码迁移到 TypeScript 时使用

// 2. unknown类型
// unknown 类型在 TypeScript 中是一种表示未知类型的类型，它用于表示可能具有任何类型的值，但不能直接对其进行操作，在使用时需要进行显式的类型检查或类型断言，以便进行安全的操作。
// 这样可以避免潜在的类型错误，并在编译时进行更严格的类型检查。

// let y: unknown = 10;
// // y = 'hello'; // 会触发类型错误
// // y.foo(); // 会触发类型错误

// if (typeof y === 'string') {
//   console.log(y.toUpperCase()); // 可以进行类型检查后使用
// }
// ————————————————

//                             版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。

// 原文链接：https://blog.csdn.net/qq_52395343/article/details/130043987
