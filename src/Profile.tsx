import React from "react";

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Fab from "@mui/material/Fab";
import Avatar from "@mui/material/Avatar";
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import NotificationsIcon from '@mui/icons-material/Notifications';
import { Badge } from "@mui/material";

interface IProps {
  name: string
  alarms: string[]
  follow: boolean
  setFollow: Function
}

export const Profile: React.FC<IProps> = ({ name, alarms, follow, setFollow }) => {
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
                {name}
              </Typography>
              <FormGroup>
                <FormControlLabel control={
                  <Switch
                    size="medium"
                    checked={follow}
                    onChange={() =>  setFollow(name)}
                  />
                  } label="Follow"
                />
              </FormGroup>
              <Fab color="default" aria-label="noti" size="small">
                <Badge badgeContent={alarms.length} color="error">
                  <NotificationsIcon />
                </Badge>
              </Fab>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
