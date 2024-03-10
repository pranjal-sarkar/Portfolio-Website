import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

// importing images
import jsIcon from "../Assets/javascript.png";

export default function JSAvatar() {
    return (
        <>
            <Stack direction="row" spacing={2}>
                <Avatar
                    alt="Remy Sharp"
                    src={jsIcon}
                    sx={{ width: 56, height: 56 }}
                />
            </Stack>
        </>
    );
}
