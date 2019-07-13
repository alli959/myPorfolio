const init = {
    type: 'NONE',
    payload: {
        title: "NONE",
        about: {
            background: 'NONE',
            usage : 'NONE'
        },
        tools: "NONE",
        websites: {
            isapi: false,
            github: "https://github.com/alli959/",
            demo: ""
        }
    }
}

const Project =  (state = init, {type, payload} ) =>{
    switch(type){
        case 'CHANGE':
            return(
                payload
            );
        default:
            return state;
    }
}

export default Project