import React, { useState, useEffect } from "react"
import axios from 'axios';

import Header from "../components/header"

export default function Search({ location }) {

    const [chars, setChars] = useState([]);

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
                {
                    chars.map(char => (
                        <div key={char.id}>
                            <h2>Name: {char.attributes.name}</h2>
                            <div dangerouslySetInnerHTML={{ __html: char.attributes.description }} />
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