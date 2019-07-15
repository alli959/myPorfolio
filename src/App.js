import React, { Component } from 'react';
import './App.css';
import {Layout, Icon, Header, Navigation, Drawer, Content} from 'react-mdl'; 
import { Link } from 'react-router-dom'
import Main from './components/main';
import profile from './images/Profile.jpg';
import { connect } from 'react-redux';
import {websites} from './actions';
import {webGl} from './actions';
import {Tab} from './actions';
import {Location} from './actions';



class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentTab: 0
        }

        this.setProject = this.setProject.bind(this);
        this.setWebGl = this.setWebGl.bind(this);
        this.setTab = this.setTab.bind(this);
        this.setLocation = this.setLocation.bind(this);

    }


    setLocation = (id) => {
        this.props.setLocation(id);
    }

    
    
    setProject = (name) => {
        this.props.setProject(name);
    }

    setWebGl = (name) => {
        this.props.setWebGl(name);
    }

    setTab = (id,name) => {
        this.props.setTab(id,name);
    }

    

    


    
    render(){
    return (
        <div>
        {/* Uses a header that scrolls with the text, rather than staying locked at the top */}
            <div className="demo-big-content">
                <Layout>
    <Header className="header-navbar" title={<Link onClick = {() => {this.setLocation(-1)}} style={{textDecoration: 'none', color: 'white'}} to="/">Portfolio</Link>} scroll>
                        <Navigation>
                            <Link onClick = {() => {this.setLocation(0)}} to="/resume">Resume</Link>
                            <Link onClick = {() => {this.setLocation(1)}} to="/about">About Me</Link>
                            <Link onClick = {() => {this.setLocation(2)}} to="/myprojects">My Projects</Link>
                            <Link onClick = {() => {this.setLocation(3)}} to="/contact">Contact Info</Link>
                        </Navigation>
                    </Header>
                    <Drawer title="Alexander Guðmundsson">
                        <div className = "Nav">
                            <Navigation>

                                <div className = "Nav_item">
                                    <Icon name="arrow_forward" style={this.props.location && this.props.location[0]?{display: "inline"}:{display: "none"}}/>
                                    <Link onClick = {() => {this.setLocation(0)}} to="/resume" colored>Resume</Link>
                                </div>

                                <div className = "Nav_item">
                                    <Icon name="arrow_forward" style={this.props.location && this.props.location[1]?{display: "inline"}:{display: "none"}}/>
                                    <Link onClick = {() => {this.setLocation(1)}} to="/about">About Me</Link>
                                </div>
                                <div className = "Nav_item">
                                    <Icon name="arrow_forward" style={this.props.location && this.props.location[2]?{display: "inline"}:{display: "none"}}/>

                                    <Link onClick = {() => {this.setLocation(2)}} to="/myprojects">My Projects</Link>
                                        <div style = {this.props.location && this.props.location[2]?{display: "block"}:{display:"none"}} className = "subNav">



                                            <div className = "subNav_item" onClick = {() =>{this.setTab(0,"TAB")}}>
                                                <Icon name="arrow_forward" style={this.props.tab===0?{display: "inline"}:{display: "none"}}/>
                                                Html/Css
                                            </div>
                                            <div className = "subNav_item" onClick = {() => {this.setTab(1,"TAB")}}>
                                                <Icon name="arrow_forward" style={this.props.tab===1?{display: "inline"}:{display: "none"}}/>
                                                NodeJS Projects
                                            </div>
                                            <div className = "subNav_item" onClick = {() => {this.setTab(2,"TAB")}}>
                                                <Icon name="arrow_forward" style={this.props.tab===2?{display: "inline"}:{display: "none"}}/>
                                                React
                                            </div>
                                            <div className = "subNav_item" onClick = {() => {this.setTab(3,"TAB")}}>
                                                <Icon name="arrow_forward" style={this.props.tab===3?{display: "inline"}:{display: "none"}}/>
                                                WebGl
                                            </div>
                                            <div className = "subNav_item" onClick = {() => {this.setTab(4,"TAB")}}>
                                                <Icon name="arrow_forward" style={this.props.tab===4?{display: "inline"}:{display: "none"}}/>
                                                Spring
                                            </div>
                                            <div className = "subNav_item" onClick = {() => {this.setTab(5,"TAB")}}>
                                                <Icon name="arrow_forward" style={this.props.tab===5?{display: "inline"}:{display: "none"}}/>
                                                Unity
                                            </div>
                                            <div className = "subNav_item" onClick = {() => {this.setTab(6,"TAB")}}>
                                                <Icon name="arrow_forward" style={this.props.tab===6?{display: "inline"}:{display: "none"}}/>
                                                Javascript Games
                                            </div>
                                        </div>



                                </div>
                                <div className = "Nav_item">

                                    <Icon name="arrow_forward" style={this.props.location && this.props.location[3]?{display: "inline"}:{display: "none"}}/>

                                    <Link onClick = {() => {this.setLocation(3)}} to="/contact">Contact Info</Link>
                                </div>
                            </Navigation>
                        </div>
                    </Drawer>
                    <Content>
                        <div className="page-content" />
                        <Main location = {this.setLocation} tab = {this.props.tab} setTab = {this.setTab} webGlValue = {this.setWebGl} passValue = {this.setProject} title = {this.props.title} about = {this.props.about} tools = {this.props.tools} websites = {this.props.websites} settings = {this.props.settings} controls = {this.props.controls}/>
                    </Content>
                </Layout>
            </div>
        </div>
        );
    }
}

const mapStateToProps = state => ({
    title: state.Project.title,
    about: state.Project.about,
    tools: state.Project.tools,
    websites: state.Project.websites,
    settings: state.webGl.settings,
    controls: state.webGl.controls,
    tab: state.Tab.id,
    location: state.Location.location
});

const mapActionsToProps = {
    setProject: websites,
    setWebGl: webGl,
    setTab: Tab,
    setLocation: Location
}

export default connect(mapStateToProps, mapActionsToProps)(App);
