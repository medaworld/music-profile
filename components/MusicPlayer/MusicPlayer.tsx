import React, { useState } from 'react';

const MusicPlayer = () => {
  const trackUrl =
    'https://s3.amazonaws.com/audio.distrokid.com/preview_44353978_18F3FF57-BFC3-4288-9EE030D9C5FD4637.mp3';

  const [isPlaying, setPlaying] = useState(false);
  const audioRef = React.createRef();

  return (
    <div>
      <audio controls>
        <source src={trackUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MusicPlayer;
