import React from 'react'
// import { Navbar } from 'react-bootstrap'
// import { NavItem } from 'react-bootstrap'
// import { Nav } from 'react-bootstrap'




const Mavbar = (props) => {
    return(
      <>
      <div className="titleBar">
          <div className="titleName">Andrew Pedersen <img className="umbrella" alt="ultimaUmbrella" src={require('./ultimaUmbrella.png')} />
            Software Engineer </div>
      </div>
      <div className="navBar">
        <div className="navDeco">
            <div className="navBarDeco1">
            </div>
            <div className="navBarDeco2">
            </div>
            <div className="navBarDeco3">
            </div>   
        </div>
      </div>
    </>
    )
}
export default Mavbar