import { Brightness5Rounded, Brightness7 } from '@material-ui/icons'
import React from 'react'
import "./ToggleIcon.scss";
import LightMode from "./LightMode"


export default function ToggleIcon() {

    const [theme,toggleTheme] = LightMode();


    return (
        <div onClick={toggleTheme}>

            {theme==="light" ? (<Brightness7 className="darkmode"/>) : (<Brightness5Rounded className="lightmode"/>) }
        </div>
    )
}
