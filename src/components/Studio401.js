import React from 'react'
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'


class Studio401 extends React.Component {
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
          <p className="titleText">Project : Studio 401</p>
  
          <img onClick={this.handleShow} alt="Studio 401 Salon" src={require('./studio401.jpg')} />
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Studio 401 Salon</Modal.Title>
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
               <a href="http://studio401llc.com">www.studio401llc.com</a>
  
              <hr />
               <ul>
                   <li>HTML</li>
                   <li>CSS</li>
                   <li>Squarespace UX</li>
                   <li>Google Maps</li>
                   <li>Google AdWords</li>
                   <li>Google AdWordsExpress</li>
                   <li>Google Business</li>
                   <li>Google Analytics</li>
               </ul>
              <hr />
  
              <h4>Studio 401 Salon</h4>
              <p>
                Studio 401 Salon is a Winter Park, CO's premier modern salon specializing in hair, waxing, and tanning services.
               </p>
               <p>
                In 2016, my then girlfriend and I decided that due to her success as a stylist with a large customer base that we wanted 
                to go into business for ourselves and create the best modern salon in the Grand County area. We handled the build out,
                intereior decorating, infrastructre, customer database integration, scheduling services, identity design, web design, Google Analytics,
                Google Adwords/AdWordsExpress, SEO, brand and marketing management all our selves.
               </p>
               <p>
                We used Squarespace for web design and deployment due to its ease of use, responsive mobile design, and 
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
  
 

  export default Studio401