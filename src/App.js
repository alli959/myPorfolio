import React, { Component } from 'react';
import './App.css';
import {Layout, Icon, Header, Navigation, Drawer, Content} from 'react-mdl'; 
import { Link, withRouter } from 'react-router-dom'
import Main from './components/main';
import { connect } from 'react-redux';
import {websites} from './actions';
import {webGl} from './actions';
import {Tab} from './actions';
import {Location} from './actions';






class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentTab: 0,
        }

        this.setProject = this.setProject.bind(this);
        this.setWebGl = this.setWebGl.bind(this);
        this.setTab = this.setTab.bind(this);
        this.setLocation = this.setLocation.bind(this);

    }




    componentDidUpdate(prevProps) {
        if (prevProps.location !== this.props.location) {
            if(this.props.location.pathname === '/resume'){
                this.props.setLocation(0);
            }
            else if( this.props.location.pathname === '/about'){
                this.props.setLocation(1);
            }
            else if( this.props.location.pathname === '/myprojects'){
                this.props.setLocation(2);
            }
            else if( this.props.location.pathname === '/contact'){
                this.props.setLocation(3);
            }
            else{
                this.props.setLocation(-1);
            }
        }
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
                            <Link to="/resume">Resume</Link>
                            <Link to="/about">About Me</Link>
                            <Link to="/myprojects">My Projects</Link>
                            <Link to="/contact">Contact Info</Link>
                        </Navigation>
                    </Header>
                    <Drawer title="Alexander Guðmundsson">
                        <div className = "Nav">
                            <Navigation>

                                <div className = "Nav_item">
                                    <Icon name="arrow_forward" style={this.props.pageLocation && this.props.pageLocation[0]?{display: "inline"}:{display: "none"}}/>
                                    <Link to="/resume" colored>Resume</Link>
                                </div>

                                <div className = "Nav_item">
                                    <Icon name="arrow_forward" style={this.props.pageLocation && this.props.pageLocation[1]?{display: "inline"}:{display: "none"}}/>
                                    <Link to="/about">About Me</Link>
                                </div>
                                <div className = "Nav_item">
                                    <Icon name="arrow_forward" style={this.props.pageLocation && this.props.pageLocation[2]?{display: "inline"}:{display: "none"}}/>

                                    <Link to="/myprojects">My Projects</Link>
                                        <div style = {this.props.pageLocation && this.props.pageLocation[2]?{display: "block"}:{display:"none"}} className = "subNav">



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

                                    <Icon name="arrow_forward" style={this.props.pageLocation && this.props.pageLocation[3]?{display: "inline"}:{display: "none"}}/>

                                    <Link onClick = {() => {this.setLocation(3)}} to="/contact">Contact Info</Link>
                                </div>
                            </Navigation>
                        </div>
                    </Drawer>
                    <Content>
                        <div className="page-content" />
                        <Main pageLocation = {this.setLocation} tab = {this.props.tab} setTab = {this.setTab} webGlValue = {this.setWebGl} passValue = {this.setProject} title = {this.props.title} about = {this.props.about} tools = {this.props.tools} websites = {this.props.websites} settings = {this.props.settings} controls = {this.props.controls}/>
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
    pageLocation: state.Location.pageLocation
});

const mapActionsToProps = {
    setProject: websites,
    setWebGl: webGl,
    setTab: Tab,
    setLocation: Location
}

export default withRouter(connect(mapStateToProps, mapActionsToProps)(App));
