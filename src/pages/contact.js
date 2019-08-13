import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/footer'
import Header from '../components/header'

export default function contact() {
    return (
        <div>
            <Header />
            <h1>Contact Page</h1>
            <p>This will be how you can get in touch with me!</p>
            <p>Home <Link to='/'>here</Link></p>
            <p>About <Link to='/about'>here</Link></p>
            <Footer />

        </div>
    )
}
