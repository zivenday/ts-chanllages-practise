type thenable<T> = { then: (onfulfilled: (arg: T) => any) => any }

type MyAwaited<T extends thenable<any> | Promise<any>> = T extends Promise<infer U>
  ? U extends Promise<any>
    ? MyAwaited<U>
    : U
  : T extends thenable<infer K>
  ? K
  : never
