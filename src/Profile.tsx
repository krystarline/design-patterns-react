import React from "react";

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Fab from "@mui/material/Fab";
import Avatar from "@mui/material/Avatar";
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import NotificationsIcon from '@mui/icons-material/Notifications'; // Subscriber 한정 noti

export default function ComplexGrid() {
  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: 200,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2} >
        <Grid item>
          <Avatar>VACO</Avatar>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Krystarline
              </Typography>
              <FormGroup>
                <FormControlLabel control={<Switch defaultChecked size="medium" />} label="Follow" />
              </FormGroup>
              <Fab color="default" aria-label="noti" size="small">
                <NotificationsNoneIcon />
                {/* <NotificationsIcon /> */}
              </Fab>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
