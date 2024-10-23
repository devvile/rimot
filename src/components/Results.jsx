import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";


export default function Results(){
    const {isDarkTheme,toggleTheme} = useContext(ThemeContext);
    const mode = isDarkTheme? "DARK" : "LIGHT"
;    return (
        <>
            <p>Your mode is {mode}</p>
        </>
    )
}