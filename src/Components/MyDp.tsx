import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

// importing my profile picture
import my_img from "../Assets/My DP.jpg"

export default function MyDp() {
  return (
    <Stack direction="row" spacing={2}>
      {/* <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 24, height: 24 }}
      />
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
      <Avatar
        alt="Remy Sharp"
        src={my_img}
        sx={{ width: 300, height: 300 }}
      />
    </Stack>
  );
}
