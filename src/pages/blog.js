import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

export default function blog() {
    return (
        <Layout>
        <h2>Blog</h2>
        <p>Blog bloggidy blog blog</p>
        <Link to='/'>Home</Link>
        </Layout>
    )
}
