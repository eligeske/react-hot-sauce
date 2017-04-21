import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/styles';

export default function CodeJS(props) {
  return (
    <SyntaxHighlighter
      language={'javascript'}
      style={github}
    >{props.children}</SyntaxHighlighter>
  );
}
