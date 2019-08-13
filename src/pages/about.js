import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

export default function about() {
    return (
        <div>
            <Layout>
            <h2>About Me</h2> 
            <p>This is where I talk about me.</p>
            <Link to='/'>Home</Link>
            </Layout>
        </div>
    )
}
