import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

// importing images
import sqlIcon from "../Assets/mysql.png";

export default function SQLAvatar() {
    return (
        <>
            <Stack direction="row" spacing={2}>
                <Avatar
                    alt="Remy Sharp"
                    src={sqlIcon}
                    sx={{ width: 56, height: 56 }}
                />
            </Stack>
        </>
    );
}
