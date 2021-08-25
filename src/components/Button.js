import React from 'react';
import Button from '@material-ui/core/Button'

export const ButtonType = ({children, ...props}) => {

    return (
        <Button
            type="submit"
            variant="contained"
            color="primary"
            {...props}
        >
            {children}
        </Button>
    )
}