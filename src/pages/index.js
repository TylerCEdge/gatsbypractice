import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'


const IndexPage = () => {
    return (
            <Layout>
            <h1>Hello,</h1>
            <h2>I'm Tyler, a full-stack developer living in beautiful Lake Wylie!</h2> 
            <p>Need a developer? <Link to='/contact'>Contact me.</Link></p>
            <p>Contact <Link to='/contact'>here</Link></p>
            <p>About <Link to='/about'>here</Link></p>
            </Layout>
    )
}

export default IndexPage
