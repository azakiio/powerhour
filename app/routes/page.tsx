import type { MetaFunction } from "@remix-run/node";
import {
  Link,
  Outlet,
  V2_MetaFunction,
  useLocation,
  useNavigate,
  useOutlet,
} from "@remix-run/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const meta: V2_MetaFunction = ({ location }) => {
  const page = location.pathname.split("/").at(-1) || 0;
  return [{ title: `Motion - Page: ${page}` }];
};

export default function Page() {
  const { pathname } = useLocation();
  const page = parseInt(pathname.split("/").at(-1) || "0");
  const maxPages = 15;
  const navigate = useNavigate();
  const outlet = useOutlet();

  useEffect(() => {
    const toggleCode = (e: KeyboardEvent) => {
      if (e.key === "[") {
        navigate(`/page/${Math.max(page - 1, 0)}`);
      }
      if (e.key === "]") {
        navigate(`/page/${Math.min(page + 1, maxPages)}`);
      }
    };

    document.addEventListener("keyup", toggleCode);

    return () => document.removeEventListener("keyup", toggleCode);
  }, [page, navigate]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
        className="flex flex-col items-center min-h-screen relative"
      >
        {outlet}
        <div className="absolute bottom-4 flex gap-8 items-center">
          <Link
            to={`/page/${Math.max(page - 1, 0)}`}
            className="btn btn-primary btn-circle btn-sm"
          >
            <FaArrowLeft />
          </Link>
          <div>
            {page} / {maxPages}
          </div>
          <Link
            to={`/page/${Math.min(page + 1, maxPages)}`}
            className="btn btn-primary btn-circle btn-sm"
          >
            <FaArrowRight />
          </Link>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
