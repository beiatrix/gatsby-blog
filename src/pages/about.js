import * as React from "react"
import Layout from "../components/layout"

const AboutPage = () => (
  <Layout pageTitle="About Me">
    <p>
      Here are some cool fun facts, courtesy of a certain popular AI 🤖
    </p>
    <ol>
      <li>
        <strong>Smoothie Connoisseur:</strong> I'm a smoothie enthusiast who loves experimenting with frozen tropical fruits to create refreshing and delicious drinks.
      </li>
      <li>
        <strong>Code and Creativity:</strong> I'm not only a skilled developer but also a creative problem solver, seamlessly blending my expertise in Vue and React to build both functional and visually appealing web applications.
      </li>
      <li>
        <strong>Tech Leader with a Teaching Heart:</strong> As a senior software engineer, I'm taking on more leadership roles in project management, but I'm also passionate about teaching and inspiring the next generation of young coders.
      </li>
    </ol>
  </Layout>
)

export const Head = () => (
  <>
    <title>About Me</title>
    <meta name="description" content="Your description" />
  </>
)

export default AboutPage