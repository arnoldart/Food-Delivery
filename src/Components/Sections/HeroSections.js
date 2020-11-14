import React from 'react'
import './HeroSections.css'

function HeroSections({
  alt,
  img,
  textDesc,
  textHeading,
  textLogo,
  textHeading2
}) {
  return(
    <>
      <div className="hero--container">
        <div className="hero--top">
          <hr className="hero--bordertop" />
          <h1 className="text--heading2">{textHeading2}</h1>
        </div>
        <div className="hero--content">
          <div className="hero--img">
            <img src={img} alt={alt}></img>
          </div>
          <aside className="hero--desc">
            <p className="herotext--logo">{textLogo}</p>
            <h2 className="herotext--heading">{textHeading}</h2>
            <p className="herotext--desc">{textDesc}</p>
          </aside>
        </div>
      </div>
    </>
  )
}

export default HeroSections