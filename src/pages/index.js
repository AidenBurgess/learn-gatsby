import React, { useState } from "react"
import Header from "../components/header"
import SearchBar from "material-ui-search-bar";


import "../styles.css"
import { navigate } from "gatsby";


export default function Home() {

  const [searchTerm, setSearchTerm] = useState("");

  function search(searchTerm) {
    console.log(searchTerm)
    navigate(
      "/search",
      {
        state: { searchTerm }
      }
    )
  }

  return (
    <div>
      <Header />
      <h1>Search Anime Characters!</h1>
      <SearchBar
        value={searchTerm}
        onChange={(newValue) => setSearchTerm(newValue)}
        onRequestSearch={() => search(searchTerm)}
        placeholder="e.g. Naruto Uzumaki"
      />

      <div className="container">
        <h1>About Me</h1>
        <p>Reprehenderit Lorem anim ex tempor duis Lorem in. Adipisicing magna deserunt et exercitation sint aliqua cillum ullamco do cillum excepteur est do. Magna deserunt quis tempor laborum cillum excepteur cupidatat eiusmod esse labore cupidatat. Est officia Lorem consequat ad esse esse cupidatat amet magna ullamco amet non. Ipsum cillum aute enim sint proident ut sit ullamco voluptate ut commodo proident tempor.</p>
        <h1>My Interests</h1>
        <p>Deserunt ex fugiat est excepteur velit veniam sint cupidatat. Minim fugiat ut quis commodo ea quis ea ut quis officia magna dolor esse. Irure nostrud esse nisi ad mollit in duis voluptate anim. Veniam pariatur quis mollit pariatur. Ex enim consectetur quis irure sint fugiat proident ut reprehenderit id aliqua cillum.</p>
      </div>
    </div>
  )
}

