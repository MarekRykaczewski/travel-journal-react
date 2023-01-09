import React from "react"
import globeIcon from "../assets/globe-line-icon.png"

export default function Navbar() {
    return (
        <nav className="navbar"> 
            <img className="navbar--icon" src={globeIcon} alt="globe-icon" />
            <p> my travel journal </p>
        </nav>
    )
}