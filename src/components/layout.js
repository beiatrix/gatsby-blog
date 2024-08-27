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

const Layout = ({ pageTitle, children }) => {
  const { title } = useSiteMetadata()

  const navItems = [
    {
      text: 'Home',
      url: '/'
    },
    {
      text: 'About',
      url: '/about'
    },
    {
      text: 'Blog',
      url: '/blog'
    }
  ]

  return (
    <div className={container}>
      <header className={siteTitle}>{title}</header>
      <nav>
        <ul className={navLinks}>
          {
            navItems.map((item) => {
              return (
                <li className={navLinkItem}>
                  <Link
                    className={navLinkText}
                    to={item.url}
                  >
                    {item.text}
                  </Link>
                </li>
              )
            })
          }
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
