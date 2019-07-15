import React from 'react';
import {Switch, Route } from 'react-router-dom';

import Front from './front';
import Resume from './resume';
import About from './about';
import Contact from './contact';
import Projects from './projects';
import Webgl from './webGl';
import AboutProject from './aboutProject';


const Main = (props) => (
    

            <Switch>

                <Route exact path="/" component={Front} />
                <Route exact path="/about" component={About} />
                <Route path="/resume" component={Resume} />
                <Route path="/contact" component={Contact} />
                <Route path="/webgl" component={() => <Webgl settings = {props.settings} controls = {props.controls}  />} />
                <Route path="/myprojects" component={() => <Projects setTab = {props.setTab} passValue = {props.passValue} webGlValue = {props.webGlValue} tab = {props.tab}/>}/>
                <Route path="/project" component={() => <AboutProject webGlValue = {props.webGlValue} title = {props.title} about = {props.about} tools = {props.tools} websites = {props.websites} />} />
            </Switch>

            
        )





export default Main;