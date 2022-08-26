import { IObserver } from "./interfaces/IObserver";

export default class User implements IObserver {
  private name: string;
  private alarms: string[] = [];
  private isFollowed: boolean = false;

  constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public getAlarms(): string[] {
    return this.alarms;
  }

  public getIsFollowed(): boolean {
    return this.isFollowed;
  }

  public setIsFollowed(): void {
    this.isFollowed = !this.isFollowed;
  }

  public alarm(message: string): void {
    this.alarms.push(message);
  }
}
