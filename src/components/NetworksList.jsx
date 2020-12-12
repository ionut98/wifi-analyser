import React, { useState } from 'react';

import { CircularProgress, Grid, List, makeStyles, Typography } from '@material-ui/core';
import NetworkItem from './NetworkItem';

import Websocket from 'react-websocket';

const useStyles = makeStyles({
  list: {
    maxHeight: 500,
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    '-ms-overflow-style': 'none',
    scrollbarWidth: 'none',
  },
  title: {
    fontFamily: 'monospace',
    color: '#fff',
    marginTop: 30,
    marginBottom: 10,
  },
  centered: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const NetworksList = () => {

  const classes = useStyles();

  const [networksList, setNetworksList] = useState([]);

  const handleOnMessage = (message) => {
    const parsedData = JSON.parse(message);
    const {
      wifi,
    } = parsedData;

    if(wifi.length) {
      setNetworksList(
        wifi.sort((network1, network2) => network2.quality - network1.quality)
      );
    }

  };

  return (
    <>
      <Websocket
        url='ws://localhost:9002'
        onMessage={handleOnMessage}
      />
      <Grid container className={classes.centered}>
        <Grid item xs={12} className={classes.centered}>
          <Typography variant='h4' className={classes.title}>
            Wireless Networks
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <List
            className={classes.list} 
          >
            { !networksList.length ?
                <Grid item className={classes.centered}>
                  <CircularProgress size={30} style={{ color: '#fff' }}/>
                </Grid> 
              : networksList.map((network, index) => (
                  <NetworkItem
                    network={network}
                    key={index}
                  />
                ))
            }
          </List>
        </Grid>
      </Grid>
    </>
  );

};

export default NetworksList;