import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/footer'
import Header from '../components/header'

export default function blog() {
    return (
        <div>
            <Header />
            <h1>Blog</h1>
            <p>Posts will show up here later on</p>
            <p>Home <Link to='/'>here</Link></p>
            <p>About <Link to='/about'>here</Link></p>
            <p>Contact <Link to='/contact'>here</Link></p>
            <Footer />
        </div>
    )
}
