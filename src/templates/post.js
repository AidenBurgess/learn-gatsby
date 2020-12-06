import React from "react"
import { graphql } from 'gatsby'

import Header from "../components/header"

export default function Post(result) {
    const post = result.data.markdownRemark
    return (
        <div>
            <Header/>
            <div className="container">
                <h1>{post.frontmatter.title}</h1>
                <h2>{post.frontmatter.author}</h2>
                <p>Time to read: {post.timeToRead} mins</p>
                <div dangerouslySetInnerHTML={{__html: post.html}}/>
            </div>
        </div>
    )
}

export const query = graphql`
query GetBlogPostById($id: String) {
    markdownRemark(id: {eq: $id}) {
      id
      frontmatter {
        author
        date
        path
        title
      }
      html
      timeToRead
    }
  }
  `