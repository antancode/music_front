import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {musicplay} from '../redux/Action';
import { useParams } from 'react-router-dom';

export default function MusicList() {

    const [musiclist, setMusiclist] = useState(null);
    const [playlist, setPlaylist] = useState(null);
    const [playlistrecord, setPlaylistrecord] = useState(null);

    const {id} = useParams();

    

    const dispatch = useDispatch();

    const playmusic = (file) => {
        // console.log(file);
        dispatch(musicplay({song: file}));
    }

    const addto = (pid, sid) => {
        axios.post('http://localhost:4000/playlist', {playlist: pid, song: sid}).then((response) => {
            // setPlaylist(response?.data);
        })
    }

    useEffect(()=> {
        if(id){
            axios.get('http://localhost:4000/playlist_record?id='+id).then((response) => {
                setPlaylistrecord(response?.data);
            })
        }else{
            setPlaylistrecord(null);
        }
        axios.get('http://localhost:4000/music').then((response) => {
            setMusiclist(response?.data);
        })

        axios.get('http://localhost:4000/playlist').then((response) => {
            setPlaylist(response?.data);
        })


    }, [setMusiclist, id])

    console.log(playlistrecord);

  return (
    <div className='music-list'>
        {
            (playlistrecord === null) ?
                musiclist !== null &&
                musiclist.map((ms, index) => {
                    return(
                    <div className='block' key={index}>
                        {
                            playlist !== null &&
                            <div> Add to PlayList : &nbsp;
                                <select onChange={(e) => addto(e.target.value, ms.id)}>
                                    <option>Select</option>
                                    {
                                        playlist.map((ls) => {
                                            return (
                                                <option value={ls.id}>{ls.name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        }
                        <div className='songname'>Song : {ms.song_name}</div>
                        <div className='singers'>Singers : {ms.singers}</div>
                        <div className='file_name' onClick={ () => playmusic(ms.file_name)}> Audio : {ms.file_name}</div>
                    </div>
                    )
                })

            : 
            playlistrecord.map((ms, index) => {
                return(
                <div className='block' key={index}>
                    <div className='songname'>Song : {ms.song_name}</div>
                    <div className='singers'>Singers : {ms.singers}</div>
                    <div className='file_name' onClick={ () => playmusic(ms.file_name)}> Audio : {ms.file_name}</div>
                </div>
                )
            })
            
        }
        
    </div>
  )
}
