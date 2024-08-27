import * as React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const Seo = ({ title: pageTitle }) => {
  const { title: siteTitle } = useSiteMetadata()

  return (
    <title>{pageTitle} | {siteTitle}</title>
  )
}

export default Seo