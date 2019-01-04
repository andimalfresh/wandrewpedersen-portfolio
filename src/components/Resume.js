import React from 'react'
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'


class Resume extends React.Component {
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
          <p className="titleText">Resume</p>
  
          <img className="resumeContent" onClick={this.handleShow} alt="Andrew Pedersen - Resume" src={require('./AndrewPedersen_resumeSmall.png')} />
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Andrew Pedersen - Resume</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <p><a href="https://drive.google.com/file/d/1x50qU56YwrGzMQHlyt8a1s-VZfsL_lV6/view?usp=sharing" target="_blank" rel="noopener noreferrer"> Downloadable Copy</a></p>
  
            <img alt="Resume" className="resume" src={require('./AndrewPedersen_resume.png')} />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      )
    }
  }
  
 

  export default Resume