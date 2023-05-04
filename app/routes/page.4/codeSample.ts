export const marginTopCSS = `.content {
  transition-property: margin-top;
  transition-duration: 1s;
  overflow: hidden;
  margin-top: -100%;
}
  
.content[aria-expanded="true"] {
  margin-top: 0;
}`;

export const maxHeightCSS = (value: string) => `.content {
  transition-property: max-height;
  transition-duration: 1s;
  overflow: hidden;
  max-height: 0;
}
  
.content[aria-expanded="true"] {
  max-height: ${value};
}`;

export const heightCSS = (value: string) => `.content {
  transition-property: height;
  transition-duration: 1s;
  overflow: hidden;
  height: 0;
}
  
.content[aria-expanded="true"] {
  height: ${value};
}`;

export const displayNone = (value: string) => `.content {
  transition-property: height;
  transition-duration: 1s;
  overflow: hidden;
  max-height: 0;
  display: none;
}
  
.content[aria-expanded="true"] {
  max-height: ${value};
  display: block;
}`;

export const AccordionCode = `<div 
  className="content" 
  aria-expanded={isOpen}
>
  {children}
</div>`;
