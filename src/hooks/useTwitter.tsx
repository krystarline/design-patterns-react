import { Influencer } from "../models/Observer";
import User from "../models/User";

const influencer = new Influencer();
const users = [
  new User(),
  new User(),
  new User(),
];

function useTwitter() {
  const follow = () => {
    influencer.follow(new User());
  }
}

export default useTwitter;
