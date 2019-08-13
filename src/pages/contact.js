import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

export default function contact() {
    return (
            <Layout>
                <Head title='Contact' />
            <h2>Contact</h2>
            <p>Heres where my contact info goes</p>
            <Link to='/'>Home</Link>
            </Layout>
    )
}
