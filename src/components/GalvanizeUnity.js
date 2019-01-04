import React from 'react'
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'


class GalvanizeUnity extends React.Component {
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
          <p className="titleText">Project : Galvanize Unity</p>
  
          <img onClick={this.handleShow} alt="PetSwipe" src={require('./petswipe.png')} />
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Galvanize Unity</Modal.Title>
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
               <ul>
                    <li><a href="http://petswipe.surge.sh/">http://petswipe.surge.sh</a></li>
                    <li><a href="https://github.com/andimalfresh/pet-swipe-frontend">Front End Repo</a></li>
                    <li><a href="https://github.com/andimalfresh/pet-swipe-backend">Back End Repo</a></li>
                    <li><a href="https://docs.google.com/presentation/d/1hrRowCFc3lyWNFOSOJAcVVBYkdpDUjKGcVCHqjvjhGo/edit?usp=sharing">Google Slides Presentation</a></li>
               </ul>
               <hr />
               <ul>
                   <li>HTML</li>
                   <li>CSS</li>
                   <li>Javascript</li>
                   <li>VUE.js</li>
                   <li>NodeJS</li>
                   <li>Knex</li>
                   <li>NodeMailer</li>
                   <li>PostgreSQL</li>
                   <li>Heroku</li>
               </ul>
              <hr />
  
              <h4>Galvanize Unity</h4>
              <p>
                Galvanize Unity was our end of Block Three Project attendending Galvaize's Web Development Immersive Program.
                After spending the entire block learning React and back end development we were paired with three other cohorts and 
                given 4 days to create a full CRUD Application of our choosing using a completely foreign library (Vue/Angular/Swift)
                using the Agile software development model.
              </p>
               <p>
                Choosing the Vue library our group began development of the application titled PetSwipe. The application was to incorperate modern
                web development practices to better facilite the UX for those wishing to adopt a pet. While taking on Vue in 4 days and creating a working
                application our group did run into difficulties, espeically incorperting a swipe function in the application as the front end of the framework
                is written in the "light" version of Vue.
              </p>
              <p>
                Since our project presentation the application has been re-engineered on the front end utilizing React-Native and is much more functional
                and responsive. In the future we plan to incorperte user authorization and the Twilio API for SMS/Messaging communication features.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }
  
 

  export default GalvanizeUnity