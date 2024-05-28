import type { Equal, Expect } from '@type-challenges/utils'

type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>]

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}

// 使用场景

interface Person {
  name: string
  age: number
}

const getValueByKey: (person: Readonly<Person>) => void = (person) => {
  console.log(person.name) // 正确：输出 Echo
  console.log(person.age) // 正确：输出 26

  // person.name = "James";   // 报错：无法为“name”赋值，因为它是只读属
  // person.age = 36;         // 报错：无法为“age”赋值，因为它是只读属性
}

let person: Person = {
  name: 'Echo',
  age: 26,
}
getValueByKey(person)

//   作者：前端小码哥
//   链接：https://juejin.cn/post/7278103323055947835
//   来源：稀土掘金
//   著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
