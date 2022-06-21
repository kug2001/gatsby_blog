import * as React from "react";
import { GatsbyBrowser } from "gatsby";
import { RecoilRoot } from "recoil";

//HINT: 아래와 같이 wrapPageElement로 감싸서 리코일을 처리해준다.
export const wrapPageElement:GatsbyBrowser["wrapPageElement"] = ( {element, props} ) => {
  return (
    <RecoilRoot {...props}>
      {element}
    </RecoilRoot>
  )
}