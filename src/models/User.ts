import { IObserver } from "./Observer";

class User implements IObserver {
  follow(observer: IObserver): void {
    throw new Error("Method not implemented.");
  }
  unfollow(observer: IObserver): void {
    throw new Error("Method not implemented.");
  }
  notify(): void {
    throw new Error("Method not implemented.");
  }
}

export default User;
