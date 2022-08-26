import React from "react";
import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import BottomNav from "./BottomNav";

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 500,
  color: theme.palette.text.primary,
}));

interface IProps {
  feeds: string[]
}

export const FeedList: React.FC<IProps> = ({ feeds }) => {
  return (
    <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
      {feeds.map((feed) =>
        <StyledPaper
          sx={{
            my: 1,
            mx: "auto",
            p: 2,
          }}
        >
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar>VACO</Avatar>
            </Grid>
            <Grid item xs zeroMinWidth>
              <Typography noWrap>{feed}</Typography>
              <BottomNav />
            </Grid>
          </Grid>
        </StyledPaper>
      )}
    </Box>
  );
}
