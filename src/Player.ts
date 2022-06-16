import {Agent} from "./Agent";

export class Player {
  private name: string;
  private team: string;
  private contractPeriodMonth: number;
  private agent: Agent;

  constructor(name: string, team = "FA", contractPeriodMonth = 0, agent: Agent) {
    this.name = name;
    this.team = team;
    this.contractPeriodMonth = contractPeriodMonth;
    this.agent = agent;
  }

  introduce(): void {
    console.log(`Player name: ${this.name}`);
    console.log(`Player team: ${this.team}`);
    console.log(`Player contractPeriodMonth: ${this.contractPeriodMonth}`);
    console.log(`Player agent: ${this.agent}`);
  }

  join(team: string, contractPeriodMonth: number): void {
    this.team = team;             // java 에서의 this 보다 다르게 쓰일 수 있음
    this.contractPeriodMonth = contractPeriodMonth;
  }

  leave(): void {
    this.team = "FA"
  }

  extendContract(periodMonth: number): void {
    this.contractPeriodMonth += periodMonth;
  }

  managedBy(agent: Agent): void {
    this.agent = agent;
  }
}