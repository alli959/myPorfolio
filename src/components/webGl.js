import React, {Component} from 'react';
import Iframe from 'react-iframe'
import {Layout, Header, Navigation, Drawer, Content, List, ListItem} from 'react-mdl'; 

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
                <ListItem>Bryan Cranston</ListItem>
                <ListItem>Aaron Paul</ListItem>
                <ListItem>Bob Odenkirk</ListItem>
            </List>

        </div>
    

    


);
export default Webgl;