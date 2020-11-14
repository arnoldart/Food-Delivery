import React from 'react'
import './HeroSections.css'

function HeroSections({
  alt,
  img,
  textDesc,
  textHeading,
  textLogo,
}) {
  return(
    <>
      <div className="heros--container">
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