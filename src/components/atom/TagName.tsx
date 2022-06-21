import React from 'react';
import * as styles from '@styles/components/atom/tagName.module.css';

interface Props {
  tag: string[];
}

const TagName: React.FC<Props> = (props) => {
  const { tag } = props;
  const tagReplace = tag.map((tagName)=> {
    if (tagName === 'javascript') return 'js';
    else return tagName;
  });

  return (
    <div>
      {tagReplace.map((tagName, index) => {
        return (
          <span className={styles[tagName]} key={`tagName_${index}`}>
            <p>{tagName}</p>
          </span>
        )
      })}
    </div>
  )
}

export default TagName;