import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl'; 
import { Link } from 'react-router-dom'
import Main from './components/main';
import profile from './images/Profile.jpg';
import { connect } from 'react-redux';
import {websites} from './actions';
import {webGl} from './actions';
import {Tab} from './actions';



class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentTab: 0
        }

        this.setProject = this.setProject.bind(this);
        this.setWebGl = this.setWebGl.bind(this);
        this.setTab = this.setTab.bind(this);

    }



    
    
    setProject = (name) => {
        this.props.setProject(name);
    }

    setWebGl = (name) => {
        this.props.setWebGl(name);
    }

    setTab = (id,name) => {
        console.log(name);
        this.props.setTab(id,name);
    }

    

    


    
    render(){
    return (
        <div>
        {/* Uses a header that scrolls with the text, rather than staying locked at the top */}
            <div className="demo-big-content">
                <Layout>
    <Header className="header-navbar" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Portfolio</Link>} scroll>
                        <Navigation>
                            <Link to="/resume">Resume</Link>
                            <Link to="/about">About Me</Link>
                            <Link to="/myprojects">My Projects</Link>
                            <Link to="/contact">Contact Info</Link>
                        </Navigation>
                    </Header>
                    <Drawer title="Alexander Guðmundsson">
                        <div className = "Nav">
                            <Navigation>

                                <Link to="/resume">Resume</Link>
                                <Link to="/about">About Me</Link>
                                <Link to="/myprojects">My Projects</Link>
                                    <div className = "subNav">
                                        <div onClick = {() =>{this.setTab(0,"TAB")}}>
                                            Html/Css
                                        </div>
                                        <div onClick = {() => {this.setTab(1,"TAB")}}>
                                            NodeJS Projects
                                        </div>
                                        <div onClick = {() => {this.setTab(2,"TAB")}}>
                                            React
                                        </div>
                                        <div onClick = {() => {this.setTab(3,"TAB")}}>
                                            WebGl
                                        </div>
                                        <div onClick = {() => {this.setTab(4,"TAB")}}>
                                            Spring
                                        </div>
                                        <div onClick = {() => {this.setTab(5,"TAB")}}>
                                            Unity
                                        </div>
                                        <div onClick = {() => {this.setTab(6,"TAB")}}>
                                            Javascript Games
                                        </div>
                                    </div>
                                <Link to="/contact">Contact Info</Link>
                            </Navigation>
                        </div>
                    </Drawer>
                    <Content>
                        <div className="page-content" />
                        <Main tab = {this.props.tab} setTab = {this.setTab} webGlValue = {this.setWebGl} passValue = {this.setProject} title = {this.props.title} about = {this.props.about} tools = {this.props.tools} websites = {this.props.websites} settings = {this.props.settings} controls = {this.props.controls}/>
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
    tab: state.Tab.id
});

const mapActionsToProps = {
    setProject: websites,
    setWebGl: webGl,
    setTab: Tab
}

export default connect(mapStateToProps, mapActionsToProps)(App);
