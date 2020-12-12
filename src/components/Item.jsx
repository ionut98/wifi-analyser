import React, { useState } from 'react';

import PropTypes from 'prop-types';
import {
  Grid, 
  ListItem, 
  makeStyles,
} from '@material-ui/core';

import SignalIcon from './SignalIcon';
import { Lock } from '@material-ui/icons';

const useStyles = makeStyles({
  listItem: {
    margin: 5,
    border: '1px solid gray',
    fontFamily: 'calibri',
    fontSize: 15,
    borderRadius: 10,
    width: 370,
    backgroundColor: '#fff',
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

const Item = ({
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
    maxQuality,
    manufacturer,
    mode,
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
      <Grid container spacing={1}>
        <Grid item xs={12} style={{ fontFamily: 'arial', color: '#000' }}>
          <span style={{ fontWeight: 'bolder' }}>{ssid}</span> ({apMAC})
        </Grid>
        <Grid item container xs={3} className={classes.centered}>
          <Grid item xs={12} className={classes.centered} style={{
            color: computeSignalColor(signal)
          }}>
            {signal}dBm
          </Grid>
          <Grid item xs={12} className={classes.centered}>
            <SignalIcon signal={signal}/>
          </Grid>
        </Grid>
        <Grid item xs={9}>
          <Grid item xs={12} style={{ color: '#000' }}>
            CH <span style={{ color: '#002171' }}>{channel}</span> {frequency}MHz <br />
            Quality: {quality}/{maxQuality}
          </Grid>
          <Grid item xs={12} style={{ color: '#000' }}>
            Mode: {mode}
          </Grid>
          <Grid item xs={12} style={{ color: '#000' }}>
            {manufacturer}
          </Grid>
          <Grid item xs={12} className={classes.centeredLeft}>
            <Lock style={{
              color: '#333'
            }} /> 
            <span style={{
              color: '#000'
            }}>
              {
                security.split(',').map((element) => `[${element}]`) 
              }
            </span> 
          </Grid>
        </Grid>
      </Grid>
    </ListItem>
  );

};

Item.propTypes = { 
  network: PropTypes.object.isRequired,
  key: PropTypes.number,
};

export default Item;