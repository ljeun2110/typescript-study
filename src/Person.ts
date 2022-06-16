export class Person {
  /* 이름 */
  private name: string;
  /* 직업 */
  private occupation: string;

  constructor(name: string, occupation: string) {
    this.name = name;             // java 에서의 this 보다 다르게 쓰일 수 있음
    this.occupation = occupation;
  }

  /**
   * 정보 출력
   */
  print(): void {
    console.log('printing...');
    console.log(`name: ${this.name}`);
    console.log(`occupation: ${this.occupation}`);
  }

  foo(value1: string, value2?: string): void {
    console.log(`value1: ${value1}`);

    if (value2) {
      console.log(`value2: ${value2}`);
    }
  }

  callee(printName: string, callback: Function): Function {
    return function () {
      console.log(printName);
      callback();
    };
  }
}