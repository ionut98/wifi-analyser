import React from 'react';

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
}) => {

  const classes = useStyles();

  const {
    ssid,
    signal,
    quality,
    frequency,
    encryption,
    macAddress,
    channel,
    maxQuality,
    manufacturer,
    mode,
  } = network;

  const computeSignalColor = (quality) => 
    quality < 0.21
    ? '#000'
    : quality < 0.41
    ? 'red'
    : quality < 0.61
    ? 'orange'
    : quality < 0.81
    ? 'yellow'
    : 'green'; 

  return (
    <ListItem className={classes.listItem}>
      <Grid container spacing={1} style={{
        width: 300,
      }}>
        <Grid item xs={12} style={{ fontFamily: 'arial', color: '#fff' }}>
          <span style={{ fontWeight: 'bolder' }}>{ssid}</span> ({macAddress})
        </Grid>
        <Grid item container xs={3} className={classes.centered}>
          <Grid item xs={12} className={classes.centered} style={{
            color: computeSignalColor(Number(quality) / Number(maxQuality))
          }}>
            {signal}dBm
          </Grid>
          <Grid item xs={12} className={classes.centered}>
            <SignalImage signal={Number(quality) / Number(maxQuality)}/>
          </Grid>
        </Grid>
        <Grid item xs={9}>
          <Grid item xs={12} style={{ color: '#fff' }}>
            CH <span style={{ color: '#81d4fa' }}>{channel}</span> {frequency}GHz <br />
            <span style={{ color: '#81d4fa' }}>Quality:</span> {quality}/{maxQuality}
          </Grid>
          <Grid item xs={12} style={{ color: '#fff' }}>
            <span style={{ color: '#81d4fa' }}>Mode:</span> {mode}
          </Grid>
          <Grid item xs={12} style={{ color: '#fff' }}>
            {manufacturer}
          </Grid>
          <Grid item xs={12} className={classes.centeredLeft}>
            { encryption && encryption.isEncrypted &&
              <> 
                <Lock
                  style={{
                    color: '#333'
                  }} 
                /> 
                <span style={{
                  color: '#eee'
                }}>
                  {
                    encryption.encryption.map((element) => <i>{`[${element}]`}</i>) 
                  }
                </span>
              </>
            }
          </Grid>
        </Grid>
      </Grid>
    </ListItem>
  );

};

NetworkItem.propTypes = { 
  network: PropTypes.object.isRequired,
};

export default NetworkItem;