export interface IObserver {
  follow(observer: IObserver): void;
  unfollow(observer: IObserver): void;
  notify(): void;
}

export class Influencer {
  private followers: IObserver[];

  constructor() {
    this.followers = [];
  }

  public follow(observer: IObserver): void {
    const isExist = this.followers.includes(observer);

    if(isExist) {
      return console.log("Subject: Observer has been followed already.");
    }

    console.log("Subject: Followed an observer.");

    this.followers.push(observer);
  }

  public unfollow(observer: IObserver): void {
    const observerIndex = this.followers.indexOf(observer);

    if(observerIndex === -1) {
      return console.log("Subject: Nonexistent observer.");
    }

    this.followers.splice(observerIndex, 1);

    console.log("Subject: Detached an observer.");
  }

  public postFeed(): void {
    console.log("Subject: Notifying observers...");

    for (const follower of this.followers) {
      follower.notify();
    }
  }
}
