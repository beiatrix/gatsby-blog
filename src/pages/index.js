import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => (
  <Layout pageTitle="Home Page">
    <p>Hi 👋 Don't mind me, I'm just over here doing a tutorial.</p>
    <StaticImage
      alt="Dog"
      src="../images/dog.jpg"
    />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home Page" />

export default IndexPage
