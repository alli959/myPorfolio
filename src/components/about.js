import React, { Component } from 'react';



    import {Card, CardTitle, CardText, CardActions, Button} from 'react-mdl';

class About extends Component {
    render() {
        return(
            <div className = "Card_about" style = {{display: 'flex'}}>
                <Card shadow={5} style={{width: '520px', height: '1000px', margin: 'auto', marginTop: '10px'}}>

                    <CardTitle expand style={{color: '#000000', padding: '0px', background: "no-repeat center/60% url(https://i.ibb.co/gRzD73f/asdf.jpg)" }}></CardTitle>
                    <CardTitle>About Me</CardTitle>
                    <CardText>
                        <CardTitle>Intro</CardTitle>
                        My name is Alexander Guðmundsson and I'm a programmer. I live in Reykjavík, Iceland.
                    </CardText>
                    <CardText>
                        <CardTitle>Me</CardTitle>
                        I am a very motivated and hard-working programmer. My favorite programming language is Javascript but I also like
	                    Python and Java. I am a very responsible worker along with being extremely positive. I love solving projects
                         or tasks that make you think outside the box and use your creative thinking. I hope to keep learning new things as I start working.
                    </CardText>
                    <CardText>
                        <CardTitle>Hobbies</CardTitle>
                        My main hobby is music. I play piano and sing. I learned classical piano for 10 years, then I decided to start playing by ear.
	                    I would say I'm a great troubadour on piano.
                    </CardText>
                    <CardActions border>
                        <Button onClick={() => {window.open('https://github.com/alli959');}} colored>Github</Button>
                        <Button onClick={() => {window.open('https://www.linkedin.com/in/alexander-gu%C3%B0mundsson-053200189/')}} colored>LinkedIn</Button>

                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default About;