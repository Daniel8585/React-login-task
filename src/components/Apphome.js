import React from 'react';
import '../App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';



function Apphome() {
  return (
    <div className="App">
        
      <TextField  id="filled-basic" label="Email address" variant="filled" />
      <TextField type="password" id="filled-basic" label="Password" variant="filled" />
    <Button variant="contained" color="primary">
         Log in
    </Button>
    <Button variant="contained" color="primary">
         <Link to="/Log">Sign up</Link>  
    </Button>

    </div>
  );
}

export default Apphome;