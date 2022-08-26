import React, { useState } from "react";

import Box from "@mui/material/Box";

import { FeedList } from "./FeedList";
import { Profile } from "./Profile";

import "./App.css";

import { influencer, users, useTwitter } from "./hooks/useTwitter";

export const App: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [isFollowButtonToggled, setIsFollowButtonToggled] = useState<boolean>(false);

  const { addFeed, setFollow } = useTwitter();
  
  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  }

  const addFeedHandler = () => {
    addFeed(message);
    setMessage("");
  }

  const setFollowHandler = (name: string) => {
    setFollow(name);
    setIsFollowButtonToggled((button) => !button);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
          <FeedList feeds={influencer.getFeeds()} />
          <input
            value={message}
            onChange={handleMessageChange}
          />
          <button onClick={addFeedHandler}>피드 추가</button>
        </Box>
        <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
          {users.map((user) => <Profile
            name={user.getName()}
            alarms={user.getAlarms()}
            follow={user.getIsFollowed()}
            setFollow={setFollowHandler}
          />)}
        </Box>
      </header>
    </div>
  );
};
