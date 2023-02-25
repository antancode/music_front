import React from 'react'
import MusicList from '../component/MusicList'
import Player from '../component/Player'

export default function Home() {
  return (
    <div className='container'>
        <Player />
        <MusicList />
    </div>
  )
}
