export const marginTopCSS = `.closed {
  margin-top: -100%;
}
  
.open {
  margin-top: 0;
}`;

export const maxHeightCSS = (value: string) => `.closed {
  max-height: 0;
}
  
.open {
  max-height: ${value};
}`;

export const heightCSS = (value: string) => `.closed {
  height: 0;
}
  
.open {
  height: ${value};
}`;

export const AccordionCode = `const [isOpen, setOpen] = useState(false);

<div className="accordion">
  <button onClick={() => setOpen(!isOpen)}>
    <div>{title}</div>
  </button>

  {isOpen && (
    <div>
      {children}
    </div>
  )}
</div>`;

export const CSSAccordion = `<div className="accordion">
  <button onClick={() => setOpen(!isOpen)}>
    <div>{title}</div>
  </button>

  <div 
    className="accordion-content" 
    aria-expanded={isOpen}
  >
    {children}
  </div>
</div>`;

export const CSSAccordionStyles = `.accordion-content {
  display: none;
}

.accordion-content[aria-expanded="true"] {
  display: block;
}`;
