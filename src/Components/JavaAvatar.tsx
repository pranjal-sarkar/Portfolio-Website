import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

// importing images
import javaIcon from "../Assets/java.png";

export default function JavaAvatar() {
    return (
        <>
            <Stack direction="row" spacing={2}>
                <Avatar
                    alt="Remy Sharp"
                    src={javaIcon}
                    sx={{ width: 56, height: 56 }}
                />
            </Stack>
        </>
    );
}
