import React, { useState } from 'react';

import PropTypes from 'prop-types';
import {
  Grid, 
  ListItem, 
  makeStyles,
} from '@material-ui/core';

import SignalImage from './SignalImage';
import { Lock } from '@material-ui/icons';

const useStyles = makeStyles({
  listItem: {
    borderBottom: '1px solid white',
    fontFamily: 'Arial',
    fontSize: 15,
  },
  centeredLeft: {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
  },
  centered: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const NetworkItem = ({
  network,
  key,
}) => {

  const classes = useStyles();

  const {
    ssid,
    signal,
    quality,
    frequency,
    security,
    apMAC,
    channel,
  } = network;

  const computeSignalColor = (signal) => 
    signal < -80
    ? '#000'
    : signal < -70
    ? 'red'
    : signal < -60
    ? 'orange'
    : signal < -50
    ? 'yellow'
    : 'green';

  return (
    <ListItem className={classes.listItem} key={key}>
      <Grid container spacing={1} style={{
        width: 300,
      }}>
        <Grid item xs={12} style={{ fontFamily: 'arial', color: '#fff' }}>
          <span style={{ fontWeight: 'bolder' }}>{ssid}</span> ({apMAC})
        </Grid>
        <Grid item container xs={3} className={classes.centered}>
          <Grid item xs={12} className={classes.centered} style={{
            color: computeSignalColor(signal)
          }}>
            {signal}dBm
          </Grid>
          <Grid item xs={12} className={classes.centered}>
            <SignalImage signal={signal}/>
          </Grid>
        </Grid>
        <Grid item xs={9}>
          <Grid item xs={12} style={{ color: '#fff' }}>
            CH <span style={{ color: '#81d4fa' }}>{channel}</span> {frequency}MHz <br />
            {quality}
          </Grid>
          <Grid item xs={12} className={classes.centeredLeft}>
            <Lock style={{
              color: '#333'
            }} /> 
            <span style={{
              color: '#eee'
            }}>
              {
                security.split(',').map((element) => <i>{`[${element}]`}</i>) 
              }
            </span> 
          </Grid>
        </Grid>
      </Grid>
    </ListItem>
  );

};

NetworkItem.propTypes = { 
  network: PropTypes.object.isRequired,
  key: PropTypes.number,
};

export default NetworkItem;