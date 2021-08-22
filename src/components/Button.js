import React from 'react';
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(3, 0 , 2)
    }
}))

export const ButtonType = ({children, ...props}) => {
    const styles = useStyles()

    return (
        <Button
            type="submit"
            variant="contained"
            color="primary"
            className={styles.root}
            {...props}
        >
            {children}
        </Button>
    )
}