import React, { Component } from 'react';


import {CardText, ListItem,CardTitle, List,Card, Icon, Header, Navigation, Drawer, Content} from 'react-mdl'; 


class Resume extends Component {
    render() {
        return(
            <div className = "Resume">
                <Card shadow={0} style={{width: '768px', margin: 'auto'}}>
                    <div className = "Resume_header">
                        <h1>Alexander Guðmundsson</h1>
                        <h3>Programmer</h3>
                    </div>
                    <div className = "Resume_content">
                        <div className = "Resume_left">
                            <div className = "Resume_summary">
                                <CardText>Full-Stack programmer. I am very enthusiastic 
                                    in learning new things, looking for a future job.
                                </CardText>
                            </div>
                            <div className = "Resume_work">
                                <CardTitle>Work History</CardTitle>
                                <hr/>
                                <div className = "Resume_work_main">
                                    <div className = "Resume_work_main_left">
                                        <b>2016-06-current</b>
                                    </div>
                                    <div className = "Resume_work_main_right">
                                        <CardTitle>Vaktstjóri</CardTitle>
                                        <i>Gullnesti, Reykjavík, Grafarvogur</i>
                                        <List>
                                            <ListItem>
                                                Maintained clean, sanitized and well-organized food preparation zones to promote store efficiency. 
                                            </ListItem>
                                        </List>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = "Resume_right">
                            <div  className = "Resume_skills">
                                <CardTitle>Skills</CardTitle>
                                        <p>HTML/CSS</p>
                                        <p>Javascript</p>
                                        <p>NodeJs</p>
                                        <p>Express</p>
                                        <p>React</p>
                                        <p>Java</p>
                                        <p>Java Spring</p>
                                        <p>Python3</p>
                                        <p>Android</p>
                                        <p>SQLite</p>
                                        <p>Postgres</p>
                                        <p>XML</p>
                                        <p>Json</p>
                            </div>


                        </div>
                    </div>
                </Card>

            </div>
        )
    }
}

export default Resume;