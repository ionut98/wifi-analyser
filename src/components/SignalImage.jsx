import React from 'react';

import PropTypes from 'prop-types';

import noSignal from './0lines.png';
import signal1line from './1line.png';
import signal2lines from './2lines.png';
import signal3lines from './3lines.png';
import signal4lines from './4lines.png';

const SignalImage = ({
  signal,
}) => {

  return (
    <img 
      src={
        signal < -80
        ? noSignal
        : signal < -70
        ? signal1line
        : signal < -60
        ? signal2lines
        : signal < -50
        ? signal3lines
        : signal4lines
      }
      width={35}
      height={30}
      alt='signal value representation'
    /> 
  );

};

SignalImage.propTypes = {
  signal: PropTypes.number.isRequired,
};

export default SignalImage;