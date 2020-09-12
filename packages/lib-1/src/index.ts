import { Library2 } from 'lib-2'

export class Library1 {
  constructor(
    private readonly lib2: Library2
  ) {}

  method1() {
    this.lib2.method1()
  }

  method2() {
    this.lib2.method2()
  }
}
