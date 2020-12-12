import React, { useState } from 'react';

import { CircularProgress, Grid, List, makeStyles, Typography } from '@material-ui/core';
import Item from './Item';

import Websocket from 'react-websocket';

const useStyles = makeStyles({
  container: {
    marginTop: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#fff',
    borderRadius: 10,
    width: 380,
  },
  list: {
    maxHeight: window.innerHeight - 100,
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    '-ms-overflow-style': 'none',
    scrollbarWidth: 'none',
    backgroundColor: '#ddd',
  },
  title: {
    fontFamily: 'Cambria',
    color: '#000',
    marginTop: 30,
    marginBottom: 10,
  },
  centered: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredTitle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  }
});

const ItemsList = () => {

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
  }

  return (
    <>
      <Websocket
        url='ws://localhost:9002'
        onMessage={handleOnMessage}
      />
      <Grid container className={classes.container}>
      <Grid item xs={12} className={classes.centeredTitle}>
        <Typography variant='h5' className={classes.title}>
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
              <Item 
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

export default ItemsList;