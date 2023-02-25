const initial = {
    loading: true,
    data: [],
    error: ''
}

export const musicreducer = (state = initial, action) => {
    switch (action.type) {
        case 'playmusic':
            return {
                loading: false,
                data: action.payload
            }
    
        default: return state;
    }
}