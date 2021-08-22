import React from 'react';
import { TextField } from '@material-ui/core'

export const Date = (props) => {
    return (
        <TextField
            fullWidth
            type="date"
            margin="normal"
            InputLabelProps={{
                shrink: true,
            }}
            {... props}
        />
    )
}