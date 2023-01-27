import { Link, useSearchParams } from "@remix-run/react";
import SlideTemplate from "./SlideTemplate";

export default function Presentation() {
  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "0");

  return (
    <div className="container mx-auto p-8 py-24 min-h-screen flex">
      <Link to={`/?page=${Math.max(page - 1, 0)}`} className="border p-2 rounded">
        Back
      </Link>
      <SlideTemplate page={page} showCode={false} />
      <Link to={`/?page=${Math.min(page + 1)}`} className="border p-2 rounded">
        Next
      </Link>
    </div>
  );
}
