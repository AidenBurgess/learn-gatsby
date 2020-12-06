import React from "react"
import { graphql, Link } from 'gatsby'

import Header from "../components/header"

export default function Blog(result) {

    const posts = result.data.allMarkdownRemark.nodes


    return(
        <div>
            <Header/>
            <div className="container">
                {
                    posts.map(post => (
                        <div key={post.id}>
                            <h1>
                                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                            </h1>
                            <h2>{post.frontmatter.date}</h2>
                            <p>{post.excerpt}</p>
                            <p>Time to read: {post.timeToRead} mins</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export const query = graphql`
query GetAllBlogPosts {
    allMarkdownRemark {
      nodes {
        id
        frontmatter {
          author
          date
          path
          title
        }
        excerpt
        timeToRead
      }
    }
  }
  `