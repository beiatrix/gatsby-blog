import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const AboutPage = () => (
  <Layout pageTitle="About Me">
    <p>
      I'm a smoothie enthusiast who loves experimenting with frozen tropical fruits to create refreshing and delicious drinks. 🍓
    </p>
    <StaticImage
      alt="Smoothie"
      src="../images/smoothie.jpg"
    />
  </Layout>
)

export const Head = () => <Seo title="About Me" />

export default AboutPage