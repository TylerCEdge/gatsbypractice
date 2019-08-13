import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import blogStyles from './blog.module.scss'

//
// Goal: Render contentful Posts
//
// 1. Swap out the markdown query with the contentful query
// 2. Update the compoonent to render the new data
//    - Don't worry if the link links to a non-existant page
// 3. Test your work!

export default function blog() {
    
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost (
                sort: { fields: publishedDate, order: DESC }
            ) { edges {
                node {
                    title
                    slug
                    publishedDate(formatString:"MMMM Do, YYYY")
                }
            }

            }
        }
    `)

        // 1. Fetch the slug for posts
        // 2. Use slug to generate a link to the post page
        // 3. Test your work!

    return (
        <Layout>
        <h2>Blog</h2>
        <ol className={blogStyles.posts}>
            {data.allContentfulBlogPost.edges.map((edge) => {
                return (
                    <li className={blogStyles.post}>
                        <Link to={`/blog/${edge.node.slug}`}>
                        <h2>{edge.node.title}</h2>
                        <p>{edge.node.publishedDate}</p>
                        </Link>
                    </li>
                )
            })}
        </ol>
        <Link to='/'>Home</Link>
        </Layout>
    )
}
