import React, { useState, useEffect } from "react"
import axios from 'axios';
import { CircularProgress } from "@material-ui/core"

import Header from "../components/header"
import "../styles.css"


export default function Search({ location }) {

    if (!location.state) {
        console.log("entered")
        location.state = { searchTerm: "Naruto" };
    }

    console.log(location)
    const [chars, setChars] = useState([]);
    const maxLengthOfDesc = 500

    useEffect(() => {
        axios.get(`https://kitsu.io/api/edge/characters?filter[name]=${location.state.searchTerm}`)
            .then(res => {
                setChars(res.data.data)
            })

    })

    return (
        <div>
            <Header />
            <div className="container">
                <h1>You searched for: {location.state.searchTerm}</h1>
                <div className="center-within">{(chars.length === 0) && <CircularProgress size={100} />}</div>
                {
                    chars.map(char => (
                        <div key={char.id}>
                            <h2>Name: {char.attributes.name}</h2>
                            <div className="truncate" dangerouslySetInnerHTML={{
                                __html:
                                    char.attributes.description.length > maxLengthOfDesc ? char.attributes.description.substring(0, maxLengthOfDesc - 3) + "..." : char.attributes.description.substring(0, maxLengthOfDesc)
                            }} />

                            {
                                char.attributes.image &&
                                <img src={char.attributes.image.original} alt="Naruto" />
                            }
                        </div>
                    ))
                }

            </div>
        </div>
    )
}