import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { Grid, List, ListSubheader, makeStyles, Typography } from '@material-ui/core';
import NetworkItem from './NetworkItem';

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

  const [networksList, setNetworksList] = useState([
    {
      ssid: "SSID1",
      signal: -40,
      quality: 32,
      frequency: 2462,
      security: "WPA2-PSK-CCMP,ESS",
      apMAC: "20:cf:30:01:01:01",
      channel: 1,
      manufacturer: 'Fiberhome Telecommunication Technologies Co.,LTD',
      maxQuality: 70,
      mode: 'Master',
    },
    {
      ssid: "SSID2",
      signal: -75,
      quality: 40,
      frequency: 2462,
      security: "WPA2-PSK-CCMP,ESS",
      apMAC: "bc:14:01:05:05:05",
      channel: 2,
      manufacturer: 'Fiberhome Telecommunication Technologies Co.,LTD',
      maxQuality: 70,
      mode: 'Master',
    },    
    {
      ssid: "SSID21",
      signal: -75,
      quality: 50,
      frequency: 2462,
      security: "WPA2-PSK-CCMP,ESS",
      apMAC: "bc:14:01:05:05:05",
      channel: 2,
      manufacturer: 'Fiberhome Telecommunication Technologies Co.,LTD',
      maxQuality: 70,
      mode: 'Master',
    },
    {
      ssid: "SSID3",
      signal: -86,
      quality: 25,
      frequency: 2462,
      security: "WPA2-PSK-CCMP,ESS",
      apMAC: "68:bf:fc:07:07:07",
      channel: 3,
      manufacturer: 'Fiberhome Telecommunication Technologies Co.,LTD',
      maxQuality: 70,
      mode: 'Master',
    },
    {
      ssid: "SSID4",
      signal: -65,
      quality: 45,
      frequency: 2462,
      security: "WPA2-PSK-CCMP,ESS",
      apMAC: "20:cf:30:01:01:01",
      channel: 4,
      manufacturer: 'Fiberhome Telecommunication Technologies Co.,LTD',
      maxQuality: 70,
      mode: 'Master',
    },
    {
      ssid: "SSID5",
      signal: -57,
      quality: 21,
      frequency: 2462,
      security: "WPA2-PSK-CCMP+TKIP,ESS,WPP",
      apMAC: "20:cf:30:01:01:01",
      channel: 5,
      manufacturer: 'Fiberhome Telecommunication Technologies Co.,LTD',
      maxQuality: 70,
      mode: 'Master',
    },
  ]);

  return (
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
          {
            networksList.map((network, index) => (
              <NetworkItem
                network={network}
                key={index}
              />
            ))
          }
        </List>
      </Grid>
    </Grid>
  );

};

NetworksList.propTypes = { 

};

export default NetworksList;