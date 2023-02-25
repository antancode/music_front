const playtomusic = (data) => {
    return {
        type: 'playmusic',
        payload: data
    }
}


export const musicplay = (data) => {
    return (dispath) => {
        dispath(playtomusic(data));
    }
}