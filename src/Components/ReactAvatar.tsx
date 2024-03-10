import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

// importing images
import reactIcon from "../Assets/react.png"

export default function ReactAvatar() {
    return (
        <>
            <Stack direction="row" spacing={2}>
                <Avatar
                    alt="Remy Sharp"
                    src={reactIcon}
                    sx={{ width: 56, height: 56 }}
                />
            </Stack>
        </>
    );
}
