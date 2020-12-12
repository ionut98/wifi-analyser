import React from 'react';

import PropTypes from 'prop-types';

import noSignal from './0lines.png';
import signal1line from './1line.png';
import signal2lines from './2lines.png';
import signal3lines from './3lines.png';
import signal4lines from './4lines.png';

const SignalIcon = ({
  signal,
}) => {

  return (
    <img 
      src={
        signal < 0.21
        ? noSignal
        : signal < 0.41
        ? signal1line
        : signal < 0.61
        ? signal2lines
        : signal < 0.81
        ? signal3lines
        : signal4lines
      }
      width={40}
      height={35}
      alt='signal value representation'
    /> 
  );

};

SignalIcon.propTypes = {
  signal: PropTypes.number.isRequired,
};

export default SignalIcon;