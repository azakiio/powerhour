import { useNavigate, useSearchParams } from "@remix-run/react";
import { useEffect } from "react";
import { slides } from "./Slides";
import { AnimatePresence, motion } from "framer-motion";

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
        initial={{ opacity: 0, }}
        exit={{ opacity: 0, }}
        animate={{ opacity: 1, }}
        className="container mx-auto p-8 py-20 min-h-screen flex overflow-clip flex-col max-w-screen-xl items-center"
      >
        <div className="absolute text-lg font-bold self-end">
          Page: {page} / {slides.length - 1}
        </div>
        {slides[page].component}
      </motion.div>
    </AnimatePresence>
  );
}
