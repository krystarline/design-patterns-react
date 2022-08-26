import { IObserver } from "./interfaces/IObserver";

export default class Influencer {
  private followers: IObserver[];
  private feeds: string[];

  constructor(followers: IObserver[]) {
    this.followers = followers;
    this.feeds = [];
  }

  public getFollowers(): IObserver[] {
    return this.followers;
  }

  public getFeeds(): string[] {
    return this.feeds;
  }

  public addFeed(message: string): void {
    this.feeds.push(message);
    this.followers
      .filter((follower) => {
        console.log(follower);
        return follower.getIsFollowed();
      })
      .forEach((follower) => follower.alarm(message));
  }
}
