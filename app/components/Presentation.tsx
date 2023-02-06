import { useNavigate, useSearchParams } from "@remix-run/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { slides } from "./Slides";

export default function Presentation() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const page = parseInt(searchParams.get("page") || "0");

  useEffect(() => {
    const toggleCode = (e: KeyboardEvent) => {
      if (e.key === "[") {
        navigate(`/?page=${Math.max(page - 1, 0)}`);
      }
      if (e.key === "]") {
        navigate(`/?page=${Math.min(page + 1, slides.length - 1)}`);
      }
    };

    document.addEventListener("keyup", toggleCode);

    return () => document.removeEventListener("keyup", toggleCode);
  }, [page, navigate]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={page}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0, transition: { duration: 0 } }}
        animate={{ opacity: 1 }}
        className="mx-auto min-h-screen flex overflow-clip flex-col items-center">
        {slides[page].component}
      </motion.div>
    </AnimatePresence>
  );
}
