import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function EmailMessage({ setMessage }) {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Your Message here :)"
          multiline
          rows={4}
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        />
      </div>
    </Box>
  );
}
