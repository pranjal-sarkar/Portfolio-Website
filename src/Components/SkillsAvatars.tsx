import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

// importing images
import gitIcon from "../Assets/git.png";

export default function GitAvatar() {
    return (
        <>
            <Stack direction="row" spacing={2}>
                <Avatar
                    alt="Remy Sharp"
                    src={gitIcon}
                    sx={{ width: 56, height: 56 }}
                />
            </Stack>
        </>
    );
}
