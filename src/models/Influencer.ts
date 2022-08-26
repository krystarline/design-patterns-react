import { IObserver } from "./interfaces/IObserver";

export default class Influencer {
  private followers: IObserver[];
  private feeds: string[];

  constructor(followers: IObserver[]) {
    this.followers = followers; // User 객체 3개
    this.feeds = [];
  }

  public getFollowers(): IObserver[] {
    return this.followers;
  }

  public getFeeds(): string[] {
    return this.feeds;
  }

  // public follow(observer: IObserver): void {
  //   const isExist = this.followers.includes(observer);

  //   if (isExist) {
  //     return console.log("Subject: Observer has been followed already.");
  //   }

  //   console.log("Subject: Followed an observer.");

  //   this.followers.push(observer);
  // }

  // public unfollow(observer: IObserver): void {
  //   const observerIndex = this.followers.indexOf(observer);

  //   if (observerIndex === -1) {
  //     return console.log("Subject: Nonexistent observer.");
  //   }

  //   this.followers.splice(observerIndex, 1);

  //   console.log("Subject: Detached an observer.");
  // }

  public addFeed(message: string): void {
    this.feeds.push(message); // "안녕 팔로워들아!"
    this.followers
      .filter((follower) => {
        console.log(follower);
        return follower.getIsFollowed();
      })
      .forEach((follower) => follower.alarm(message));
  }
}
