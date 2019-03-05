import React from 'react';
import "./Home.css";
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// const styles = theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing.unit * 2,
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// });

function CenteredGrid(props) {
  // const { classes } = props;

  return (
    <div className="root yellowBack">
    <br/><br/><br/>
      <Grid container spacing={24}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8} >
          <Paper className="headerMain">Roberts Tractor Sales, Inc</Paper>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={6}>
          <Paper className="paper">xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className="paper">xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className="paper">xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className="paper">xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className="paper">xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className="paper">xs=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default CenteredGrid;