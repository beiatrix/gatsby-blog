import * as React from "react"
import Layout from "../components/layout"
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

export const Head = () => (
  <>
    <title>About Me</title>
    <meta name="description" content="Your description" />
  </>
)

export default AboutPage