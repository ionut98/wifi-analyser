import React from 'react';

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
  // key,
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
      <Grid container spacing={1}>
        <Grid item xs={12} style={{ fontFamily: 'arial', color: '#000' }}>
          <span style={{ fontWeight: 'bolder' }}>{ssid}</span> ({macAddress})
        </Grid>
        <Grid item container xs={3} className={classes.centered}>
          <Grid item xs={12} className={classes.centered} style={{
            color: computeSignalColor(Number(quality) / Number(maxQuality))
          }}>
            {signal}dBm
          </Grid>
          <Grid item xs={12} className={classes.centered}>
            <SignalIcon signal={Number(quality) / Number(maxQuality)}/>
          </Grid>
        </Grid>
        <Grid item xs={9}>
          <Grid item xs={12} style={{ color: '#000' }}>
            CH <span style={{ color: '#002171' }}>{channel}</span> {frequency}GHz <br />
            <span style={{ color: '#002171' }}>Quality:</span> {quality}/{maxQuality}
          </Grid>
          <Grid item xs={12} style={{ color: '#000' }}>
          <span style={{ color: '#002171' }}>Mode:</span> {mode}
          </Grid>
          <Grid item xs={12} style={{ color: '#000' }}>
            {manufacturer}
          </Grid>
          <Grid item xs={12} className={classes.centeredLeft}>
          { encryption && encryption.isEncrypted &&
              <> 
                <Lock style={{
                  color: '#333'
                }} /> 
                <span style={{
                  color: '#000'
                }}>
                  {
                    encryption.encryption.map((element) => `[${element}]`) 
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

Item.propTypes = { 
  network: PropTypes.object.isRequired,
  // key: PropTypes.number,
};

export default Item;