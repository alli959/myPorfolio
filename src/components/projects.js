import React, { Component } from 'react';
import {Tabs, Tab, Card, CardTitle, CardText, CardActions, Button} from 'react-mdl';
import { Link } from 'react-router-dom'
import logo_react from '../images/logo_react.png';



class Projects extends Component {
    constructor(){
        super();
        this.state = { 
            activeTab: 0,
        
        };
    }


    //check on activeTab
    checkTab(){
        switch(this.state.activeTab){
            case 0:
                return this.HtmlTab();
            case 1:
                return this.NodeJsTab();
            case 2:
                return this.ReactTab();
            case 3:
                return this.WebGlTab();
            case 4:
                return this.SpringTab();
            case 5:
                return this.UnityTab();
            case 6:
                return this.JavascriptTab();
            default:
                return this.HtmlTab();
        }
    }

    //see information about project
    aboutProject = (name) =>{
        this.props.passValue(name);
    }

    aboutWebgl = (name) =>{
        this.props.webGlValue(name);
    }

    //Case Html/CSS Tab
    HtmlTab(){
        
    }

    //Case NodeJS
    NodeJsTab(){
        return(
            <h1>NodeJs page</h1>
        )
    }


    ReactTab(){
        return(
            <Card shadow={5} style={{width: '320px', height: '400px', margin: 'auto', marginTop: '10px'}}>
                <CardTitle expand style={{color: '#000000', padding: '0px', background: "no-repeat center/90% url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png)" }}></CardTitle>
                <CardTitle>Gullnesti(not ready)</CardTitle>
                <CardText>
                need to add a title here....
                </CardText>
                <CardActions border>
                    <Button onClick={() => {window.open('https://github.com/alli959/lokaverkefni');}} colored>Github</Button>
                    <Button onClick={() => {window.open('https://gullnesti.herokuapp.com/menu')}} colored>Live Demo</Button>
                    <Button onClick={() => {this.aboutProject("GULLNESTI")}}colored ><Link to = "/project"> About</Link></Button>

                </CardActions>
            </Card>
        )
    }

    WebGlTab(){
        return(
            <Link to = "/webgl">

            <Card onClick = {() => {this.aboutWebgl("FISHTANK")}}  shadow={5} expand style={{width: '220px', height: '200px', margin: 'auto', marginTop: '10px', background: "no-repeat center/90% url(https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/WebGL_Logo.svg/2000px-WebGL_Logo.svg.png)"}}>

                <CardTitle className = "cardTitle" expand style={{  color: '#46b6ac', padding: '0px' }}>Fishtank</CardTitle>

            </Card>
            </Link>


        )
    }


    SpringTab(){
        return(
            <Card shadow={5} style={{width: '320px', height: '400px', margin: 'auto', marginTop: '10px'}}>
                <CardTitle expand style={{color: '#000000', padding: '0px', background: 'url(https://westergaard.eu/wp-content/uploads/2018/03/spring-framework.png) center/cover #FFFFFF'}}></CardTitle>
                <CardTitle>Bball-statTracker</CardTitle>
                <CardText>
                A lot of players and coaches in basketball have used statistics to understand their....
                </CardText>
                <CardActions border>
                    <Button onClick={() => {window.open('https://github.com/alli959/Hugbunadarverkefni1', '_blank');}} colored>Github</Button>
                    <Button onClick={() => {window.open('https://bball-stat.herokuapp.com/', '_blank', )}} colored>Live Demo</Button>
                    <Button onClick={() => {this.aboutProject("STATTRACKER")}}colored ><Link to = "/project"> About</Link></Button>

                </CardActions>
            </Card>
        )
    }



    UnityTab(){
        return(
            <h1>Unity page</h1>
        )
    }

    JavascriptTab(){
        return(
            <h1>Javascript page</h1>
        )
    }



    render() {
        return(
            <div className="tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>Html/Css</Tab>
                    <Tab>NodeJS Projects</Tab>
                    <Tab>React</Tab>
                    <Tab>WebGl</Tab>
                    <Tab>Spring</Tab>
                    <Tab>Unity</Tab>
                    <Tab>Javascript Games</Tab>
                </Tabs>
                {this.checkTab()}
                
            </div>
        )
    }
}

export default Projects;