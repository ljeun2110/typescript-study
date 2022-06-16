export class Agent {
  private name: string;

  constructor(name = 'FA') {
    this.name = name;
  }

  introduce(): void {
    console.log(`Agent name: ${this.name}`);
  }
}