import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import ContactForm from './form';

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Joey Rivera</h2>
            <img
              src="https://media.licdn.com/dms/image/C4E03AQHmcJbWwYboqg/profile-displayphoto-shrink_200_200/0?e=1578528000&v=beta&t=Zo6OBLvJFErABETrAXEErIC_aA9mHt-ZZXeT5tScBhQ"
              alt="avatar"
              className="avatar-img-3"
              style={{height: '250px', margin:'-5'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>If you want to get to work with me, you know how to get ahold of me.</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (813) 847-0551
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    joey7040@hotmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem> 
                  <ContactForm />
                    
                </ListItem>

              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
