import React from 'react'
import './Button.css'

const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large']

const BORDER = ['med', 'large']

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonBorder
}) => {
  const checkButtonStyles = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

  const checkButtonBorder = BORDER.includes(buttonBorder) ? buttonBorder : BORDER[0]

  return (
    <button
      className={`btn ${checkButtonSize} ${checkButtonStyles} ${checkButtonBorder}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}
