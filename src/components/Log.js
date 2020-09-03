import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

function Log (){
    const classes = useStyles();
    return(
        <div className='Log'>
        <TextField  id="filled-basic" label="Name" variant="filled" />
        <TextField  id="filled-basic" label="Last Name" variant="filled" />
        <br/>
        <TextField  id="filled-basic" label="Email" variant="filled" />
        <TextField type="password" id="filled-basic" label=" New Password" variant="filled" />
        <TextField type="password" id="filled-basic" label=" Repeat Password" variant="filled" />
        <br/>
        
        <TextField
            id="date"
            label="Birthday"
            type="date"
            defaultValue="2017-05-24"
            className={classes.textField}
            InputLabelProps={{
            shrink: true,
        }}
      />
      <br/>
     <div>
      <FormControlLabel
          value="start"
          control={<Checkbox color="primary" />}
          label="
          The man"
          labelPlacement="start"
        />
        <FormControlLabel
          value="start"
          control={<Checkbox color="primary" />}
          label="Woman"
          labelPlacement="start"
        />
        </div>
        <br/>

        <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Icon></Icon>}
      >
        <Link to="/">Send</Link>
      </Button>

         </div>
    )
}

export default Log;