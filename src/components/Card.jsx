import React from "react"
import mapPinIcon from "../assets/map-pin-icon.png"

export default function Card(props) {
    return (
        <div className="card"> 
            <img className="card--photo" src={`${props.item.imageUrl}`} alt="location-icon" />
            <div className="card--body">
                <div className="card--location">
                    <img className="card--icon" src={mapPinIcon} alt="location-icon" />
                    <span className="card--location--text">{props.item.location}</span>
                    <a className="card--location--link" href={`${props.item.googleMapsUrl}`}>View on Google Maps</a>
                </div>
                <p className="card--title">{props.item.title}</p>
                <span className="card--dates">{props.item.startDate} - {props.item.endDate}</span>
                <p className="card--description">{props.item.description}</p>
            </div>
        </div>
    )
}