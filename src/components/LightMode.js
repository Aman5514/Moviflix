import React,{ useState } from 'react';

const LightMode = () => {

const [theme,setTheme] = useState("dark");

const toggleTheme = ()=>
{
    theme === "dark" ? setTheme("light") : setTheme("dark");
}

    return [theme,toggleTheme];
}
export default LightMode;