import React, { Component } from 'react';


import {Card, CardText, CardTitle, List, ListItem,} from 'react-mdl'; 


class Resume extends Component {
    render() {
        return(
            <div className = "Resume">
                <Card shadow={0} style={{width: '768px', margin: 'auto'}}>
                    <div className = "Resume_header">
                        <CardTitle className = "Resume_title" style = {{color: '#fff', margin: 'auto', font_size: '36px'}}>Alexander Guðmundsson</CardTitle>
                        <CardTitle style = {{color: '#fff', margin: 'auto'}}>Programmer</CardTitle>
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
                                    <div className = "Resume_work_main_item">
                                        <div className = "year">
                                            <b>2016-06 -</b>
                                            <b>current</b>
                                        </div>
                                        <div className = "Resume_work_item">

                                            <CardTitle>Vaktstjóri</CardTitle>
                                            <i>Gullnesti, Reykjavík, Grafarvogur</i>

                                            <List>
                                                <ListItem>
                                                    Maintained clean, sanitized and well-organized food preparation zones to promote store efficiency. 
                                                </ListItem>
                                                <ListItem>
                                                    Promoted customer loyalty by efficiently handling food and service complaints 
                                                </ListItem>
                                                <ListItem>
                                                    Consistently provided friendly service to promote better customer engagement.  
                                                </ListItem>
                                                <ListItem>
                                                Developed loyal clientele through friendly interactions, positive attitude and prompt assistance. 
                                                </ListItem>
                                            </List>
                                        </div>
                                    </div>
                                    <div className = "Resume_work_main_item">
                                        <div className = "year">
                                            <b>2016-01 -</b>
                                            <b>2016-07</b>
                                        </div>
                                        <div className = "Resume_work_item">

                                            <CardTitle>Cashier Sales Associate</CardTitle>
                                            <i>Nettó, Reykjavík, Grafarvogur</i>
                                            <List>
                                                <ListItem>
                                                    Helped customers complete purchases, locate items and join reward programs to promote loyalty, satisfaction and sales numbers.                                                 </ListItem>
                                                <ListItem>
                                                    Kept drawers accurate, current and secure by checking bills for counterfeit markers, storing large bills and keeping adequate change.  
                                                </ListItem>
                                                <ListItem>
                                                    Welcomed and greeted customers and offered friendly, knowledgeable assistance.   
                                                </ListItem>
                                                <ListItem>
                                                    Assisted customers by answering questions and fulfilling requests.
                                                </ListItem>
                                            </List>
                                        </div>
                                    </div>

                                    <div className = "Resume_work_main_item">
                                        <div className = "year">
                                            <b>2008-06 -</b>
                                            <b>2015-12</b>
                                        </div>
                                        <div className = "Resume_work_item">
                                            <CardTitle>Meat Cutter</CardTitle>
                                            <i>Matfugl, Reykjavík, Mosfellsbær</i>
                                        </div>
                                    </div>
                                    <div className = "Resume_work_main_item">
                                        <div className = "year">
                                            <b>2013-06 -</b>
                                            <b>2014-02</b>
                                        </div>
                                        <div className = "Resume_work_item">

                                            <CardTitle>Pizza Delivery Driver</CardTitle>
                                            <i>Wilsons, Reykjavík, Grafarvogur</i>
                                        </div>
                                    </div>
                                </div>
                                <CardTitle>Education</CardTitle>
                                <hr/>
                                <div className = "Resume_work_main">
                                    <div className = "Resume_work_main_item">
                                        <div className = "year">
                                            <b>2013-08 -</b>
                                            <b>2015-06</b>
                                        </div>
                                        <div className = "Resume_work_item">

                                            <CardTitle>High School Diploma</CardTitle>
                                            <i>Verzlunarskóli Íslands - Reykjavík - Ofanleiti 1</i>
                                        </div>
                                    </div>
                                    <div className = "Resume_work_main_item">
                                        <div className = "year">
                                            <b>2015-08 -</b>
                                            <b>2019-06</b>
                                        </div>
                                        <div className = "Resume_work_item">

                                            <CardTitle>BS: Computer Science</CardTitle>
                                            <i>Háskóli Íslands - Iceland - Sæmundargötu 2</i>
                                        
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                                    </div>

                            



                        <div className = "Resume_right">
                            <div className = "Resume_skills">
                                <CardTitle>Skills</CardTitle>
                                <hr/>
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