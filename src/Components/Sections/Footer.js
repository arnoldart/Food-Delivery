import React from 'react'
import './Footer.css'
import {Button} from '../Button'

function Footer({
  alt,
  textHeading,
  textDesc,
  imgLogo,
  imgSocial,
  footertext1,
  footertext2
}) {
  return (
    <>
      <div>
        <div className="footer--img">
          <div className="footer--content">
            <h1>{textHeading}</h1>
            <p className="footertext--desc">{textDesc}</p>
          </div>
          <div className="footer--button">
            <div className="btn--footer1">
              <Button buttonSize="btn--medium">
                <p>Buy Now</p>
              </Button>
            </div>
            <div className="btn--footer2">
              <Button buttonBorder="med" buttonStyle="btn--outline" buttonSize="btn--medium">
                <p>Try for free</p>
              </Button>
            </div>
          </div>
        </div>
        <div className="footer--copyright">
          <img src={imgLogo} alt={alt} className="footerlogo"/>
          <img src={imgSocial} alt={alt}/>
          <p className="footertext1">{footertext1}</p>
          <p className="footertext2">{footertext2}</p>
        </div>
      </div>
    </>
  )
}

export default Footer
