import * as React from "react";
import { GatsbyBrowser } from "gatsby";
import { RecoilRoot } from "recoil";


export const wrapPageElement:GatsbyBrowser["wrapPageElement"] = ( {element, props} ) => {
  return (
    <RecoilRoot {...props}>
      {element}
    </RecoilRoot>
  )
}