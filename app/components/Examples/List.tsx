import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { movies } from "./movies";
import { CgClose } from "react-icons/cg";
import { FaFilm } from "react-icons/fa";
let uid = 3;

export default function List({ enabled = true }) {
  const [showList, setShowList] = useState(movies.slice(0, 3));
  return (
    <div>
      <h2 className="flex gap-6">
        <div>My Favourite Movies</div>
        <button
          className="btn btn-sm btn-primary text-sm normal-case flex gap-2"
          onClick={() => {
            setShowList([...showList, movies[Math.min(uid++, movies.length - 1)]]);
          }}>
          Add <FaFilm />
        </button>
      </h2>
      <div className="grid grid-cols-4 gap-2 not-prose select-none">
        <AnimatePresence mode="popLayout">
          {showList.map(({ id, title, date, url }) => (
            <motion.div
              layout
              key={id}
              className="w-full flex justify-end relative rounded-lg overflow-clip"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={enabled ? { type: "spring", damping: 20 } : { duration: 0 }}>
              <motion.div
                className="absolute inset-0 bg-black/75 flex flex-col justify-end p-2"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={enabled ? {} : { duration: 0 }}>
                <button
                  onClick={() => setShowList(showList.filter(movie => movie.id !== id))}
                  className="absolute btn btn-xs btn-circle btn-primary m-2 top-0 right-0">
                  <CgClose />
                </button>
                <div className="text-sm text-white/80">{date}</div>
                <div className="text-white font-bold whitespace-nowrap">{title}</div>
              </motion.div>
              <img src={url} alt="poster" className="object-cover" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
