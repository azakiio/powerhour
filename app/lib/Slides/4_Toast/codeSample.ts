export const hidden_v1 = `.toast {
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

export const hidden_v2 = `.toast {
  /* ... */
}

.toast-hidden-v2 {
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
