import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function PlayList() {

    const [playlist, setPlaylist] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:4000/playlist').then((response) => {
            setPlaylist(response?.data);
        })
    })


  return (
    <div className='container'>
            <table width='100%'>
                <thead>
                    <tr>
                        <th>Play list Name</th>
                        
                        <th>Action</th>

                    </tr>
                </thead>
                {
                    playlist !== null &&
                    playlist.map((rs) => {
                        return (
                            <tr>
                                <td>{rs.name}</td>
                                <td><Link to={`/playlistsong/${rs.id}`}>view</Link></td>
                            </tr>
                        )
                    })
                }
                
            </table>
            
            
            
    </div>
  )
}
