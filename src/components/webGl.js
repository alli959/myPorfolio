import React from 'react';
import Iframe from 'react-iframe'
import {List, ListItem} from 'react-mdl'; 

const Webgl = (props) => (


    <div className = "webgl_content">
        
        <Iframe url={props.settings.url}
            width= {props.settings.width}
            height={props.settings.height}
            id="canvas"
            className="canvas"
            display="block"
            position="relative"
            scrolling= "no"/>
        
            <List className = "webgl_controls">
                {props.controls.split(',').map(line =>
                    <ListItem className = "webgl_controls_item">{line}</ListItem>
                    )}
            </List>

        </div>
    

    


);
export default Webgl;