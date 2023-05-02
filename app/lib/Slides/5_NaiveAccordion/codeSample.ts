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

export const AccordionCode = `<div className="accordion">
  <button onClick={() => setActive(!active)}>
    <div className="title">{title}</div>
  </button>

  <div className={isOpen ? 'open' : 'closed'}>
    {children}
  </div>
</div>`;
