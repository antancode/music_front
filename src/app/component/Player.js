import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function Player() {

    const {loading, data} = useSelector(state => state.playsong);

    const [song, setSong] = useState('Kalangudhe-MassTamilan');

    useEffect(() => {
        setSong(data.song);
    },[data]);

  return (
    <AudioPlayer
        autoPlay
        src={`/assets/mp3/${song}.mp3`}
        onPlay={e => console.log("onPlay")}
        // other props here
    />
  )
}
