import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: "100%",
  },
}));

export function SimpleSelect(props) {
  const classes = useStyles();
  
  const { onChange, name } = props;
  return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel shrink>
                    Profissão
                </InputLabel>
                <Select
                  displayEmpty={true}
                  name={name}
                  onChange={onChange}
                  {... props}
                >
                  <MenuItem value="nenhuma">Nenhuma</MenuItem>
                  <MenuItem value="profissão1">Profissão1</MenuItem>
                  <MenuItem value="profissão2">Profissão2</MenuItem>
                  <MenuItem value="profissão3">Profissão3</MenuItem>
                </Select>
                
            </FormControl>
            
        </div>
    );
}