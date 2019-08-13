import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/footer'
import Header from '../components/header'

export default function about() {
    return (
        <div>
            <Header />
            <h1>About Section</h1>
            <p>This will contain information about me!</p>
            <p>Contact me. <Link to='/contact'>here</Link></p>
            <p>Home <Link to='/'>here</Link></p>
            <Footer />
        </div>
    )
}
