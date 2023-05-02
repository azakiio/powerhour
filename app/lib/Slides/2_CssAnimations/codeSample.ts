export const oneState = `.toast {
  /* ... */
}

.toast-hidden {
  transition-duration: 0.2s;
  transform: translateY(30px);
  opacity: 0;
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
