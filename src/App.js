import "./bootstrap";
import React from 'react';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: (props) => ({
    background: props.color
  })
});

const App = () => {
  const classes = useStyles({color: 'red'});

  return (
    <div className={classes.root} style={{display: 'block', height: 500, width: 500}}/>
  );
}

export default App;
