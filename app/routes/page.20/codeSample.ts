export const toast_v1 = `.toast {
  /* ... */
}

.toast-hidden {
  transition-duration: 0.2s;
  transform: translateY(100%);
  opacity: 0;
}

.toast-visible {
  transition-duration: 0.5s;
  transform: translateY(0);
  opacity: 1;
}`;

export const toast_v2 = `.toast-gone {
  transition-duration: 0.2s;
  transform: translateY(100%);
  opacity: 0;
  display: none;
}

.toast-visible {
  transition-duration: 0.5s;
  transform: translateY(0);
  opacity: 1;
}`;

export const toast_v3 = `.toast-hidden {
  transition-duration: 0.2s;
  transform: translateY(100%);
  opacity: 0;
}

.toast-visible {
  transition-duration: 0.5s;
  transform: translateY(0);
  opacity: 1;
}

.toast-none {
  display: none;
}`;

export const uglyReact = `const Toast = ({children}) => {
  const [active, setActive] = useState('toast-hidden');

  useEffect(() => {
    setActive('toast-visible');
  }, []);

  const clickHandler = () => {
    setActive('toast-hidden');
    setTimeout(() => setActive('toast-none'), 200);
  }

  return (
    <button 
      className={cx("toast", active)} 
      onClick={clickHandler}
    >
      {children}
    </button>;
  )
}`;

export const reactCode = `const Toast = ({children}) => {
  const [active, setActive] = useState('toast-hidden');

  useEffect(() => {
    setActive('toast-visible');
  }, []);

  return (
    <button 
      className={cx("toast", active)} 
      onClick={() => setActive('toast-hidden')}
    >
      {children}
    </button>;
  )
}`;
