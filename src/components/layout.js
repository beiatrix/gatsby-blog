import * as React from "react"
import { Link } from "gatsby"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { 
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle
} from "./layout.module.css"

// import Header from "./header"

const Layout = ({ pageTitle, children }) => {
  const { title } = useSiteMetadata()

  return (
    <div className={container}>
      <header className={siteTitle}>{title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link
              className={navLinkText}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={navLinkText}
              to="/about"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
