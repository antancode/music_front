import axios from 'axios';
import React, { useState } from 'react'

export default function NewPlayList() {

    const [listname, setListname] = useState({
        name: '',
        description: ''
    });

    const [error, setError] = useState({})

    const addplaylist = (e) => {
        e.preventDefault();
        let error = {};
        if(listname.name === ''){
            error.name = 'name should not be empty';
        }else{
            error.name = ''
        }

        setError(error);

        if(error.name === ''){
            console.log('check');
            axios.post('http://localhost:4000/music',  listname).then((response) => {
                if(response.data.success){
                    
                }
            }).catch((err) => {
                console.log(err);
            })
        }
    }

  return (
    <div className='container'>
        <form onSubmit={addplaylist}>
            <table width='100%'>
                <tr>
                    <td>Playlist Name</td>
                    <td><input type='text' onChange={ (e) => {setListname({...listname, name: e.target.value})}} /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>{error.name}</td>
                </tr>
                <tr>
                    <td>Playlist Descrptio</td>
                    <td><textarea  onChange={ (e) => {setListname({...listname, description: e.target.value})}} /></td>
                </tr>
                <tr>
                    <td></td>
                    <td><button>Submit</button></td>
                </tr>
            </table>
            
            
            
        </form>
    </div>
  )
}
