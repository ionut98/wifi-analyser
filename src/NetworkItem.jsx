import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { ListItem } from '@material-ui/core';

const NetworkItem = ({
  network
}) => {

  const {
    ssid,
    signal,
    quality,
    frequency,
    security,
    apMAC,
    channel,
  } = network;

  return (
    <ListItem>
      {ssid} {signal}
      {quality} {frequency}
      {security} {apMAC}
      {channel}
    </ListItem>
  );

};

NetworksList.propTypes = { 
  network: PropTypes.object.isRequired,
};

export default NetworksList;