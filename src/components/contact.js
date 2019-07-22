import React, { Component } from 'react';
import {Card, CardTitle} from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div className = "Card_contact" style = {{display: 'flex'}}>
                <Card shadow={5} style={{width: '420px', height: '400px', margin: 'auto', marginTop: '10px'}}>
                    <CardTitle>Contact Info</CardTitle>
                    <div className = "Contact-item">
                        <b>Name:</b>
                        <p>Alexander Guðmundsson</p>
                    </div>
                    <div className = "Contact-item">
                        <b>Address:</b>
                        <p>Flétturimi 35 Reykjavík, Iceland</p>
                    </div>
                    <div className = "Contact-item">
                        <b>Phone:</b>
                        <p>(354)7727719</p>
                    </div>
                    <div className = "Contact-item">
                        <b>email:</b>
                        <p>alexandergudmundsson@gmail.com</p>
                    </div>
                </Card>
            </div>
        )
    }
}

export default Contact;