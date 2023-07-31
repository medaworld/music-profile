import React, { useEffect, useState } from 'react';
import {
  AudioProgress,
  AudioProgressWrapper,
} from './CustomPlayerProgressStyles';

function CustomPlayerProgress({
  played,
  handleSeekMouseDown,
  handleSeekChange,
  handleSeekMouseUp,
}) {
  const [progressBarStyle, setProgressBarStyle] = useState({});

  useEffect(() => {
    setProgressBarStyle({
      background: `linear-gradient(
          to right,
          #fe2851 0%,
          #fe2851 ${played * 100}%,
          #eeeeee ${played * 100}%,
          #eeeeee 100%
        ) no-repeat`,
    });
  }, [played]);

  return (
    <AudioProgressWrapper>
      <AudioProgress
        style={progressBarStyle}
        type={'range'}
        min={0}
        max={0.999999}
        step={'any'}
        value={played}
        onMouseDown={handleSeekMouseDown}
        onChange={handleSeekChange}
        onMouseUp={handleSeekMouseUp}
      />
    </AudioProgressWrapper>
  );
}

export default CustomPlayerProgress;
