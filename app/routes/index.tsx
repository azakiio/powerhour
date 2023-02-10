import { MetaFunction } from "@remix-run/node";
import Presentation from "~/components/Presentation";
import { slides } from "~/components/Slides";

export const meta: MetaFunction = ({ location }) => {
  const page = new URLSearchParams(location.search).get("page") || 0;
  return { title: `Motion - Page: ${page} / ${slides.length - 1}` };
};

export default function Index() {
  return <Presentation />;
}
