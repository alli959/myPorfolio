const init = {
    type: 'LOCATION',
    payload: {
        location: [false,false,false,false]
    }
};

const Location = (state = init, {type, payload}) => {
    if(type === 'LOCATION'){
        return (
            payload
        );

    }
    else{
        return state;
    }
}

export default Location;