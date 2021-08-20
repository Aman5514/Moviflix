import React from 'react'
import "./Button.scss"


export default function Button({title,onclick,style}) {
    return (
        <button style={style} onClick={onclick} className="login_button">{title}</button>
    )
}
