import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function CodeSnippet({ children }: CodeSnippetProps) {
  return <SyntaxHighlighter
    language="jsx"
    style={materialDark}
    showLineNumbers={true}
    customStyle={{ borderRadius: "1rem", fontSize: '1rem' }}
  >
    {children}
  </SyntaxHighlighter>
}



type CodeSnippetProps = {
  children: string;
}