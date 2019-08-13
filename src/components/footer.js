import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import footerStyles from './footer.module.scss'

export default function footer() {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    return (
        <div>
            <footer className={footerStyles.footer}>
                <p>Created by {data.site.siteMetadata.author}, © 2019</p>
            </footer>
        </div>
    )
}
