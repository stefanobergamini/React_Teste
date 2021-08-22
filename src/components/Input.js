import React from 'react';
import { TextField } from '@material-ui/core'

export const Input = (props) => {
    return (
        <TextField
            fullWidth
            margin="normal"
            InputLabelProps={{
                shrink: true,
            }}
            {... props}
        />
    )
}