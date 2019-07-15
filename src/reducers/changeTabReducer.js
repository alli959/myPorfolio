const init = {
    type: 'TAB',
    payload: {
        id: 0
    }
}

const Tab = (state = init, {type, payload}) => {
    if(type === "TAB"){
        return (
            payload
        );
    }
    else{
        return (
            state
        )
    }
}

export default Tab;