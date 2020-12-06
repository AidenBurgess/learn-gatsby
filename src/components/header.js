import React from "react"
import { Link } from "gatsby"
import "../styles.css"

export default function Header() {
  return (
    <header>
      <p className="name">Aiden Burgess</p>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/education">Education</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </header>
  )
}
