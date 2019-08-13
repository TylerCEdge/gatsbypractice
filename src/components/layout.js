import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

export default function layout(props) {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}