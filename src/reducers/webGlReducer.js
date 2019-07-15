const init = {
    type: 'NONE',
    payload: {
        settings: {
            url: "noUrl",
            height: "0px",
            width: "0px"
        },
        controls: "left Arrow = bla,rightarrow = blabla"
        
    }
}



const webGl = (state = init, {type, payload} ) =>{
    switch(type){
        case "WEBGL":
            return (
                payload
            );
            default:
                return (
                    state
                )
    }

}

export default webGl;