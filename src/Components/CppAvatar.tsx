import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

// importing images
import cppIcon from "../Assets/cpp.png";

export default function CPPAvatar() {
    return (
        <>
            <Stack direction="row" spacing={2}>
                <Avatar
                    alt="Remy Sharp"
                    src={cppIcon}
                    sx={{ width: 56, height: 56 }}
                />
            </Stack>
        </>
    );
}
