import React from 'react'
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'


class SnowG extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {
  
      return (
        <div>
          <p className="titleText"> Project : SnowG Streetwear</p>
  
          <img onClick={this.handleShow} alt="SnowG Streetwear" src={require('./snowg.png')} />
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>SnowG Streetwear</Modal.Title>
              <div className="navDeco">
                <div className="navBarDeco1m">
                </div>
              <div className="navBarDeco2m">
              </div>
              <div className="navBarDeco3m">
              </div>  
             </div> 
            </Modal.Header>
            <Modal.Body>
               <a href="http://www.originalsnowg.com">www.originalsnowg.com</a>
  
              <hr />
               <ul>
                   <li>HTML</li>
                   <li>CSS</li>
                   <li>Javascript</li>
                   <li>Firebase</li>
               </ul>
              <hr />
  
              <h4>The Original SnowG</h4>
              <p>
                In 2004, I sold everything I owned and moved to Colorado. I joined Winter Park Resorts Life Operations team and chose to utilize their employee
                housing offerings as my place of residence. I was randomly placed with 3 other room mates. One of them was this crazy kid my age name Alika from Colorado
                Springs. In December of 2018 I joined the team for his brand SnowG Streetwear as their Web Development || Digital Marketing Specialist.
               </p>
               <p>
                 The Application is a mobile focused synopsis of SnowG as a brand utilizing HTML/CSS/Firebase to better provide traffic to our retail site
                 and social media platforms.
               </p>
               <p>
                Moving into 2019 we plan to expand the brands product offerings and social media platform presence. As for our website we are currently moving from 
                HTML/CSS to a React/ReactNative version as well as incorperate our own store and payment systems to better serve our growing customer base.  
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      )
    }
  }
  
 

  export default SnowG