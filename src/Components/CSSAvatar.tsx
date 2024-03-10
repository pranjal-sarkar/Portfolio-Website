import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

// importing images
import cssIcon from "../Assets/css.png";

export default function CSSAvatar() {
    return (
        <>
            <Stack direction="row" spacing={2}>
                <Avatar
                    alt="Remy Sharp"
                    src={cssIcon}
                    sx={{ width: 56, height: 56 }}
                />
            </Stack>
        </>
    );
}
