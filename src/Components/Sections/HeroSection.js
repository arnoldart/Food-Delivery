import React from 'react'
import './HeroSection.css'

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
        <div className="heros--content">
          <aside className="heros--desc">
            <p className="herostext--logo">{textLogo}</p>
            <h2 className="herostext--heading">{textHeading}</h2>
            <p className="herostext--desc">{textDesc}</p>
          </aside>
          <div className="heros-img">
            <img src={img} alt={alt}></img>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSections