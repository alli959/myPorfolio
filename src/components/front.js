import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import Profile from '../images/Profile.jpg';
import Github from '../images/logo_github.png';
import Linkedin from '../images/logo_linkedin.png';
import School from '../images/logo_school.png';

class Front extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="front-grid">
                    <Cell col={12}>
                        <img src = {Profile} alt="profile" className="profile-img"></img>
                        <div className="banner">
                            <h1>Alexander Guðmundsson</h1>
                            <hr/>
                            <p>HTML/CSS | Javascript | NodeJS | Express | React | React Native | Java | Java Spring | Python3 | Android | SQLite | Postgres </p>
                            <div className="links">
                                <a href="https://github.com/alli959" target="_blank"><img src = {Github} alt="github" className="links-item"></img></a>
                                <a href="https://www.linkedin.com/in/alexander-gu%C3%B0mundsson-053200189/" target="_blank"><img src = {Linkedin} alt="linkedin" className="links-item"></img></a>
                                <a href="https://notendur.hi.is/alg35/" target="_blank"><img src = {School} alt="school" className="links-item"></img></a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Front;