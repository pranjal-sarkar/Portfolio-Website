import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

// importing images
import htmlIcon from "../Assets/html.png";

export default function HTMLAvatar() {
    return (
        <>
            <Stack direction="row" spacing={2}>
                <Avatar
                    alt="Remy Sharp"
                    src={htmlIcon}
                    sx={{ width: 56, height: 56 }}
                />
            </Stack>
        </>
    );
}
