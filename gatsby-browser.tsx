
import * as React from "react"
import { GatsbyBrowser } from "gatsby"
import Layout from "./src/components/layout/Layout";


export const wrapPageElement:GatsbyBrowser["wrapPageElement"] = ( {element, props} ) => {
  return <Layout {...props}>{element}</Layout> 
}