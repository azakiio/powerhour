import { Link, useNavigate, useSearchParams } from "@remix-run/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
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
        className="flex flex-col items-center min-h-screen relative"
      >
        {slides[page]}
        <div className="absolute bottom-4 flex gap-8 items-center">
          <Link
            to={`/?page=${Math.max(page - 1, 0)}`}
            className="btn btn-primary btn-circle btn-sm"
          >
            <FaArrowLeft />
          </Link>
          <div>
            {page} / {slides.length - 1}
          </div>
          <Link
            to={`/?page=${Math.min(page + 1, slides.length - 1)}`}
            className="btn btn-primary btn-circle btn-sm"
          >
            <FaArrowRight />
          </Link>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
