import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'

export default function blog() {
    
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

        // 1. Fetch the slug for posts
        // 2. Use slug to generate a link to the post page
        // 3. Test your work

    return (
        <Layout>
        <h2>Blog</h2>
        <ol>
            {data.allMarkdownRemark.edges.map((edge) => {
                return (
                    <li>
                        <h2><Link to={`/blog/${edge.node.fields.slug}`}>{edge.node.frontmatter.title}</Link></h2>
                        <p>{edge.node.frontmatter.date}</p>
                    </li>
                )
            })}
        </ol>
        <Link to='/'>Home</Link>
        </Layout>
    )
}
