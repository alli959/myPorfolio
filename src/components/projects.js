import React, { Component } from 'react';
import {Tabs, Tab, Card, CardTitle, CardText, CardActions, Button} from 'react-mdl';
import { Link } from 'react-router-dom'





class Projects extends Component {

    componentDidMount() {

    }


    //check on activeTab
    checkTab(){
        switch(this.props.tab){
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
        return (
            <div className = "Card_content">
                <Card onClick = {() => {window.open("https://notendur.hi.is/alg35/vefforritun/verkefni5/")}}  shadow={5} expand style={{width: '220px', height: '200px', margin: 'auto', marginTop: '10px', background: "no-repeat center/90% url(https://www.w3.org/html/logo/badge/html5-badge-h-solo.png)"}}>
                    <CardTitle className = "cardTitle" expand style={{  color: "#000", padding: '0px' }}>Html/Css 1</CardTitle>
                </Card>

                <Card onClick = {() => {window.open("https://notendur.hi.is/~alg35/vefforritun/verkefni4/")}}  shadow={5} expand style={{width: '220px', height: '200px', margin: 'auto', marginTop: '10px', background: "no-repeat center/90% url(https://www.w3.org/html/logo/badge/html5-badge-h-solo.png)"}}>
                    <CardTitle className = "cardTitle" expand style={{  color: "#000", padding: '0px' }}>Html/Css 2</CardTitle>
                </Card>

                <Card onClick = {() => {window.open("https://notendur.hi.is/~alg35/vefforritun/Lokaverkefni/vefLokaverkefni/stort-verkefni2/gogn/")}}  shadow={5} expand style={{width: '220px', height: '200px', margin: 'auto', marginTop: '10px', background: "no-repeat center/90% url(https://www.w3.org/html/logo/badge/html5-badge-h-solo.png)"}}>
                    <CardTitle className = "cardTitle" expand style={{  color: "#000", padding: '0px' }}>Html/Css 3</CardTitle>
                </Card>
            </div>
            )
    }

    //Case NodeJS
    NodeJsTab(){
        return(
            <h1>NodeJs page</h1>
        )
    }


    ReactTab(){
        return(
            <Card shadow={5} style={{width: '320px', height: '400px', margin: 'auto', marginTop: '10px', display: 'flex'}}>
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
            <div className =  "Card_content">

                <Link to = "/webgl">
                    <Card onClick = {() => {this.aboutWebgl("FISHTANK")}}  shadow={5} expand style={{width: '220px', height: '200px', margin: 'auto', marginTop: '10px', background: "no-repeat center/90% url(https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/WebGL_Logo.svg/2000px-WebGL_Logo.svg.png)"}}>
                        <CardTitle className = "cardTitle" expand style={{  color: '#46b6ac', padding: '0px' }}>Fishtank</CardTitle>
                    </Card>
                </Link>


                <Link to = "/webgl">
                    <Card onClick = {() => {this.aboutWebgl("CHAIR")}}  shadow={5} expand style={{width: '220px', height: '200px', margin: 'auto', marginTop: '10px', background: "no-repeat center/90% url(https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/WebGL_Logo.svg/2000px-WebGL_Logo.svg.png)"}}>
                        <CardTitle className = "cardTitle" expand style={{  color: '#46b6ac', padding: '0px' }}>Chair</CardTitle>
                    </Card>
                </Link>


                <Link to = "/webgl">
                    <Card onClick = {() => {this.aboutWebgl("HELESPADE")}}  shadow={5} expand style={{width: '220px', height: '200px', margin: 'auto', marginTop: '10px', background: "no-repeat center/90% url(https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/WebGL_Logo.svg/2000px-WebGL_Logo.svg.png)"}}>
                        <CardTitle className = "cardTitle" expand style={{  color: '#46b6ac', padding: '0px' }}>Helespade</CardTitle>
                    </Card>
                </Link>


                <Link to = "/webgl">
                    <Card onClick = {() => {this.aboutWebgl("SOLKERFI")}}  shadow={5} expand style={{width: '220px', height: '200px', margin: 'auto', marginTop: '10px', background: "no-repeat center/90% url(https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/WebGL_Logo.svg/2000px-WebGL_Logo.svg.png)"}}>
                        <CardTitle className = "cardTitle" expand style={{  color: '#46b6ac', padding: '0px' }}>Solar System</CardTitle>
                    </Card>
                </Link>


                <Link to = "/webgl">
                    <Card onClick = {() => {this.aboutWebgl("ROBOTARM")}}  shadow={5} expand style={{width: '220px', height: '200px', margin: 'auto', marginTop: '10px', background: "no-repeat center/90% url(https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/WebGL_Logo.svg/2000px-WebGL_Logo.svg.png)"}}>
                        <CardTitle className = "cardTitle" expand style={{  color: '#46b6ac', padding: '0px' }}>Robot Arm</CardTitle>
                    </Card>
                </Link>


                <Link to = "/webgl">
                    <Card onClick = {() => {this.aboutWebgl("PONG")}}  shadow={5} expand style={{width: '220px', height: '200px', margin: 'auto', marginTop: '10px', background: "no-repeat center/90% url(https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/WebGL_Logo.svg/2000px-WebGL_Logo.svg.png)"}}>
                        <CardTitle className = "cardTitle" expand style={{  color: '#46b6ac', padding: '0px' }}>Pong</CardTitle>
                    </Card>
                </Link>

            </div>

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

            <div className =  "Card_content">

                <Link to = "/webgl">
                    <Card onClick = {() => {window.open('https://notendur.hi.is/alg35/rocket/')}}  shadow={5} expand style={{width: '220px', height: '200px', margin: 'auto', marginTop: '10px', background: "no-repeat center/90% url(https://pluralsight.imgix.net/paths/path-icons/nodejs-601628d09d.png)"}}>
                        <CardTitle className = "cardTitle" expand style={{  color: '#46b6ac', padding: '0px' }}>SpaceShip</CardTitle>
                    </Card>
                </Link>

                <Card shadow={5} style={{width: '220px', height: '200px', margin: '0px', marginTop: '10px'}}>
                <CardTitle expand style={{color: '#46b6ac', padding: '0px', background: "no-repeat center/90% url(https://pluralsight.imgix.net/paths/path-icons/nodejs-601628d09d.png)"}}>Left 4k Dead</CardTitle>
                <CardActions border>
                    <Button onClick={() => {window.open('https://github.com/alli959/Hopverkefni-1', '_blank');}} colored>Github</Button>
                    <Button onClick={() => {window.open('https://dingolfsson.github.io/Hopverkefni/poc1/', '_blank', )}} colored>Live Demo</Button>

                </CardActions>
            </Card>
                
            </div>
        )
    }

    setTab(id){
        this.setState({
            activeTab: id
        });
    }



    render() {
        return(
            <div className = "projects">

            <div className="tabs">
                <Tabs activeTab={this.props.tab} onChange={(tabId) => this.props.setTab(tabId,"TAB")} ripple>
                    <Tab>Html/Css</Tab>
                    <Tab>NodeJS Projects</Tab>
                    <Tab>React</Tab>
                    <Tab>WebGl</Tab>
                    <Tab>Spring</Tab>
                    <Tab>Unity</Tab>
                    <Tab>Javascript Games</Tab>
                </Tabs>
            </div>
                {this.checkTab()}
            </div>
                
        )
    }
}


export default Projects;