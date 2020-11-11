import React from 'react'
import './Jumbotron.css'
import { Link } from 'react-router-dom'
import { Button } from '../Button'

function Jumbotron({
  img,
  alt,
  textLogo,
  textHeading1,
  textHeading2,
  textDesc
}) {
  return (
    <>
      <div className="jumbotron-container">
        <div className="jumbotron-img">
          <div className="content">
            <div className="text">
              <p className="text--logo">{textLogo}</p>
              <div className="margin--heading">
                <h1 className="text--heading">{textHeading1}</h1>
                <h1 className="text--heading">{textHeading2}</h1>
              </div>
              <p className="text-desc">{textDesc}</p>
            </div>
            <div className="btn__luar">
              <div className="button-jmb">
                <Link className="button__inner">
                  <Button buttonSize="btn--large" buttonStyle="btn--primary" buttonBorder="large">
                    <p className="button-text">Playstore</p>
                  </Button>
                </Link>
              </div>
              <div className="button-jmb">
                <Link className="button__inner2">
                  <Button buttonSize="btn--large" buttonStyle="btn--outline" buttonBorder="large">
                    <p className="button-text">App Store</p>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Jumbotron
