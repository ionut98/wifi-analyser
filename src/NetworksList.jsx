import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { List } from '@material-ui/core';

const NetworksList = () => {

  const [networksList, setNetworksList] = useState([
    {
      ssid: "ssid1",
      signal: "signal1",
      quality: "quality1",
      frequency: "frequency1",
      security: "security1",
      apMAC: "apMAC1",
      channel: "channel1",
    },
    {
      ssid: "ssid2",
      signal: "signal2",
      quality: "quality2",
      frequency: "frequency2",
      security: "security2",
      apMAC: "apMAC2",
      channel: "channel2",
    },
    {
      ssid: "ssid3",
      signal: "signal3",
      quality: "quality3",
      frequency: "frequency3",
      security: "security3",
      apMAC: "apMAC3",
      channel: "channel3",
    },
    {
      ssid: "ssid4",
      signal: "signal4",
      quality: "quality4",
      frequency: "frequency4",
      security: "security4",
      apMAC: "apMAC4",
      channel: "channel4",
    },
    {
      ssid: "ssid5",
      signal: "signal5",
      quality: "quality5",
      frequency: "frequency5",
      security: "security5",
      apMAC: "apMAC5",
      channel: "channel5",
    },
  ]);

  return (
    <List>
      {
        networksList.map((network, index) => {
          <NetworkItem 
            network={network}
            key={index}
          />
        })
      }
    </List>
  );

};

NetworksList.propTypes = { 

};

export default NetworksList;