export const BackgroundCode =
  `<div className="relative overflow-clip">
  <motion.img
    src={bg}
    className="w-full"
    initial={{ scale: 1.5 }}
    animate={{ scale: 1, transition: { duration: 3 } }}
  />
  <motion.div
    className="absolute inset-0 bg-black"
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.4, transition: { duration: 2 } }}
  />
</div>`;

export const LinksCode =
  `{links.map((link, i) => (
  <motion.a
    key={link}
    className="link"
    href="#"
    initial={{ opacity: 0, y: 200 }}
    animate={{
      opacity: 1,
      y: 0,
      transition: { delay: 1 + i * 0.2 },
    }}>
    {link}
  </motion.a>
))}`;
