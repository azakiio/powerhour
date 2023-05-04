export const LayoutExample1 = (
  isLayout = false,
  isHeight = false
) => `<AnimatePresence>
  {todos.map(({ id, done, description }) => (
    <motion.div
      key={id}${isLayout ? "\n      layout" : ""}
      className="todo"
      initial={${isHeight ? "{height: 0}" : "{ opacity: 0, x: 100 }"}}
      animate={${isHeight ? '{height: "auto"}' : "{ opacity: 1, x: 0 }"}}
      exit={${isHeight ? "{height: 0}" : "{ opacity: 0, x: 100 }"}}
    >
      <div>{description}</div>
      <button onClick={() => remove(id)}>
        check
      </button>
    </motion.div>
  ))}
</AnimatePresence>
`;
