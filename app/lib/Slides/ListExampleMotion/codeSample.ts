export const LayoutExample1 = `<AnimatePresence>
  {todos.map(({ id, done, description }) => (
    <motion.div
      key={id}
      className="todo"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
    >
      <div>{description}</div>
      <button onClick={() => remove(id)}>✅</button>
    </motion.div>
  ))}
</AnimatePresence>
`;
