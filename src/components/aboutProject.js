import React from 'react';

import img_statTracker from '../images/bball_stat_preview.PNG';
import img_gullnesti from '../images/gullnesti_preview.PNG';
import {Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import { Link } from 'react-router-dom'



function getPicture(title){
    switch(title){
        case "Bball-Stat-Tracker":
            return img_statTracker;
        case "Gullnesti":
            return img_gullnesti;
    }
}

const AboutProject = (props) => (
    <div className = "project">
    <Card shadow={0} style={{width: '768px', margin: 'auto'}}>
    <CardTitle>{props.title}</CardTitle>
    <img src = {getPicture(props.title)} style = {{height: '420px'}}></img>
    <CardText>
        <h2>About</h2>
        <h3>Background</h3>
        {props.about.background}
        <h3>Usage</h3>
        {props.about.usage}
        <h2>Tools</h2>
        {props.tools}
    </CardText>
    <CardActions border>
        <Button onClick={() => {window.open(props.websites.github);}} colored>Github</Button>
        <Button style = {props.websites.isapi?({display: "inline-block"}):({display: "none"})} onClick={() => {window.open(props.websites.api);}} colored>API</Button>
        <Button onClick={() => {window.open(props.websites.demo);}} colored>Live Demo</Button>
        <Button onClick = {() => {props.webGlValue("FISHTANK")}} ><Link to = "/webgl">test</Link></Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
    </Card>
    </div>

        )



export default AboutProject;