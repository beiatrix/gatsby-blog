import * as React from "react"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout pageTitle="Home Page">
    <p>Hi 👋 Don't mind me, I'm just over here doing a tutorial.</p>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <title>Home Page</title>

export default IndexPage
