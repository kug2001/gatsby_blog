import React from 'react'
import retypeReact from "rehype-react";
import Counter from "@common/md-components/Counter";

const renderAst:any = new (retypeReact as any)({
  createElement: React.createElement,
  components: { 
    "md-counter" : Counter
    // 커스텀 컴포넌트들의 리스트들을 여기에다 추가
  }
})
.Compiler;

export default renderAst;

