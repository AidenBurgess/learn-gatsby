/**
 * This is the gatsby-node.js file
 * This code will be executed when the website is being built
 * Learn more here: https://www.gatsbyjs.org/docs/api-files-gatsby-node/
 */

// Create pages programmatically

const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  // get the blog posts using graphQL
  const result = await graphql(`
  query GetAllBlogPosts {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
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
  `)
  // get the blog post template
  const component = path.resolve("src/templates/post.js")

  // use the createPage() method to create pages.

  result.data.allMarkdownRemark.nodes.forEach(post => (
    createPage({
      path: post.frontmatter.path,
      component: component,
      context:{
        id: post.id
      }
    })
  ))

}
