import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function CodeSnippet({ children, style, language = "jsx" }: CodeSnippetProps) {
  return (
    <SyntaxHighlighter
      language={language}
      style={materialDark}
      showLineNumbers={true}
      lineNumberStyle={i => ({ paddingRight: i < 10 ? "1.6em" : "1em" })}
      customStyle={{ borderRadius: "1rem", fontSize: "0.875rem", ...style }}>
      {children}
    </SyntaxHighlighter>
  );
}

type CodeSnippetProps = {
  children: string;
  style?: React.CSSProperties;
  language?: string;
};
