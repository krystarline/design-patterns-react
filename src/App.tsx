import React from "react";

// import Grid from '@mui/material/Grid';

import Box from "@mui/material/Box";

import FeedList from "./FeedList";
import Profile from "./Profile";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
          {/* <Grid item> */}
            <Profile />
          {/* </Grid> */}
            <FeedList />
        </Box>
      </header>
    </div>
  );
}

export default App;
