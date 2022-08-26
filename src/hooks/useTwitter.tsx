import { useState } from "react"
import Influencer from "../models/Influencer"
import { IObserver } from "../models/interfaces/IObserver"
import User from "../models/User"

export const users = [
  new User("Krystaline"),
  new User("Sujeong"),
  new User("Jane"),
]
export const influencer = new Influencer(users)

export const useTwitter = () => {
  const [fakeFeeds, setFakeFeeds] = useState<string[]>([]);
  const [fakeUsers, setFakeUsers] = useState<IObserver[]>(users);

  const addFeed = (message: string) => {
    influencer.addFeed(message);
    setFakeFeeds((messages) => [...messages, message])
  }

  const setFollow = (name: string) => {
    users.forEach((user) => {
      if (user.getName() === name) {
        user.setIsFollowed();
      }
    })
    
    setFakeUsers(users);
  }

  return {
    addFeed,
    setFollow
  };
}
