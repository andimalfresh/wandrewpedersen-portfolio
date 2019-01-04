import React from 'react'

const Mavbar = (props) => {
    return(
      <>
      <div className="titleBar">
          <div className="titleName">Andrew Pedersen <img className="umbrella" alt="ultimaUmbrella" src={require('./ultimaUmbrella.png')} />
           <span className="titleJob">Software Engineer</span> 
          </div>
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